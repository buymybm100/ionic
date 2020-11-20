import { Component, ViewChild } from '@angular/core';
import * as faker from 'faker';

import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage  {
  dataList = [];

  @ViewChild(IonInfiniteScroll,{static:true}) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll,{static:true}) virtualScroll: IonVirtualScroll;

  constructor() {
    this.getEmployees()
  }

  getEmployees() {

    for (let i = 0; i < 20; i++) {
      var code = Math.floor(Math.random() * Math.floor(5));
      if(code<1) {
        code=3;
      }
      this.dataList.push({
        image: `/assets/img/flaticons/man-${code}.png`,
        name: faker.name.firstName(),
        address: faker.address.streetAddress(),
        intro: faker.lorem.words()
      })
    }
  }



  loadData(event) {

    // Using settimeout to simulate api call
    setTimeout(() => {

      // load more data
      this.getEmployees()

      //Hide Infinite List Loader on Complete
      event.target.complete();

      //Rerender Virtual Scroll List After Adding New Data
      this.virtualScroll.checkEnd();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.dataList.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
