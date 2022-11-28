import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductFormModel } from '../models/product-form.model';

@Injectable()
export class ProductFormService {
  constructor(private _httpClient: HttpClient) {
  }

  create(product: { image: any; price: any; description: any; title: any; category: any }): Observable<ProductFormModel> {
    return this._httpClient.post<ProductFormModel>('https://fakestoreapi.com/products', product);
  }
}
