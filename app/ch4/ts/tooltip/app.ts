// ElementRef: This allows us to inject the element reference (we're not limited to
// the DOM only) to the host element. In the sample usage of the preceding tooltip,
// we get an Angular wrapper of the div element, which holds the tooltip attribute.
// • Directive: This decorator allows us to add the metadata required for the
// new directives we define.
// • HostListener(eventname): This is a method decorator that accepts an event
// name as an argument. During initialization of the directive, Angular 2 will
// add the decorated method as an event handler for the eventname event of the
// host element.
import {HostListener, Input, Injectable, ElementRef, Inject, Directive, Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

// the class overlay have the constructor, close and open with attach methods
// the construction on initialization declar a varibale element, and add a classname
// and set the private el element 
// the close method will hide the element
// the open have 2 parameters, element, and the text
class Overlay {
  private el: HTMLElement;
  constructor() {
    var el = document.createElement('div');
    el.className = 'tooltip';
    this.el = el;
  }
  close() {
    this.el.hidden = true;
  }
  open(el, text) {
    this.el.innerHTML = text;
    this.el.hidden = false;
    var rect = el.nativeElement.getBoundingClientRect();
    this.el.style.left = rect.left + 'px';
    this.el.style.top = rect.top + 'px';
  }
  attach(target) {
    target.appendChild(this.el);
  }
  detach() {
    this.el.parentNode.removeChild(this.el);
  }
}


// the overlaymock is the interface of the class we create.
class OverlayMock {
  constructor() {}
  close() {}
  open(el, text) {}
  attach(target) {}
  detach() {}
}

@Directive({
  selector: '[saTooltip]'
})
export class Tooltip {
  @Input()
  saTooltip:string;

  constructor(private el: ElementRef, private overlay: Overlay) {
    this.overlay.attach(el.nativeElement);
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.overlay.open(this.el, this.saTooltip);
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.overlay.close();
  }
}

// The constructor declares two private properties: el of the ElementRef type and
// overlay of the Overlay type. The Overlay class implements logic to manage the
// tooltips' overlays and is going to be injected using the DI mechanism of Angular.
// In order to declare it as available for injection, we need to declare the top-level
// component in the following way:

@Component({
  selector: 'app',
  templateUrl: './app.html',
  providers: [Overlay],
  directives: [Tooltip]
})
class App {}

bootstrap(App);
