
import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule}  from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiResponse, Country } from '../interfaces';

const API_URL_COUNTRIES = environment.API_URL_COUNTRIES;

@Injectable({
  providedIn: 'root'
})

export class Countries {

  constructor(private http: HttpClient) {};
  
  getCountries(): Observable<Country[]> {
    return this.http.get<ApiResponse>(API_URL_COUNTRIES).pipe(
      map(response => response.data)
    );
  }
  
 
}
