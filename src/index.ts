import {ErrorButtonComponent} from "./components/error-button.component";
import {GreetingsComponent} from "./components/grettings.component";

// Add 2 components in the DOM
document.body.appendChild(new GreetingsComponent().build());
document.body.appendChild(new ErrorButtonComponent().build());