import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-travelpage',
  templateUrl: './travelpage.component.html',
  styleUrls: ['./travelpage.component.css']
})
export class TravelpageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:TravelService) { }
  getTravelId:any;
  travelData:any;

  ngOnInit(): void {
    this.getTravelId = this.param.snapshot.paramMap.get('id');
    if(this.getTravelId) {
      this.travelData = this.service.travelDetails.filter((value) =>{
        return value.id == this.getTravelId;
      })
    }
  }

}
