﻿class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <style>
        header {
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: auto;
        }
        ul li {
          <!-- font-family: Inconsolata; -->
          line-height: 20px;
          list-style: none;
          display: flex;
          justify-content: center;
        }
        .social-row {
          font-size: auto;
        }
        .social-row li a {
          margin: 0 0px;
        }
      </style>
      <header>
        <ul>
          <li><a href="index.html"><img alt="ANDRE M. CHANG" width="50px" src="assets/ivj2_400.png"></a></li>
        </ul>
        <!-- <ul class="social-row"> -->
        <ul>
          <li><b>ANDRE M. CHANG</b></li>
          <li><a href="index.html">Home</a></li>
        </ul>
        <ul>
          <li><button id='dark-mode-toggle'><style="font-size:16px">&#127768 &#127774</button></li>
        </ul>
      </header>
    `;
  }
}
customElements.define('header-component', Header);