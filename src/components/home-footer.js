class HomeFooter extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({mode: 'closed'});

    this.root.innerHTML = `
      <style>
        footer {
          margin-top: 5rem;
        }
      </style>
      <footer>
        <p>Dafydd Thomas</p>
      </footer>
    `;
  }
}

if ('customElements' in window) {
  customElements.define('home-footer', HomeFooter);
}
