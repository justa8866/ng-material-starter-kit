import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CryptoModel} from "../models/crypto.model";

@Injectable()
export class CryptoService {
  private readonly apiKey: string;

  constructor(private _httpClient: HttpClient) {
    this.apiKey = 'https://api2.binance.com/api/v3/ticker/24hr';
  }

  getAll(): Observable<CryptoModel[]> {
    return this._httpClient.get<CryptoModel[]>(this.apiKey);
  }
}

