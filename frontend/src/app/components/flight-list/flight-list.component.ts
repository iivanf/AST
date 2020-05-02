import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights: any;
  currentFlight = null;
  currentIndex = -1;
  flightNumber = '';

  constructor( private flightService: FlightService) { }

  ngOnInit() {
    this.retrieveFlights();
  }

  retrieveFlights() {
    this.flightService.getAll()
      .subscribe(
        data => {
          this.flights = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveFlights();
    this.currentFlight = null;
    this.currentIndex = -1;
  }


  setActiveFlight(flight, index) {
    this.currentFlight = flight;
    this.currentIndex = index;
  }

  removeAllFlights() {
    this.flightService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveFlights();
        },
        error => {
          console.log(error);
        });
  }

  searchFlight() {
    this.flightService.findByNumber(this.flightNumber)
      .subscribe(
        data => {
          this.flights = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
