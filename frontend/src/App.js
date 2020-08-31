import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import data from './data';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';
// import PostModel from './models/postModel'
import ProductModel from '../src/models/productModel'
import './App.css';

Modal.setAppElement('#root')

class App extends React.Component {

  state = {
    name: "",
    team: "",
    cards: [],
    price: 0,
    modalIsOpen: false
  }

  async componentDidMount() {
    const response = await axios.get('http://localhost:3001/api/v1/product');
    this.setState({ cards: response.data });
    console.log(response);
  }

  openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitProduct = (event) => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      team: this.state.team,
      price: parseFloat(this.state.price)
    }
    ProductModel.createProduct(data)
      .then((response) => {
        console.log(response)
        this.setState({
          modalIsOpen: false
        })
        // this.props.history.push()
        this.setState({ cards: [...this.state.cards, response] });
      });
  }


  // ---- getProducts
  getProducts = async () => {
    const response = await axios.get('http://localhost:3001/api/v1/product')
    return response;
  }
  // testFunction = async () => {
  //   const data = await getProducts();
  //   console.log("tf1", data);
  // }
  // testFunction();



  // ----- postProducts
  postProducts = async () => {
    const response = await axios.post('http://localhost:3001/api/v1/product', {
      image: "http://localhost:3000/images/currypsa10.jpg",
      name: "Stephen Curry",
      team: "Warriors",
      price: 1000
    })
    return response;
  }

  // testFunction2 = async () => {
  //   const data = await postProducts();
  //   console.log(data);
  // }
  // testFunction2();
  setModalIsOpen = (boolean) => {
    this.setState({ modalIsOpen: boolean })
  }
  // [modalIsOpen, setModalIsOpen] = useState(false)
  // console.log("Modal is Open = ", modalIsOpen)
  // console.log(ProductScreen)
  render() {
    return (
      // empty element that doesn;t create any html i the browser
      <React.Fragment>
        <div className='grid-container'>
          <header className="header">
            <div className="brand">
              <button onClick={this.openMenu}>
                &#9776;
                </button>
              <Link to="/" >Cardboard Collectors</Link>
            </div>
            <div className="header-links">
              <a href="signin.html">Sign In</a>
              <a href="register.html">Register</a>
            </div>
          </header>

          <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={this.closeMenu}> X </button>
            <ul>
              <li><a href="index.html">Basketball</a></li>
              <li><a href="index.html">Baseball</a></li>
              <li><a href="index.html">Football</a></li>
            </ul>
          </aside>
          <main className="main">

            {/* ----- Sell Modal Button ----- */}
            <div className="sellModalForm">

              <button className="sellButton" onClick={() => this.setModalIsOpen(true)}>Sell your cards!</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => this.setModalIsOpen(false)}>
                <form>
                  <label>Player:</label>
                  <input onChange={this.handleInputChange} type="text" value={this.state.player} name="name" />
                  <label>Team:</label>
                  <input onChange={this.handleInputChange} type="text" value={this.state.team} name="team" />
                  <label>Price:</label>
                  <input onChange={this.handleInputChange} type="text" value={this.state.price} name="price" />
                  <div>
                    <Link to={"/"}>
                      <button onClick={this.submitProduct} className="sellButton">Post my Card!</button>
                    </Link>
                  </div>

                </form>
                <div>
                  <button onClick={() => this.setModalIsOpen(false)}>Close</button>
                </div>
              </Modal>

            </div>


            <div className="content">
              <Switch>
                <Route path="/product/:id" component={ProductScreen} />
                <Route path='/' exact={true} render={() => <HomeScreen cards={this.state.cards} />} />
                {/* <Route path="/" exact={true} component={HomeScreen} />  */}
              </Switch>
            </div>
          </main>
          <footer className="footer">All right reserved.</footer>
        </div>
      </React.Fragment>
    );
  }

}

export default withRouter(App);
//withRouter a way to get acces to get any information that is within a router
