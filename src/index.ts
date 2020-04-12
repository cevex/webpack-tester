import {ComputerComponent} from "./components/computer.component";
import {ErrorButtonComponent} from "./components/error-button.component";
import {GreetingsComponent} from "./components/grettings.component";

// Add components in the DOM
document.body.appendChild(document.createElement('<div>Greetings</div>'));
document.body.appendChild(new GreetingsComponent().build());

document.body.appendChild(document.createElement('<div>Computation :</div>'));
document.body.appendChild(new ComputerComponent().build());

document.body.appendChild(document.createElement('<div>Error Handling</div>'));
document.body.appendChild(new ErrorButtonComponent().build());
