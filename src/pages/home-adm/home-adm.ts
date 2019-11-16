import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, PopoverController } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';
import { ViewChild } from '@angular/core';


@IonicPage({
	name: 'page-home-adm',
	segment: 'home-adm'
})
@Component({
  selector: 'home-adm',
  templateUrl: 'home-adm.html',
})

export class HomeAdmPage {
  // time
  pages = [
    { pageName: 'page-your-restaurant', title: 'Información', icon:'settings', id: 'newsTab'},
    { pageName: 'page-reservas-adm', title: 'Reservas', icon:'clock', id: 'newsTab2'},
    { pageName: 'page-historial-adm', title: 'Registros', icon:'clipboard', id: 'newsTab3'},
    { pageName: 'page-comentario-adm', title: 'Comentarios', icon:'contacts', id: 'newsTab4'}
];


selectedTab = 0;

@ViewChild(SuperTabs) superTabs: SuperTabs;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public navParams: NavParams, private alertCtrl: AlertController) {
  }


  id_return(){

    // Recupero informacion de ventana anterior (id)

    return this.navParams.get('id_local_fk');
  }


  ionViewDidLoad(){
    
   // this.events.publish('re',data);   // manda datos

   // this.events.subscribe('re', data =>)  // recibe datos


  }


  presentNotifications(myEvent) {
    let popover = this.popoverCtrl.create('page-notifications');
    popover.present({
      ev: myEvent
    });
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
      this.superTabs.clearBadge(this.pages[ev.index].id);
    }
  }

}
