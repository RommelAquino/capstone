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


// class based components used (this.)
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: "",
      name: "",
      team: "",
      cards: [],
      price: 0,
      modalIsOpen: false
    }
    this.submitProduct = this.submitProduct.bind(this)
    this.getProducts2 = this.getProducts2.bind(this)
  }


  async componentDidMount() {
    console.log('test')
    const response = await axios.get('http://localhost:3001/api/v1/product');
    this.setState({ cards: response.data });
    console.log(response);
  }

  // componentDidMount() {
  //   this.getProducts()
  // }

  async getProducts2() {
    const response = await axios.get('http://localhost:3001/api/v1/product');
    this.setState({ cards: response.data });
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



  submitProduct(event) {
    event.preventDefault();
    // const {state}=this
    // const {image, name, team, price}=state
    const data = {
      name: this.state.name,
      team: this.state.team,
      image: this.state.image,
      price: parseFloat(this.state.price),
    };
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

  setModalIsOpen = (boolean) => {
    this.setState({ modalIsOpen: boolean })
  }


  render() {
    console.log(this.getProducts)
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
                // className={"sellModalForm"}
                isOpen={this.state.modalIsOpen}
                shouldCloseOnOverlayClick={true}
                // overlayClassName={"overlay"}
                style={{
                  overlay: {
                    position: 'fixed',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '100px',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.75)'
                  },
                  content: {
                    position: 'relative',
                    // top: '40px',
                    // left: '40px',
                    // right: '40px',
                    // bottom: '40px',
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px',
                    height: '300px',
                    width: '500px'
                  }
                }}
                onRequestClose={() => this.setModalIsOpen(false)}>
                <form className='modalForm'>
                  <label>Image URl:</label>
                  <input onChange={this.handleInputChange} type="text" value={this.state.image} name="image" />
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
                <div className='modalCloseBtn'>
                  <button onClick={() => this.setModalIsOpen(false)}>X</button>
                </div>
              </Modal>


            </div>




            <div className="content">
              <Switch>
                <Route path="/product/:id" render={(props) => (<ProductScreen {...props} getProducts={this.getProducts2} />)
                } handleDelete={this.handleDelete} />
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
