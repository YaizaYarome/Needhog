import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mounts, Mount } from '../interfaces/mounts';

@Injectable({
  providedIn: 'root',
})
export class MountsService {
  filter(arg0: (mount: any) => boolean): string[] {
    throw new Error('Method not implemented.');
  }

  private apiUrl: string = 'https://ffxivcollect.com/api/';
  private mountUrl: string = 'mounts';

  constructor(private http: HttpClient) {}

  getMounts(): Observable<Mounts> {
    return this.http.get<Mounts>(this.apiUrl + this.mountUrl);
  }

  get10Mounts(): Observable<any> {
    return this.http.get<any>(this.apiUrl + this.mountUrl + '?limit=10');
  }
}
