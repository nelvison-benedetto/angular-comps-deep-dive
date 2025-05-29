import { Component, input, output, signal } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {

  data = input.required<Ticket>();  //in '()' you can also use 'transform' to transform the data received immediately if you need
  close = output();
  detailsVisible = signal(false);

  onToggleDetails(){
    //this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted(){
    this.close.emit();
  }

}
