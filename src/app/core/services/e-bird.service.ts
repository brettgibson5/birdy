import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EBirdService {
  constructor(private http: HttpClient) {}

  public nearBirds(region: string) {
    return this.http.get(`https://api.ebird.org/v2/data/obs/${region}/recent`);
  }
}
