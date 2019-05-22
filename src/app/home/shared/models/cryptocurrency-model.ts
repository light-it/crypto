import { hasOwnProperty } from 'tslint/lib/utils';

export class CryptoCurrency  {
  public listCrypto: ICryptoCurrency[];

  constructor(data) {
    this.listCrypto = this.handlerData(data);
  }

  private handlerData(data): ICryptoCurrency[] {
    const res = [];
    for (const key in data) {
      if (hasOwnProperty(data, key)) {
        res.push({
          name: key,
          value: data[key]
        }) ;
      }
    }
    return res;
  }
}

export interface ICryptoCurrency {
  name: string;
  value: {USD: number, EUR: number};
}
