import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from '../../services/rest.service';
import { RequestResponse } from '../../models/RequestResponse';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrl: './tickets-list.component.scss',
})
export class TicketsListComponent implements OnInit {
  ticketsDataSource!: MatTableDataSource<any>;
  displayedColumns = ['id', 'flightId', 'destiny'];

  constructor(private restSvc: RestService) {}

  ngOnInit(): void {
    this.ticketsDataSource = new MatTableDataSource<any>([]);

    this.restSvc.get('/tickets/getTickets')
      .then((resp: RequestResponse) => {
        console.log('RESPONSEE:::: ', resp);
        if (resp.status) {
          this.ticketsDataSource.data = resp.data;
        }
      })
      .catch((err) => console.log('Error en HTTP', err));
  }
}
