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
    this.getFlights()
  }

  addFlight(form: NgForm) {
    if(form.value._id){
      this.flightService.putFlight(form.value)
        .subscribe(res=>{
          M.toast({html: 'Update Succesfuly'})
          this.resetForm(form)
        })
    }else{
      this.flightService.postFlight(form.value)
      .subscribe(res=>{
        this.resetForm(form)
        M.toast({html: 'Register Successfuly'})
        this.getFlights()
      })
    }
    
  }

  getFlights() {
    this.flightService.getFlights()
      .subscribe(res=>{
        this.flightService.flights = res as Flight[]
        console.log(res);
      })
  }

  editFlight(flight : Flight) {
    this.flightService.selectedFlight = flight
  }
  
  deleteFlight(id : string){
    if(confirm('Are you sure you want to delete it?')){
      this.flightService.deleteFlight(id)
        .subscribe(res=>{
        M.toast({html: 'Delete Successfuly'})
        this.getFlights()
      })
    }
  }

  resetForm(form?: NgForm) {
    if(form){
      form.reset;
      this.flightService.selectedFlight = new Flight;
    }
  }

}
