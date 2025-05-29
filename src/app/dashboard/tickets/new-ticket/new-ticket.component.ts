import { Component, ElementRef, Output, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule , ButtonComponent, ControlComponent],  //ADD FormsModule x the form to work!
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); //viewChild is new, introduced x A17+, x accedere ad elemens del template DI QUESTO COMP

  add = output<{title: string, text: string}>();

  onSubmit(titleTemplateVar : string, requestTemplateVar : string, form : HTMLFormElement){
    //in this case the 2 variables in the form are wrapped in another comp, so AngulartemplateVar doesn't work here
    console.log("WITHIN ONSUBMIT!!");
    //console.dir(titleTemplateVar);
    console.log("entered title: "+titleTemplateVar);
    console.log("entered request: "+requestTemplateVar);


    this.add.emit({title: titleTemplateVar, text: requestTemplateVar});

    //this.form?.nativeElement.reset();  //cleans the inputs rendered
    this.form()?.nativeElement.reset();
  }

}
