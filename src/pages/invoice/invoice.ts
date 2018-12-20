import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InvoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {

  invoiceList = [];
  totalPrice = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.invoiceList = this.navParams.get('invoiceList');
    for (let i = 0; i < this.invoiceList.length; i++) {
      this.totalPrice = this.totalPrice + this.invoiceList[i].price;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicePage');
  }

}
