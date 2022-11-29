import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterModel } from '../models/register.model';

@Injectable()
export class RegisterService {
  private readonly apiUrl: string;

  constructor(private _httpClient: HttpClient) {
    this.apiUrl = 'https://fakestoreapi.com';
  }

  create(register: RegisterModel): Observable<RegisterModel> {
    return this._httpClient.post<RegisterModel>(
      this.apiUrl + '/users',
      register
    );
  }
}
