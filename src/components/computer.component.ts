import { MathService } from '../common/math.service';

export class ComputerComponent {

    private number = 5;
    private mathService = new MathService();

    public build(): HTMLElement {
        const element = document.createElement('div');
        element.innerHTML = this.getText();
        return element;
    }

    private getText() {
        const result = this.mathService.square(this.number);
        return `MATH : ${this.number} square is equal to ${result}`;
    }
}
