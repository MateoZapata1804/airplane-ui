import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketAddComponent } from './ticket-add/ticket-add.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    TicketsListComponent,
    TicketAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TicketAddComponent,
    TicketsListComponent
  ]
})
export class ComponentsModule { }
