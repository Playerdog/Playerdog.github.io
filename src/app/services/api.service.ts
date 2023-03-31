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

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  // private gitApi = 'https://playerdog.github.io/data/db.json';
  private gitApi = 'http://localhost:5000/data';

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.gitApi);
  }
}
