import { Component, contentChild, ContentChild, ElementRef, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {

  labelFieldForm = input.required<string>();

  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input'); //new version, introduced x A17+,x accedere ad elemens proiettati(possono essere elementi di origine esterna) nel template di questo comp
  valueOfInput = this.control().nativeElement.value;

}
