import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mounts, Mount } from '../interfaces/mounts';

@Injectable({
  providedIn: 'root',
})
export class SortingService {
  searchByString(): Observable<Mounts> {
    return this.http.get<any>(
      this.apiUrl + this.stringSearchUrl + this.searchBarString
    );
  }

  private apiUrl: string = 'https://ffxivcollect.com/api/';
  private mountUrl: string = 'mounts';
  private minionUrl: string = 'minions';
  private stringSearchUrl: string = '?name_en_cont=';
  private searchBarString: string;
  public itemsArray = [];
  public patchNumber: string;

  constructor(private http: HttpClient) {}

  getMounts(): Observable<Mounts> {
    return this.http.get<Mounts>(this.apiUrl + this.mountUrl);
  }

  get10Mounts(): Observable<any> {
    return this.http.get<any>(this.apiUrl + this.mountUrl + '?limit=10');
  }

  getMinions(): Observable<any> {
    return this.http.get<any>(this.apiUrl + this.minionUrl);
  }

  get10Minions(): Observable<any> {
    return this.http.get<any>(this.apiUrl + this.minionUrl + '?limit=10');
  }

  getMinionsByExpac(): Observable<any> {
    return this.http.get<any>(
      this.apiUrl + this.minionUrl + '&patch_gt=' + this.patchNumber
    );
  }
  /***** Sortings *****/

  orderByNumber() {
    this.itemsArray.sort(function (mount1, mount2) {
      return mount1.id - mount2.id;
    });
  }

  orderByName() {
    this.itemsArray.sort(function (a, b) {
      const mount1 = a.name;

      const mount2 = b.name;

      return mount1.localeCompare(mount2);
    });
  }

  orderByRelease() {
    this.itemsArray.sort(function (a, b) {
      const patch1 = a.patch;

      const patch2 = b.patch;

      return patch1.localeCompare(patch2);
    });
    console.log(this.itemsArray);
  }
}
