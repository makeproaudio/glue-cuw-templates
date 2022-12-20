import { Event, Component, Prop, h, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'guw-my-stencil-widget',
  styleUrl: 'guw-my-stencil-widget.css',
  shadow: true,
})
export class MyStencilWidget {
  @Prop({ mutable: true }) value: number;

  private _metadata: Record<string, any> = {};

  @Prop() metadata: string;
  @Watch('metadata')
  dataDidChangeHandler(newMetadata: string) {
    this._metadata = JSON.parse(newMetadata);
  }

  @Event() valueChange: EventEmitter<any>;

  render() {
    return (
      <small><p>This is my <b>custom</b> Glue Widget built using <b>Stencil!</b><br />
      Cool, huh? Btw, the value is <code>{this.value.toFixed(2)}</code></p>
      <button onClick={this.updateValue(-1)}>-</button>
      <button onClick={this.updateValue(1)}>+</button>
      </small>
    );
  }

  private updateValue = (delta: number) => () => {
    console.log(this._metadata);
    this.value += delta * (this._metadata?.step || 1);
    this.valueChange.emit(this.value);
    console.log("set value to", this.value, "and emitted");
  }
}
