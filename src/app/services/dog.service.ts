import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DogModel} from "../models/dog.model";

@Injectable()
export class DogService {
  private readonly apiUrl: string;

  constructor(private _httpClient: HttpClient) {
    this.apiUrl = 'https://dog.ceo/api/breeds/image/random';
  }

  getOne(): Observable<DogModel> {
    return this._httpClient
      .get<DogModel>(this.apiUrl);
  }
}
