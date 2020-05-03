import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';

declare var M: any;

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
  id = '';
  message = '';
  

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
    if(confirm('Are you sure you want delete all?')){
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

  buyTicket() {
    if(this.currentFlight.tickets<=0){
      M.toast({html: 'This flight is sold out!'})
    }else{
      this.currentFlight.tickets = this.currentFlight.tickets - 1;
      this.flightService.update(this.currentFlight._id, this.currentFlight)
      .subscribe(
        response => {
          console.log(response);
          M.toast({html: 'The flight was purchased successfully!'})
        },
        error => {
          console.log(error);
        });
    }
  }
}
