import { Component, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'p5-select',
  styleUrl: 'p5-select.css',
  shadow: true,
})
export class P5Select {
  @State() title: string;
  @State() menuClosed: boolean = true;
  @Prop() placeholder: string;
  @Prop({ mutable: true }) value?: any | null;
  componentDidLoad() {
    this.title = this.placeholder;
  }

  menuToggle() {
    this.menuClosed = !this.menuClosed;
  }
  selectOption(el: any) {
    this.title = el.textContent;
    this.value = el.value;
    this.menuToggle();
  }

  render() {
    return (
      <div class="wrapper">
        <div class="select-outer">
          {this.title}
          <div class="select-inner" onClick={() => this.menuToggle()}>
            inner
          </div>
        </div>
        <div
          class={`select-menu ${this.menuClosed ? 'inactive' : 'active'}`}
          onClick={e => {
            this.selectOption(e.target);
          }}
        >
          <slot name="p5-select-option" />
        </div>
      </div>
    );
  }
}
