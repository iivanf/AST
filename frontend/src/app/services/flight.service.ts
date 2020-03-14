import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Flight } from '../models/flight';
import {  FlightsComponent } from '../components/flights/flights.component';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  selectedFlight: Flight;
  flights: Flight[]; 
  readonly URL_API= 'http://localhost:3000/api/flights'

  constructor(private http: HttpClient) { 
    this.selectedFlight = new Flight();
   }

  getFlights() {
    return this.http.get(this.URL_API)
  }

  postFlight(flight: Flight) {
    return this.http.post(this.URL_API, flight)
  }

  putFlight(flight: Flight) {
    return this.http.put(this.URL_API + `/${flight._id}`, flight)
  }

  deleteFlight(_id: string) {
    return this.http.delete(this.URL_API+`/${_id}`)
  }

  getFlight(_id: string) {
    return this.http.get(this.URL_API+`/${_id}`)
  }


}
