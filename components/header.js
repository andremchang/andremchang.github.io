class Header extends HTMLElement {
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
								
				<li>
					<a href="https://andremchang.github.io"><img class="u-logo" src="https://andremchang.github.io/assets/ae_logo_black.png" width="50px" height="50px" alt="ANDRÉ's logo"/></a>
				&nbsp;
					ANDRÉ M. CHANG<span class="blinking"><strong>_</strong></span>
				</li>
				<br>
				<li>
					<span class="bblue"><a href="https://andremchang.github.io/about-me">&nbsp;about me&nbsp;</a>
					</span>
				&nbsp;
					<span class="byellow"><a href="https://andremchang.github.io/sobre-mi">&nbsp;sobre mí&nbsp;</a>
					</span>
				&nbsp;
					<span class="bgreen"><a href="https://andremchang.github.io/sobre-min">&nbsp;sobre min&nbsp;</a>
					</span>
				&nbsp;
					<span class="bred"><a href="https://andremchang.github.io/about-zh">&nbsp;關於我&nbsp;</a>
					</span>
				</li>
				<br>			


				<nav>
					<div class="dropdown">
						<button class="dropbtn">Visual Works</button>
						<div class="dropdown-content">
							<a href="https://andremchang.github.io/publications">Publications</a>
						</div>
					</div>
					 | 
					<a href="https://andremchang.github.io/contact">Contact</a>
					 | 
					<div class="dropdown"><button class="dropbtn">Projects</button>
						<div class="dropdown-content">
							<a href="https://andremchang.github.io/japanese_aesthetics">Japanese Aesthetics</a>
							<a href="https://andremchang.github.io/everyday_life">Snapshot of Everyday Life</a>
						</div>
					</div>
					 | 
					<a href="https://andremchang.github.io/links">Links</a>
					 | 
					<a href="https://andremchang.github.io/blog">Blog</a>					

				</nav>
				
			</ul>
		</header>
`;
}
}

customElements.define('header-component', Header);