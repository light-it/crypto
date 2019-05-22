import { Component, OnInit } from '@angular/core';
import { HomeDataService } from '../shared/services/home-data.service';
import { CryptoCurrency } from '../shared/models/cryptocurrency-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public listCrypto$: Observable<CryptoCurrency>;
  constructor(private homeDataService: HomeDataService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.listCrypto$ = this.homeDataService.runObservable();
  }

}
