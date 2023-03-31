import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Data } from '../Data';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  ),
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private gitApi = 'https://playerdog.github.io/data/db.json';

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.gitApi);
  }
}
