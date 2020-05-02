import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  currentFlight = null;
  message = '';
  
  constructor(
    private flightService: FlightService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.message = '';
    this.getFlight(this.route.snapshot.paramMap.get('id'));
  }

  getFlight(id) {
    this.flightService.get(id)
      .subscribe(
        data => {
          this.currentFlight = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateFlight() {
    this.flightService.update(this.currentFlight._id, this.currentFlight)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The flight was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteFlight() {
    this.flightService.delete(this.currentFlight.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/flights']);
        },
        error => {
          console.log(error);
        });
  }

}
