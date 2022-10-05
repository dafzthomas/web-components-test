class HomeHeader extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({mode: 'closed'});

    this.root.innerHTML = `
      <style>
        h1 {
          margin-top: 0;
        }
      </style>
      <header>
        <h1>Web Components Test</h1>
      </header>
    `;
  }
}

if ('customElements' in window) {
  customElements.define('home-header', HomeHeader);
}
