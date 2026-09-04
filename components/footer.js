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

			.footer-row {
				font-size: auto;
				margin: 7px;
				padding: 0px;}
		</style>

		<footer>
			<ul class="footer-row">
			
				<li>
				<small>
				<a href="#top">&uarr;</a>
				</small>
				</li> 

				<li>
				<small>
					<small>This site is made with &#129505;, from scratch. Crafted</small> <a href="https://andremchang.github.io/by_homo_sapiens_not_by_ai"><small><small>BY <i>Homo sapiens</i>, NOT BY AI.</small></small></a>
				</small>
				</li>

				<li>
				<a href="https://andremchang.github.io/by_homo_sapiens_not_by_ai">
				<img src="https://andremchang.github.io/assets/byhomosapiens.png" width="60%" height="auto" alt="“By Homo sapiens, not by AI badge”"/></a>
				</li> 

				<li>
				<small>
					<small>Copyright &#169; 2026 ANDRÉ M. CHANG. All rights reserved.
					<br>Prohibited for Generative AI/ML training.</small>
				</small>
				</li>
				
				<li>
				<small>
					<small>Fingerprint: B0C3 C562 C765 ECE8 C110 7897 FDE0 F655 E348 A81E</small>
				</small>
				</li>

				<li>
				<small>
					<a href="https://keys.openpgp.org/search?q=B0C3+C562+C765+ECE8+C110+7897+FDE0+F655+E348+A81E" target="_blank"><small><small>[Public key]</small></small></a>
				</small>
				</li>

				<li>
				<small>
					<small>Updated on Sep 4, 2026.</small>
				</small>
				</li>

			</ul>

		</footer>
`;
}
}

customElements.define('footer-component', Footer);