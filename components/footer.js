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
				<li><a href="#top">&uarr;</a></li> 
				<li><small>This site is made with &#129505;. Crafted by human not by AI. Text and images by <i>Homo sapiens</i>.</small></li>
				<li><small>Copyright &#169; 2026 ANDRE M. CHANG | AMC VISUAL. All rights reserved.<br>Prohibited for Generative AI/ML training.
				<li><small>Fingerprint: B0C3 C562 C765 ECE8 C110 7897 FDE0 F655 E348 A81E</small> <a href="https://keys.openpgp.org/search?q=B0C3+C562+C765+ECE8+C110+7897+FDE0+F655+E348+A81E" target="_blank"><small>[Public key]</small></a></li>
				<li><small>Updated on February 8, 2026.</small></li>
			</ul>
		</footer>
`;
}
}

customElements.define('footer-component', Footer);