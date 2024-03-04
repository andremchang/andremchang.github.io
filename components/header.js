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
          background-color:  #f8f8f8;
        }
        
        ul li {
          list-style: none;
          display: flex;
          justify-content: center;
        }
                    
        .social-row {
          font-size: auto;
        }
        
        .social-row li a {
          margin: 0 14px;
        }   
      </style>
      
      <header>
        <ul>
          <li>Hello / Hola / Olá / <ruby>你好<rt>ㄋㄧˇㄏㄠˇ</rt></ruby> / ハロー / Maitei</li>
          <li><b>ANDRE M. CHANG</b></li>
        </ul>
        <ul>
          <li><img alt="ANDRE M. CHANG" width="80px" src="ivj2_400.png" style="height: 84px"></li>        
        </ul>
        <ul class="social-row">
          <li><a href="index.html">Home</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </header>
    `;
  }
}

customElements.define('header-component', Header);