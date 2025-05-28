import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); //viewChild is new, introduced x A17+, x accedere ad elemens del template DI QUESTO COMP

  onSubmit(titleTemplateVar : string, requestTemplateVar : string, form : HTMLFormElement){
    //in this case the 2 variables in the form are wrapped in another comp, so AngulartemplateVar doesn't work here
    console.log("xxxx");
    //console.dir(titleTemplateVar);
    console.log("entered title: "+titleTemplateVar);
    console.log("entered request: "+requestTemplateVar);

    //this.form?.nativeElement.reset();  //cleans the inputs rendered
    this.form()?.nativeElement.reset();
  }

}
