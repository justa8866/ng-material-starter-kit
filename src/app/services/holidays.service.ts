import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HolidaysModel} from "../models/holidays.model";

@Injectable()
export class HolidaysService {
  private readonly apiKey: string;

  constructor(private _httpClient: HttpClient) {
    this.apiKey = 'https://date.nager.at/api/v2/publicholidays/2020/US';
  }

  getAll(): Observable<HolidaysModel[]> {
    return this._httpClient.get<HolidaysModel[]>(this.apiKey);
  }
}

