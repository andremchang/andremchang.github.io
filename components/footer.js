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
				<li><small>This site is made with &#129505; Crafted by human not by AI.</small></li>
				<li><small>Copyright &#169; 2025 ANDRE M. CHANG | AMC VISUAL. All rights reserved.
				<li><small>Fingerprint: B0C3 C562 C765 ECE8 C110 7897 FDE0 F655 E348 A81E</small> <a href="https://keys.openpgp.org/vks/v1/by-fingerprint/B0C3C562C765ECE8C1107897FDE0F655E348A81E"><small>[Public key]</small></a></li>
				<li><small>Updated on January 12, 2025</small></li>
			</ul>
		</footer>
`;
}
}

customElements.define('footer-component', Footer);