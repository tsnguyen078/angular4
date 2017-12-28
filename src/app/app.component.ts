import {Component, OnInit} from '@angular/core';
import {AccountTransaction} from '../model/account-transaction';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {LazyLoadEvent} from 'primeng/components/common/api';
import {SelectItem} from 'primeng/primeng';
import 'rxjs/Rx';
import {AccountTransactionRequest} from "../model/account-transaction-request";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  transactions: AccountTransaction[];
  totalRecords: number;
  categories: SelectItem[];

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.categories = [];
    this.categories.push({label: 'Clothes', value: 'Clothes'});
    this.categories.push({label: 'Food', value: 'Food'});
    this.categories.push({label: 'Regular expenses', value: 'Regular expenses'});
    this.categories.push({label: 'Income', value: 'Income'});
    this.categories.push({label: 'Other', value: 'Other'});
  }

  loadTransactionsLazy(event: LazyLoadEvent) {
    const categoryNameFilter: any = event.filters['transactionCategory.categoryName'];
    const categoriesToFilter: string[] = categoryNameFilter ? categoryNameFilter.value : null;
    const amount: number = event.filters['amount'] ? event.filters['amount'].value : null;
    const request = new AccountTransactionRequest((event.first / event.rows), event.rows, categoriesToFilter, amount);
    this.http.post('http://localhost:8080/transactions/list', request)
      .map(response => response.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error'))
      .subscribe(remoteTransactionsResponse => {
        this.transactions = remoteTransactionsResponse.accountTransactions;
        this.totalRecords = remoteTransactionsResponse.totalElements;
      });
  }

}
