
export class TitleComponent {

    public build(title: string): HTMLElement {
        const element = document.createElement('h1');
        element.innerHTML = title;
        return element;
    }
}
