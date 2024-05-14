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
          <li><b>ANDRE M. CHANG</b></li>
		  <li><button id='dark-mode-toggle'><style="font-size:16px">&#127768 &#127774</button></li>
		  <li><a href="index.html">Home</a>&nbsp;|&nbsp;<a href="https://andremchang.super.site/showcase">Showcase</a>&nbsp;|&nbsp;<a href="online-presence.html">Links </a>&nbsp;|&nbsp;<a href="blog-post.html">Blog</a></li>
		</ul>
      </header>
      <script src="script.js"></script>
    `;
  }
}
customElements.define('header-component', Header);