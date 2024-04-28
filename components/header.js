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
          background-color:  #auto;

        }    
        ul li {
          /* font-family: Inconsolata; */
          /* line-height: 24px; */
          list-style: none;
          display: flex;
          justify-content: center;
        }
                    
        .social-row {
          font-size: auto;
        }
        
        .social-row li a {
          margin: 0 1px;
        }   
      </style>
      
      <header>
        <ul>  
          <li>Hello Hola Olá ハロー Maitei <ruby>你好<rt>ㄋㄧˇㄏㄠˇ</rt></ruby></li>
          <li><b>ANDRE M. CHANG</b></li>
        </ul>
        <ul class="social-row">
          <li><img alt="ANDRE M. CHANG" width="60px" src="assets/ivj2_400.png"></li>
          <li><a href="index.html">Home</a></li>
        </ul>
      </header>
    `;
  }
}

customElements.define('header-component', Header);