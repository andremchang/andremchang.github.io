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
          background-color:  auto;
        }
        ul li {
          /* font-family: Inconsolata; */
          /* line-height: 20px; */
          list-style: none;
          display: flex;
          justify-content: center;
        }
        .social-row {
          font-size: auto;
        }
        .social-row li a {
          margin: 0 5px;
        }
      </style>
      <footer>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><small>Copyright © 2024 ANDRE M. CHANG | AMC VISUAL. All rights reserved.</small></li>
          <li><small>Updated on May 12, 2024</small></li>
        </ul>
        <ul class="social-row">
          <li><a href="index.html"><img alt="ANDRE M. CHANG" width="50px" src="assets/ivj2_400.png"></a></li>
        </ul>
        <br>
      </footer>
      <script src="script.js"></script>
    `;
  }
}
customElements.define('footer-component', Footer);