import React, { useState } from 'react';
import Modal from 'react-modal';
import data from './data';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import ListingScreen from './Listings/Listing'
import './App.css';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <BrowserRouter>
      <div classNameName='grid-container'>
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
                </button>
            <Link to="/" >Cardboard Collectors</Link>
          </div>
          <div className="header-links">


            <a href="sell.html">Sell</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}> X </button>
          <ul>
            <li><a href="index.html">Pants</a></li>
            <li><a href="index.html">Shirts</a></li>
          </ul>
        </aside>
        <main className="main">

          {/* ----- Sell Button ----- */}
          <div className="sellButton">
            <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
            <Modal isOpen={modalIsOpen}>
              <h2>Title</h2>
              <p>Body</p>
            </Modal>
          </div>


          <div className="content">
            <Route path="/products/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />

          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
