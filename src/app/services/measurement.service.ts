import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Measurement } from '../model/measurement';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  private apiCall = "https://denislabs.ddns.net/weer/measurements";

  constructor(private http: HttpClient) { }

  getLastMeasurement() : Observable<Measurement>
  { 
    return this.http.get<Measurement>(this.apiCall)
  }
}
