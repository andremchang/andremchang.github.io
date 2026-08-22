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
			
				<li><small><a href="#top">&uarr;</a></small>
				</li> 
				<li><small>This site is made with &#129505;, crafted by human, not by AI. Text and images by <i>Homo sapiens</i>.</small>
				</li>
				<li><small>Copyright &#169; 2026 ANDRÉ M. CHANG. All rights reserved.<br>Prohibited for Generative AI/ML training.</small>
				</li>
				<li><small>Fingerprint: B0C3 C562 C765 ECE8 C110 7897 FDE0 F655 E348 A81E</small>
				</li>
				<li><small><a href="https://keys.openpgp.org/search?q=B0C3+C562+C765+ECE8+C110+7897+FDE0+F655+E348+A81E" target="_blank"><small>[Public key]</small></a>
				</li>
				<li><small>Updated on Aug 22, 2026.</small>
				</li>
				<br>
				<li>
				<a href="https://andremchang.github.io/by_homo_sapiens_not_by_ai"><img src="https://andremchang.github.io/assets/photographedby.png" width="50%" height="auto" alt="“By Homo sapiens, not by AI badge”"/></a>

				<a href="https://andremchang.github.io/by_homo_sapiens_not_by_ai"><img src="https://andremchang.github.io/assets/illustratedby.png" width="50%" height="auto" alt="“By Homo sapiens, not by AI badge”"/></a>

				<a href="https://andremchang.github.io/by_homo_sapiens_not_by_ai"><img src="https://andremchang.github.io/assets/designedby.png" width="50%" height="auto" alt="“By Homo sapiens, not by AI badge”"/></a>

				<a href="https://andremchang.github.io/by_homo_sapiens_not_by_ai"><img src="https://andremchang.github.io/assets/writtenby.png" width="50%" height="auto" alt="“By Homo sapiens, not by AI badge”"/></a>
				</li>
			</ul>

		</footer>
`;
}
}

customElements.define('footer-component', Footer);