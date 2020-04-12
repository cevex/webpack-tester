import { ComputerComponent } from './components/computer.component';
import { ErrorButtonComponent } from './components/error-button.component';
import { GreetingsComponent } from './components/grettings.component';
import { TitleComponent } from './components/title.component';

const titleComponent = new TitleComponent();

// Add components in the DOM

document.body.appendChild(titleComponent.build('Greetings : '));
document.body.appendChild(new GreetingsComponent().build());

document.body.appendChild(titleComponent.build('Compute : '));
document.body.appendChild(new ComputerComponent().build());

document.body.appendChild(titleComponent.build('Error Handling'));
document.body.appendChild(new ErrorButtonComponent().build());
