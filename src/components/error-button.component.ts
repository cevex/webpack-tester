export class ErrorButtonComponent {

    public build(): HTMLElement {
        const element = document.createElement('button');
        element.innerHTML = 'Raise Error !';
        element.addEventListener('click', this.performAction, false);
        return element;
    }

    private performAction = () => {
        throw Error('Big error !!!');
    };
}
