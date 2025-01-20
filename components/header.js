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
							<a href="https://andremchang.github.io"><b>ANDRÉ M. CHANG</a><span class="blinking"><strong>_</strong></span></b> <span class="bblue"><a href="https://andremchang.github.io/about-me">en</a></span> <span class="byellow"><a href="https://andremchang.github.io/sobre-mi">es</a></span> <span class="bgreen"><a href="https://andremchang.github.io/sobre-min">pt</a></span> <span class="bred"><a href="https://andremchang.github.io/about-zh">zh</a></span><br><br>
				<nav>
					<a href="https://andremchang.github.io/publications">Publications</a> | 
					<div class="dropdown"><button class="dropbtn">Projects</button>
						<div class="dropdown-content">
						<a href="https://andremchang.github.io/japanese_aesthetics">Japanese Aesthetics</a>
						<a href="https://andremchang.github.io/everyday_life">Snapshot of Everyday Life</a>
						</div>
					</div> | 
					<a href="https://andremchang.github.io/blog">Blog</a> | <a href="https://andremchang.github.io/links">Links</a> | <a href="https://andremchang.github.io/contact">Contact</a>
				</nav>
			</ul>
		</header>
`;
}
}

customElements.define('header-component', Header);