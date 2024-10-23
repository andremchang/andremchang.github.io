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
			<a href="https://andremchang.github.io/index.html">Home</a> | <a href="https://andremchang.github.io/blog.html">Blog</a> | <a href="https://andremchang.github.io/links.html">Links</a><br>
			<a href="https://andremchang.super.site/published-work">Publications</a> | <a href="https://andremchang.super.site/showcase">Showcase</a>
			</nav>
			<li><small>Website handcrafted by human not by AI. Made with love.</small></li>
			<li><small>Copyright © 2023-2024 ANDRE M. CHANG | AMC VISUAL. All rights reserved.</small></li>
			<li><small>Updated on October 23, 2024</small></li>
		</ul>
	</footer>

	<script src="https://andremchang.github.io/components/script.js"></script>`;}
}

customElements.define('footer-component', Footer);