import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SingleProductModel} from "../models/single-product.model";

@Injectable()
export class SingleProductService {
  private readonly apiUrl: string;

  constructor(private _httpClient: HttpClient) {
    this.apiUrl = 'https://fakestoreapi.com/products/';
  }

  getOne(id: number): Observable<SingleProductModel> {
    return this._httpClient
      .get<SingleProductModel>(this.apiUrl + id);
  }
}
