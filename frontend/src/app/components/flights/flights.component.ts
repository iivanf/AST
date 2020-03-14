import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service'
import { NgForm } from '@angular/forms';
import { Flight } from 'src/app/models/flight';

declare var M: any

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
  providers: [FlightService]
})
export class FlightsComponent implements OnInit {

  constructor(public flightService: FlightService) { }

  ngOnInit(): void {
  }

  addFlight(form: NgForm) {
    this.flightService.postFlight(form.value)
      .subscribe(res=>{
        this.resetForm(form)
        M.toast({html: 'Register Successfuly'})
      })
  }

  resetForm(form?: NgForm) {
    if(form){
      form.reset;
      this.flightService.selectedFlight = new Flight;
    }
  }

}
