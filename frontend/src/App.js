import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class ='grid-container'>
        <header class="header">
            <div class="brand">
                <button onclick="openMenu()">
                    &#9776;
                </button>
                <a href="index.html">Cardboard Collectors</a>
            </div>
            <div class="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>

        <aside class="sidebar">
            <h3>Shopping Categories</h3>
            <button class="sidebar-close-button" onclick="closeMenu()"> X </button>
            <ul>
                <li><a href="index.html">Pants</a></li>
                <li><a href="index.html">Shirts</a></li>
            </ul>
        </aside>
       
        <main class="main">
            <div class="content">
                <ul class="products">
                    <li>
                        <img src="./frontend/images/curry.jpg" alt="Curry">
                        <div class="product-name">
                            <a href="">Stephen Curry</a>
                            </div>
                        <div class="product-team">Warriors</div>
                        <div class="product-price">$1000</div>
                    </li>
                    <li>
                        <img src="./frontend/images/curry.jpg" alt="Curry">
                        <div class="product-name">
                            <a href="">Stephen Curry</a>
                            </div>
                        <div class="product-team">Warriors</div>
                        <div class="product-price">$1000</div>
                    </li>
                    <li>
                        <img src="./frontend/images/curry.jpg" alt="Curry">
                        <div class="product-name">
                            <a href="">Stephen Curry</a>
                            </div>
                        <div class="product-team">Warriors</div>
                        <div class="product-price">$1000</div>
                    </li>
                    <li>
                        <img src="./frontend/images/curry.jpg" alt="Curry">
                        <div class="product-name">
                            <a href="">Stephen Curry</a>
                            </div>
                        <div class="product-team">Warriors</div>
                        <div class="product-price">$1000</div>
                    </li>
                    <li>
                        <img src="./frontend/images/curry.jpg" alt="Curry">
                        <div class="product-name">
                            <a href="">Stephen Curry</a>
                            </div>
                        <div class="product-team">Warriors</div>
                        <div class="product-price">$1000</div>
                    </li>
                    <li>
                        <img src="./frontend/images/curry.jpg" alt="Curry">
                        <div class="product-name">
                            <a href="">Stephen Curry</a>
                            </div>
                        <div class="product-team">Warriors</div>
                        <div class="product-price">$1000</div>
                    </li>
                    <li>
                        <img src="./frontend/images/curry.jpg" alt="Curry">
                        <div class="product-name">
                            <a href="">Stephen Curry</a>
                            </div>
                        <div class="product-team">Warriors</div>
                        <div class="product-price">$1000</div>
                    </li>
                    <li>
                        <img src="./frontend/images/curry.jpg" alt="Curry">
                        <div class="product-name">
                            <a href="">Stephen Curry</a>
                            </div>
                        <div class="product-team">Warriors</div>
                        <div class="product-price">$1000</div>
                    </li>
                </ul>
            </div>
        </main>
        <footer class="footer">
            All rights reserved.
        </footer>
    </div>
  );
}

export default App;
