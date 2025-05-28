import { Component, ElementRef, inject, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from "../shared/button/button.component";

@Component({
  selector: 'app-header',  //host element, in css if you use ':host{}' apply rule to this rendered element
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None,  //css global, .Emulated or or .ShadowDom x isolate 100% il css in this component
  host: {
    class: 'header',
    '(click)' : 'onClick()'
  }

})
export class HeaderComponent {
  private el = inject(ElementRef);  //da accesso diretto alla DOM! attention!

  onClick() {
    console.log("cliccked this component!");
    console.log("this element of the DOM:" + this.el);
  }


}
