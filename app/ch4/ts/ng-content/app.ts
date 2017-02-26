import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

/*
Let's suppose we're building a component called fancy-button. This component
will use the standard HTML button element and add some extra behavior to it. Here
is the definition of the fancy-button component:

Inside of the @Component decorator, we set the inline template of the component
together with its selector. Now, we can use the component with the following
markup:


Now, we can pass custom content to the fancy button by executing this:
<fancy-button>Click <i>me</i> now!</fancy-button>
As a result, the content between the opening and the closing fancy-button tags will
be placed where the ng-content directive resides.
*/
@Component({
  selector: 'fancy-button',
  template: '<button><ng-content></ng-content></button>'
})
class FancyButton { /* Extra behavior */ }


/*
We have already described the selector and styles properties, so let's take a look at
the component's template. We have a div element with the panel class, which wraps
the two nested div elements, respectively: one for the title of panel and one for the
content of panel. In order to grab the content from the panel-title element and
project it where the title of the panel is supposed to be in the rendered panel, we need
to use the ng-content element with the selector attribute, which has the paneltitle
value. The value of the selector attribute is a CSS selector, which in this case
is going to match all the panel-title elements that reside inside the target panel
element. After this, ng-content will grab their content and set them as its own content.
*/
@Component({
  selector: 'panel',
  styles: [
    `.panel {
      width: auto;
      display: inline-block;
      border: 1px solid black;
    }
    .panel-title {
      border-bottom: 1px solid black;
      background-color: #eee;
    }
    .panel-content,
    .panel-title {
      padding: 5px;
    }`
  ],
  template: `
    <div class="panel">
      <div class="panel-title">
        <ng-content select="panel-title"></ng-content>
      </div>
      <div class="panel-content">
        <ng-content select="panel-content"></ng-content>
      </div>
    </div>`
})
class Panel { }
/*
Nesting components
The composition could be achieved by nesting directives and components within the
components' templates, taking advantage of the nested nature of the used markup.
For instance, let's say we have a component with the sample-component selector,
which has the following definition:
*/
@Component({
  selector: 'app',
  template: `
    <fancy-button>
      <span>I will <i>be</i> projected</span>
    </fancy-button>
    <br>
    <panel>
      <panel-title>Sample title</panel-title>
      <panel-content>Content</panel-content>
    </panel>
  `,
  directives: [FancyButton, Panel]
})
class App {
  constructor() {}
}

bootstrap(App);
