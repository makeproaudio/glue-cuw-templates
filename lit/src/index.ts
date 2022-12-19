import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('guw-my-lit-widget')
export class MyElement extends LitElement {
    @property({ type: Number })
    public value: number;

    @property({ type: Object })
    public metadata: Record<string, any> = {};

    public render() {
        return html`
    <small><p>This is my <b>custom</b> Glue Widget built using <b>Lit!</b><br>
    Cool, huh? Btw, the value is <code>${this.value.toFixed(2)}</code></p>
    <button @click=${this.updateValue(-1)}>-</button>
    <button @click=${this.updateValue(1)}>+</button>
    </small>
    `;
    }

    private updateValue(delta: number) {
        return () => {
            this.value += delta * (this.metadata?.step || 1);
            this.dispatchEvent(new CustomEvent('valueChange', { detail: this.value }));
        };
    }
}
