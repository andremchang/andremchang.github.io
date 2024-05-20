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
		  margin: 7px;
          padding: 0px;
        }
      </style>
      <footer>
		<ul class="footer-row">
		<span lang="en">Commissions, projects, etc.:&nbsp;<a href="mailto:andre.m.chang@proton.me">email</a></span>&nbsp;<span class="nblue">&nbsp;</span>Currently in Asuncion, Paraguay</span><br>
		
		<span class="nblue" lang="en">&nbsp;<a href="https://andremchang.github.io/posts.html">Posts</a>&nbsp;<small>(Updated May-20-2024)</small></span>
		<span class="nyellow" lang="es">&nbsp;<a href="https://andremchang.github.io/entradas.html">Entradas</a>&nbsp;<small>(Act. 20-mayo-2024)</small></span>
		<br>
		<span class="ngreen" lang="pt">&nbsp;<a href="https://andremchang.github.io/postagens.html">Postagens</a>&nbsp;<small>(Atual. 20-maio-2024</small></span>
		<span class="nred" lang="zh-Hant">&nbsp;<a href="https://andremchang.github.io/posts-zh.html">貼文</a>&nbsp;<small>(更新 2024年5月20日)</small></span>
		<br>
		  <li><a href="https://andremchang.github.io/index.html"><img alt="ANDRE M. CHANG" width="50px" src="https://andremchang.github.io/assets/ivj2_400.png"></a></li>
		<nav>
		   <a href="https://andremchang.github.io/index.html">Home</a> |
		   <a href="https://andremchang.super.site/showcase">Showcase</a> |
		   <a href="https://andremchang.github.io/online-presence.html">Links</a>
		</nav>
		  <li><small>Website handcrafted by human not by AI. Ongoing project. Made with love.</small></li>
		  <li><small>Copyright © 2024 ANDRE M. CHANG | AMC VISUAL. All rights reserved.</small></li>
		  <li><small>Updated on May 20, 2024</small></li>
        </ul>
      </footer>
      <script src="script.js"></script>
    `;
  }
}
customElements.define('footer-component', Footer);