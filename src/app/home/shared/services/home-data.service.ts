import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CryptoCurrency } from '../models/cryptocurrency-model';

@Injectable()
export class HomeDataService {
  private url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,REP&tsyms=USD,EUR';
  constructor(private http: HttpClient) { }

  public getData(): Observable<CryptoCurrency> {
    return this.http.get(this.url, {
      params: {
        authorization: 'Apikey 0aeb52cb191dde52e40befee3954c98502d72b6051f340bd27eb03d18b6c3042'
      }
    })
      .pipe(
        map((response: any) => {
          return new CryptoCurrency(response);
        })
      );
  }

  runObservable(): Observable<CryptoCurrency> {
    return timer(1, 5000)
      .pipe(
        switchMap(() => this.getData())
      );
  }
}
