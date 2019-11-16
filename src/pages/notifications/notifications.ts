import {Component} from "@angular/core";
import {IonicPage, NavController, ViewController} from "ionic-angular";

@IonicPage({
	name: 'page-notifications'
})

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})

export class NotificationsPage {
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }


  cerrar_sesion(){  
    this.viewCtrl.dismiss();
    this.navCtrl.setRoot('page-walkthrough');
  }

}
