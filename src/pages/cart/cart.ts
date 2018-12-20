import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InvoicePage } from '../invoice/invoice';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  quantity = 1;
  cartList = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.cartList = this.navParams.get('cartList');
    for (let i = 0; i < this.cartList.length; i++) {
      console.log(this.cartList);
    }

  }


  ionViewDidLoad() {

  }

  checkout() {
    this.navCtrl.push(InvoicePage, { invoiceList: this.cartList });
  }


}
