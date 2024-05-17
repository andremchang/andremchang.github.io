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
		  margin: 7px;
          padding: 0px;
        }
      </style>
      <header>
        <ul class="header-row">
          <li><b>ANDRE M. CHANG</b>&nbsp;<button id='dark-mode-toggle'><style="font-size:16px">&#127768 &#127774</button></li>
		  <li><a href="https://andremchang.github.io/index.html">Home</a>&nbsp;|&nbsp;<a href="https://andremchang.super.site/showcase">Showcase</a>&nbsp;|&nbsp;<a href="https://andremchang.github.io/online-presence.html">Links</a></li>
		</ul>
      </header>
      <script src="script.js"></script>
    `;
  }
}
customElements.define('header-component', Header);