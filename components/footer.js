﻿class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <style>
        footer {
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
        .footer-row {
          font-size: auto;
		  margin: 0px;
          padding: 5px;
        }
      </style>
      <footer>
        <ul class="footer-row">
          <li><a href="index.html">Home</a></li>
          <li><small>Copyright © 2024 ANDRE M. CHANG | AMC VISUAL. All rights reserved.</small></li>
          <li><small>Updated on May 12, 2024</small></li>
        </ul>
        <ul class="footer-row">
          <li><a href="index.html"><img alt="ANDRE M. CHANG" width="50px" src="assets/ivj2_400.png"></a></li>
        </ul>
      </footer>
      <script src="script.js"></script>
    `;
  }
}
customElements.define('footer-component', Footer);