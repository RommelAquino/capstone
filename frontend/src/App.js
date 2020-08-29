import React, { useState } from 'react';
import Modal from 'react-modal';
import data from './data';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import ListingScreen from './Listings/Listing'
import './App.css';

Modal.setAppElement('#root')

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  const [modalIsOpen, setModalIsOpen] = useState(false)
  console.log(ProductScreen)
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
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
          <button className="sidebar-close-button" onClick={closeMenu}> X </button>
          <ul>
            <li><a href="index.html">Basketball</a></li>
            <li><a href="index.html">Baseball</a></li>
            <li><a href="index.html">Football</a></li>
          </ul>
        </aside>
        <main className="main">

          {/* ----- Sell Modal Button ----- */}
          <div className="sellModalForm">
            
              <button className="sellButton" onClick={() => setModalIsOpen(true)}>Sell your cards!</button>
              <Modal
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => setModalIsOpen(false)}>
                <form>
                  <label>Player:</label>
                  <input type="text" name="Player" />
                  <label>Team:</label>
                  <input type="text" name="Team" />
                  <label>Price:</label>
                  <input type="text" name="Price" />
                  <input type="submit" value="Submit" />
                </form>
                <div>
                  <button onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
              </Modal>
            
          </div>


          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
