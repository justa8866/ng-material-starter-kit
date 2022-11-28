import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoriesMenuModel} from "../models/categories-menu.model";

@Injectable()
export class CategoriesMenuService {
  private readonly apiKey: string;

  constructor(private _httpClient: HttpClient) {
    this.apiKey = 'https://fakestoreapi.com/products/categories';
  }

  getAll(): Observable<CategoriesMenuModel[]> {
    return this._httpClient.get<CategoriesMenuModel[]>(this.apiKey);
  }
}


