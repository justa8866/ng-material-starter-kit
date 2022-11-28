import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExtendProductModel } from '../models/extend-product.model';
import { FormControl } from '@angular/forms';

@Injectable()
export class ExtendProductService {
  private apiUrl: string;

  constructor(private _httpClient: HttpClient) {
    this.apiUrl = 'https://fakestoreapi.com';
  }

  create(product: {
    image: any;
    price: any;
    description: any;
    title: any;
    category: any;
  }): Observable<ExtendProductModel> {
    return this._httpClient.post<ExtendProductModel>(
      this.apiUrl + '/products',
      product
    );
  }
}
