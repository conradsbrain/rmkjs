/*web component for Page Title (H1)*/
const templatePageTitle = document.createElement('template');
templatePageTitle.innerHTML = `
<style>
    .page-title {
        font-size: 48px;
        color: var(--main-color);
        padding-left: 10px;
    }   
</style>
<h1 class="page-title">
    <slot></slot>
</h1>
`;

class PageTitle extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.append(templatePageTitle.content.cloneNode(true));
    }
}
customElements.define('page-title', PageTitle);