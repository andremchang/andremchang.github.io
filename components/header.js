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
		  font-size: auto;
          line-height: auto;
          list-style: none;
          display: flex;
          justify-content: center;
		  margin: 0px;
          padding: 0px;
        }
        .header-row {
          font-size: auto;
		  margin: 0px;
          padding: 5px;
        }
      </style>
      <header>
        <ul class="header-row">
          <li><a href="index.html"><img alt="ANDRE M. CHANG" width="50px" src="assets/ivj2_400.png"></a></li>
        </ul>
        <ul class="header-row">
          <li><b>ANDRE M. CHANG</b></li>
		  <li><a href="index.html">Home</a></li>
		</ul>
		  <ul class="header-row">
		  <li><button id='dark-mode-toggle'><style="font-size:16px">&#127768 &#127774</button></li>
        </ul>
      </header>
      <script src="script.js"></script>
    `;
  }
}
customElements.define('header-component', Header);