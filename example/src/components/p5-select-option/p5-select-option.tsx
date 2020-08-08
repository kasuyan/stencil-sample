import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'p5-select-option',
  styleUrl: 'p5-select-option',
  shadow: true,
})
export class P5SelectOption {
  @Prop() value: string;

  hostData() {
    return {
      role: 'option',
      slot: 'p5-select-option',
    };
  }

  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }
}
