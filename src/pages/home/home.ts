import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

//Import details page
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //Properties
  games: FirebaseListObservable<any>;
  //Constructor
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, af:AngularFire) {
    this.games = af.database.list('/games');

  }

  //Methods
  addGame(){
    this.navCtrl.push(DetailsPage);
  }

  editGame() {
    this.navCtrl.push(DetailsPage);
  }

  deleteGame(game) {
    this.games.remove(game);
  }

}
