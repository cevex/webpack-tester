// import join from "lodash";                   // All lodash in bundle (86k)
// import {capitalize, join} from "lodash";     // All lodash in bundle (86k)

import capitalize from 'lodash/capitalize'; // Only function in bundle
import join from 'lodash/join'; // Only function in bundle

export class GreetingsComponent {

    private name = 'boby';

    public build(): HTMLElement {
        const element = document.createElement('div');
        element.innerHTML = this.getText();
        return element;
    }

    private getText() {
        const escapeName = capitalize(this.name);
        return join(['Hello', escapeName], ' ');
    }
}
