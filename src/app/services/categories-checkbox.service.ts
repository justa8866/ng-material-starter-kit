import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoriesCheckboxModel} from "../models/categories-checkbox.model";

@Injectable()
export class CategoriesCheckboxService {
  private readonly apiKey: string;

  constructor(private _httpClient: HttpClient) {
    this.apiKey = 'https://fakestoreapi.com/products/categories';
  }

  getAll(): Observable<CategoriesCheckboxModel[]> {
    return this._httpClient.get<CategoriesCheckboxModel[]>(this.apiKey);
  }
}

