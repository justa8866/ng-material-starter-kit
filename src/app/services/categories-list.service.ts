import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoriesListModel} from "../models/categories-list.model";

@Injectable()
export class CategoriesListService {
  private apiKey: string;

  constructor(private _httpClient: HttpClient) {
    this.apiKey = 'https://fakestoreapi.com/products/categories';
  }

  getAll(): Observable<CategoriesListModel[]> {
    return this._httpClient.get<CategoriesListModel[]>(this.apiKey);
  }
}
