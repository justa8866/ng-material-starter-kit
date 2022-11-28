import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductTableModel} from "../models/product-table.model";

@Injectable()
export class ProductTableService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductTableModel[]> {
    return this._httpClient.get<ProductTableModel[]>('https://fakestoreapi.com/products');
  }
}
