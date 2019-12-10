import { Component, OnInit } from '@angular/core';
import { MeasurementService } from 'src/app/services/measurement.service';
import { Measurement } from 'src/app/model/measurement';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(public service: MeasurementService) { }

  measurement: Measurement;

  ngOnInit() 
  {
    this.service.getLastMeasurement().subscribe(

      (result)=> {this.measurement = result; console.log(result);
      })
  }

}
