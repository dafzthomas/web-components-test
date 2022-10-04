class HomeHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <header>
        <h1>Web Components Test</h1>
      </header>
    `;
  }
}

if ('customElements' in window) {
  customElements.define('home-header', HomeHeader);
}
