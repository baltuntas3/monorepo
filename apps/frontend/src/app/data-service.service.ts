import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';
import { Observable } from 'rxjs';
import { DataFormat } from './dataFormat';
@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3333/api';

  getSimpleData() {
    return this.http.get(this.baseUrl);
  }

  getData(): Observable<DataFormat[]> {
    return this.http.get<DataFormat[]>(this.baseUrl + '/array');
  }
}
