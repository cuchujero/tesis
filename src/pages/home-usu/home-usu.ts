import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, PopoverController } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';
import { ViewChild } from '@angular/core';

@IonicPage({
	name: 'page-home-usu',
	segment: 'home-usu'
})
@Component({
  selector: 'page-home-usu',
  templateUrl: 'home-usu.html',
})

export class HomeUsuPage {

  //restaurant

  pages2 = [
    { pageName: 'page-local-info', title: 'General', icon:'wine', id: 'n'},
    { pageName: 'page-reserva-usu', title: 'Reservar', icon:'book', id: 'n2'},
    { pageName: 'page-historial-usu', title: 'Historial', icon:'clipboard', id: 'n3'},
    { pageName: 'page-comentario-usu', title: 'Comentarios', icon:'contacts', id: 'n4'},
    { pageName: 'page-mapa', title: 'Ubicación', icon:'map', id: 'n4'},
];

selectedTab = 0;

@ViewChild(SuperTabs) superTabs: SuperTabs;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  
  id_return_usuario(){
    
    // Recupero informacion de ventana anterior (id)

    return this.navParams.get('id_usuario');
  }

  id_return_local(){

    // Recupero informacion de ventana anterior (id)
    
    return this.navParams.get('id_local');

  }


  ionViewDidLoad(){

  }



  onTabSelected(ev: any){
    if (ev.index == 2){
      let alert = this.alertCtrl.create({
        title: 'Secret',  
        message: 'eh?',
        buttons: [
          {
          text: 'No',
          handler: () => {
            this.superTabs.slideTo(this.selectedTab);
          }
      }, {
        text: 'Yes',
        handler: () => {
          this.superTabs.slideTo(this.selectedTab);
          }
        }
      ]
    })
   }
    else{
      this.selectedTab = ev.index;
      this.superTabs.clearBadge(this.pages2[ev.index].id);
    }
  }



  
  presentNotifications(myEvent) {
    let popover = this.popoverCtrl.create('page-notifications');
    popover.present({
      ev: myEvent
    });
  }


}
