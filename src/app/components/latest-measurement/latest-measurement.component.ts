import { Component, OnInit, Input } from '@angular/core';
import { Measurement } from 'src/app/model/measurement';


@Component({
  selector: 'app-latest-measurement',
  templateUrl: './latest-measurement.component.html',
  styleUrls: ['./latest-measurement.component.css']
})
export class LatestMeasurementComponent implements OnInit {

  @Input() measurement: Measurement

  constructor() { }



  ngOnInit() {
  }

}
