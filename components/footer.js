class Footer extends HTMLElement {
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
          /* line-height: 24px; */
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
          <li><small>Copyright © 2024 ANDRE M. CHANG | AMC VISUAL. All rights reserved.</small></li>
          <li><small>Updated on April 14, 2024</small></li>
        </ul>
        <ul class="social-row">
          <li><a href="index.html">Home</a></li>
          <li><a rel="me" href="https://mastodon.social/@andremchang">Mastodon</a></li>
        </ul>
        <br>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);