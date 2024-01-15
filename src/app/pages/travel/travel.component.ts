import { Component, OnInit } from '@angular/core';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  constructor(private service:TravelService) { }
  travelData:any;

  ngOnInit(): void {
    this.travelData = this.service.travelDetails;
  }

}
