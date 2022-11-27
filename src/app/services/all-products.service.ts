import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AllProductsModel} from "../models/all-products.model";

@Injectable()
export class AllProductsService {

  constructor(private _httpClient: HttpClient) {

  }

  getAll(): Observable<AllProductsModel[]> {
    return this._httpClient.get<AllProductsModel[]>('https://fakestoreapi.com/products');
  }
}
