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
			<a href="https://andremchang.github.io/index.html">Home</a> | <a href="https://andremchang.super.site/published-work">Publications</a> | <a href="https://andremchang.super.site/showcase">Showcase</a> | <a href="https://andremchang.github.io/online-presence.html">Links</a>
			</nav>
			<div class="h-card">
				<li><img class="u-featured" src="https://andremchang.github.io/assets/240121_0012_1000.jpg" width="50%" alt="black and white cropped image of a collection of press credentials"></li>
				<li><span id="Identity">Identity</span></li>
				<li><img class="u-photo" src="https://andremchang.github.io/assets/ivj2_400.png" width="50px" height="50px" alt="a self portrait of the visual journalist"></li>
				<li><span role="img" aria-label="name">🙋‍♂️</span>&nbsp;<span class="p-name p-given-name">Andre M. Chang</span></li>
				<li><span lang="en">Commissions, projects, etc.:&nbsp;<span role="img" aria-label="e-mail">📧</span>&nbsp;<span><a class="u-url" href="mailto:andre.m.chang@proton.me">email</a></span></li>
				<li><span>Currently:</span>&nbsp;<span role="img" aria-label="location">📍</span>&nbsp;<span class="locality">Asuncion</span><span>,</span>&nbsp;<span class="p-country-name">Paraguay</span></li>
			</div>
			<li><span class="nblue" lang="en">&nbsp;<a href="https://buymeacoffee.com/andremchang/posts/9570">Posts</a></span>&nbsp;<span class="nyellow" lang="es">&nbsp;<a href="https://buymeacoffee.com/andremchang/posts/112677">Entradas</a></span>&nbsp;<span class="ngreen" lang="pt">&nbsp;<a href="https://buymeacoffee.com/andremchang/posts/156111">Postagens</a></span>&nbsp;<span class="nred" lang="zh-Hant">&nbsp;<a href="https://buymeacoffee.com/andremchang/posts/156113">貼文</a></span></li>
			<li><small>Website handcrafted by human not by AI. Made with love.</small></li>
			<li><small>Copyright © 2023-2024 ANDRE M. CHANG | AMC VISUAL. All rights reserved.</small></li>
			<li><small>Updated on September 10, 2024</small></li>
		</ul>
	</footer>

	<script src="script.js"></script>`;}
}

customElements.define('footer-component', Footer);