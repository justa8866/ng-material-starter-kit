import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatModel } from '../models/cat.model';

@Injectable()
export class CatService {
  private apiUrl: string;

  constructor(private _httpClient: HttpClient) {
    this.apiUrl = 'https://catfact.ninja/fact';
  }

  getOne(): Observable<CatModel> {
    return this._httpClient
      .get<CatModel>(this.apiUrl);
  }
}
