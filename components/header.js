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
					<span><a href="https://andremchang.github.io"><img class="u-photo" src="https://andremchang.github.io/assets/headshot_ae.png" width="70px" height="70px" alt="headshot"/></a></span>
					<span class="bblue"><small><a href="https://andremchang.github.io/about-me">en</a></small></span> <span class="byellow"><small><a href="https://andremchang.github.io/sobre-mi">es</a></small></span> <span class="bgreen"><small><a href="https://andremchang.github.io/sobre-min">pt</a></small></span> <span class="bred"><small><a href="https://andremchang.github.io/about-zh">zh</a></small></span><br><br>
				<nav>
					<a href="https://andremchang.github.io">Home</a> | 
					<div class="dropdown"><button class="dropbtn">Projects</button>
						<div class="dropdown-content">
						<a href="https://andremchang.github.io/japanese_aesthetics">Japanese Aesthetics</a>
						<a href="https://andremchang.github.io/everyday_life">Snapshot of Everyday Life</a>
						</div>
					</div> | 
					<a href="https://andremchang.github.io/blog">Blog</a> | <a href="https://andremchang.github.io/links">Links</a> | <a href="https://andremchang.github.io/contact">Contact</a> | <a href="https://andremchang.super.site/published-work">Publications</a> | <a href="https://andremchang.super.site/showcase">Showcase</a> 
				</nav>
			</ul>
		</header>
`;
}
}

customElements.define('header-component', Header);