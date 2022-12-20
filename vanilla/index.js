const template = document.createElement('template');
template.innerHTML = `
<small><p>This is my <b>custom</b> Glue Widget built using <b>Vanilla JS!</b><br>
Cool, huh? Btw, the value is <code id="value"></code></p>
<button id="btnDecrement">-</button>
<button id="btnIncrement">+</button>
</small>`;

class MyWidget extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('#btnDecrement').addEventListener('click', () => this.updateValue(-1));
        this.shadowRoot.querySelector('#btnIncrement').addEventListener('click', () => this.updateValue(1));
    }
    
    connectedCallback() {
        this.render();
    }

    updateValue(delta) {
        const metadata = this.getMetadata();
        const value = parseFloat(this.getAttribute('value') || '0', 10);
        const newValue = value + (delta * (metadata?.step || 1));
        this.dispatchEvent(new CustomEvent('valueChange', { detail: newValue }));
    }

    static get observedAttributes() {
        return ['value'];
    }

    attributeChangedCallback(name) {
        if (name === 'value') {
            this.render();
        }
    }
    
    render() {
        this.shadowRoot.querySelector('#value').innerText = this.getAttribute('value');
    }

    getMetadata() {
        return JSON.parse(this.getAttribute('metadata') || '{}') || {};
    }
}
window.customElements.define('guw-my-vanilla-widget', MyWidget);