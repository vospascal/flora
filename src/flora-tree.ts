import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('flora-tree')
export class FloraTree extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <button @click=${this._onClick} part="button">
        count is ${this.count}
      </button>
    `
  }

  private _onClick() {
    this.count++
  }

  static styles = css`
    button {
      border-radius: 8px;
      border: 1px solid lavender ;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #f1f1f1;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto #646cff;;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'flora-tree': FloraTree
  }
}
