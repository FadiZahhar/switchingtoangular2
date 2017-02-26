// using angular directives
import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
	selector: 'app',
	templateUrl: './app.html',
})
// you can see that in the class we declared a todos array of strings
// and a name a string type
// in the constructor we put values for name and todos as normal javascript
// a string and array of strings
class App {
	todos: string[];
	name: string;
	constructor() {
	this.name ='John';
	this.todos = ['Buy milk','Save the world'];
	}
}
bootstrap(App);