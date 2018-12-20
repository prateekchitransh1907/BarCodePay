import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { CartPage } from '../cart/cart';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: BarcodeScannerOptions;
  results: {};
  cartList = [];
  productDetails = [
    { text: 'da1bec1e45rt5', name: 'Cadbury Silk', price: 4, img: '../../assets/imgs/silk.png', description: 'Available in Bubbly, Caramel, Nuts. A trusted brand for centuries of happiness. Buy one get one free !' },
    { text: 'ca23fgr45hi7', name: 'Snickers', price: 3, img: '../../assets/imgs/snickers.png', description: 'Feeling Hungry ? Buy Snickers and kill the hunger instantly and feel energized. Buy one get one free !' },
    { text: 'bh54i5tt6jj', name: 'Toblerone', price: 12, img: '../../assets/imgs/toblerone.png', description: 'Everyones favorite is now Xtra Large so that happiness lasts longer. A trusted brand for centuries of happiness. Buy one get one free !' },
    { text: 'az45h56jy53t77', name: 'KitKat', price: 3, img: '../../assets/imgs/kitkat-png-5.png', description: 'there is always time to have a Kitkat break. Soft and Crunchy. Buy one get one free !' }
  ];
  selectedProduct: any;
  scannedProduct: any;
  productExists: boolean;
  constructor(public navCtrl: NavController, private barcode: BarcodeScanner, private alertCtrl: AlertController) {

  }

  async scanBarcode() {
    this.results = await this.barcode.scan();
    if (this.results) {
      this.scannedProduct = JSON.parse(JSON.stringify(this.results));
      for (let i = 0; i < this.productDetails.length; i++) {
        if (this.scannedProduct.text === this.productDetails[i].text) {
          this.selectedProduct = this.productDetails[i];
        }
      }
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Product not available',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      alert.present();
    }
  }


  addToCart() {
    this.cartList.indexOf(this.selectedProduct) === -1 ? this.cartList.push(this.selectedProduct) : console.log("This item already exists");
    this.navCtrl.push(CartPage, { cartList: this.cartList });
  }
}




