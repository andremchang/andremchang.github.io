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
				background-color: auto;}

			ul li {
				<!-- font-family: Inconsolata; -->
				font-size: auto;
				line-height: auto;
				list-style: none;
				display: flex;
				justify-content: center;
				margin: 0px;
				padding: 0px;}

			.header-row {
				font-size: auto;
				margin: 7px;
				padding: 0px;}
		</style>

		<header>
			<ul class="header-row">
					<span><a href="https://andremchang.github.io/index.html"><img class="u-photo" src="https://andremchang.github.io/assets/headshot_ae.png" width="70px" height="70px" alt="headshot"/></a></span><br>
					<span class="bblue"><small><a href="https://andremchang.github.io/about-me.html">en</a></small></span> <span class="byellow"><small><a href="https://andremchang.github.io/sobre-mi.html">es</a></small></span> <span class="bgreen"><small><a href="https://andremchang.github.io/sobre-min.html">pt</a></small></span> <span class="bred"><small><a href="https://andremchang.github.io/about-zh.html">zh</a></small></span><br><br>
				<nav>
					<a href="https://andremchang.github.io/index.html">Home</a> | <div class="dropdown"><button class="dropbtn">Projects</button><div class="dropdown-content">
					<a href="https://andremchang.github.io/project/japanese_aesthetics.html">Japanese Aesthetics</a></div></div> | <a href="https://andremchang.github.io/blog.html">Blog</a> | <a href="https://andremchang.github.io/links.html">Links</a> | <a href="https://andremchang.github.io/contact.html">Contact</a> | <a href="https://andremchang.super.site/published-work">Publications</a> | <a href="https://andremchang.super.site/showcase">Showcase</a> 
				</nav>
			</ul>
		</header>
`;
}
}

customElements.define('header-component', Header);