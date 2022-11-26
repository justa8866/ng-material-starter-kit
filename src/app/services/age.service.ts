import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AgeModel } from "../models/age.model";

@Injectable()
export class AgeService {
  private readonly apiUrl: string;

  constructor(private _httpClient: HttpClient) {
    this.apiUrl = 'https://api.agify.io/?name=';
  }

  getOne(name: string): Observable<AgeModel> {
    return this._httpClient
      .get<AgeModel>(this.apiUrl + name);
  }
}
