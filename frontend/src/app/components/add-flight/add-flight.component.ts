import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  
  flight = {
    _id: '',
    flightNumber: '',
    airline: '',
    date: '',
    originPlace: '',
    destinationPlace: '',
    tickets: '',
    price: '',
    items: ''
  };
  submitted = false;

  constructor(private flightService: FlightService) { }

  ngOnInit() {
  }

  saveFlight() {
    const data = {
      _id: this.flight._id,
      flightNumber: this.flight.flightNumber,
      airline: this.flight.airline,
      date: this.flight.date,
      originPlace: this.flight.originPlace,
      destinationPlace: this.flight.destinationPlace,
      tickets: this.flight.tickets,
      price: this.flight.price,
      items: this.flight.items
    };

    this.flightService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
      });
  }

  newFlight() {
    this.submitted = false;
    this.flight = {
      _id: '',
      flightNumber: '',
      airline: '',
      date: '',
      originPlace: '',
      destinationPlace: '',
      tickets: '',
      price: '',
      items: ''
    };
  }


}
