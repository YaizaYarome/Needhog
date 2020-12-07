import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Minions } from '../interfaces/minions';

@Injectable({
  providedIn: 'root',
})
export class MinionsService {
  private apiUrl: string = 'https://ffxivcollect.com/api/';
  private minionUrl: string = 'minions';

  constructor(private http: HttpClient) {}

  getMinions(): Observable<any> {
    return this.http.get<any>(this.apiUrl + this.minionUrl);
  }

  get10Minions(): Observable<any> {
    return this.http.get<any>(this.apiUrl + this.minionUrl + '?limit=10');
  }
}
