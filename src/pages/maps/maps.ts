import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Maps page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})
export class MapsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MapsPage Page');
  }

}
