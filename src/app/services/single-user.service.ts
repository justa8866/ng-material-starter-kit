import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SingleUserModel} from "../models/single-user.model";


@Injectable()
export class SingleUserService {
  private readonly apiUrl: string;

  constructor(private _httpClient: HttpClient) {
    this.apiUrl = 'https://fakestoreapi.com/users/';
  }

  getOne(id: number): Observable<SingleUserModel> {
    return this._httpClient
      .get<SingleUserModel>(this.apiUrl + id);
  }
}

