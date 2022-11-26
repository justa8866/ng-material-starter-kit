import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SingleCartModel} from "../models/single-cart.model";

@Injectable()
export class SingleCartService {
  private readonly apiUrl: string;

  constructor(private _httpClient: HttpClient) {
    this.apiUrl = 'https://fakestoreapi.com/carts/';
  }

  getOne(id: number): Observable<SingleCartModel> {
    return this._httpClient
      .get<SingleCartModel>(this.apiUrl + id);
  }
}
