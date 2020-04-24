import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'auna-text',
  styleUrl: 'auna-text.css',
  shadow: true,
})
export class AunaText {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
