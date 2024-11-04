﻿class Footer extends HTMLElement {
	constructor() {
		super();}

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
			<nav>
			<a href="https://andremchang.github.io/index.html">Home</a> | <a href="https://andremchang.github.io/contact.html">Contact</a> | <a href="https://andremchang.github.io/blog.html">Blog</a> | <a href="https://andremchang.github.io/links.html">Links</a><br>
			<a href="https://andremchang.super.site/published-work">Publications</a> | <a href="https://andremchang.super.site/showcase">Showcase</a>
			</nav>
			<li><small>Website handcrafted by human not by AI. Made with love.</small></li>
			<li><small>Copyright © 2023-2024 ANDRE M. CHANG | AMC VISUAL. All rights reserved.
			<li><small>Fingerprint: B0C3 C562 C765 ECE8 C110 7897 FDE0 F655 E348 A81E</small> <a href="https://keys.openpgp.org/vks/v1/by-fingerprint/B0C3C562C765ECE8C1107897FDE0F655E348A81E"><small>[Public key]</small></a></li>
			<li><small>Updated on November 4, 2024</small></li>
		</ul>
	</footer>

	<script src="https://andremchang.github.io/components/script.js"></script>`;}
}

customElements.define('footer-component', Footer);