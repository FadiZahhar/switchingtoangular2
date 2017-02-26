//Initially, we import the @Component decorator from the angular2/core module
//and the bootstrap function from angular2/platform/browser. Later, we use @
//Component to decorate the App class. To the @Component decorator, we pass almost
//the same object literal that we used in the ECMAScript 5 version of the application,
// and this way, we define the CSS selector for the component.

import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

// In the preceding snippet, we define a component called App with an app selector.
// This selector will match all the app elements inside our templates that are in the
// scope of the application. The component has the following template:
@Component({
  selector: 'app',
  templateUrl: './app.html'
})
class App {
  target:string;
  constructor() {
    this.target = 'world';
  }
}

bootstrap(App);

