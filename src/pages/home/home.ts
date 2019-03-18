import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController, ToastController, PopoverController, ModalController } from 'ionic-angular';

import {RestaurantService} from '../../providers/restaurant-service-mock';

import { Local } from '../../providers/localProvider';
import { Imagen } from '../../providers/imagenProvider';

@IonicPage({
	name: 'page-home',
	segment: 'home',
	priority: 'high'
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  restaurants: Array<any>;
  searchKey: string = "";
  yourLocation: string = "463 Beacon Street Guest House";

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public popoverCtrl: PopoverController, public locationCtrl: AlertController, public modalCtrl: ModalController, public toastCtrl: ToastController, public service: RestaurantService,public localService: Local, public imagenService: Imagen) {
		this.menuCtrl.swipeEnable(true, 'authenticated');
		this.menuCtrl.enable(true);
		this.findAll();
  
  }

  
  result:any=[];
  result2:any=[];
  

  
  
  ionViewDidLoad(){


    }
  


  openRestaurantListPage(proptype) {

  	this.navCtrl.push('page-restaurant-list', proptype);
  }

  openRestaurantFilterPage() {
    let modal = this.modalCtrl.create('page-restaurant-filter');
    modal.present();
  }

  openNearbyPage() {
    this.navCtrl.push('page-nearby');
  }

  openOrders() {
    this.navCtrl.push('page-orders');
  }


  /*
  openCart() {
    this.navCtrl.push('page-cart');
  }
*/


	local_seleccionado(resul: any) {

    //this.navCtrl.push('page-home-usu');
  	this.navCtrl.push('page-home-usu', { 'id_local': resul.id_local, id_usuario: this.navParams.get('id_usuario') });
	}

  openSettingsPage() {
  	this.navCtrl.push('page-settings');
  }

  openNotificationsPage() {
  	this.navCtrl.push('page-notifications');
  }

  openCategoryPage() {
    this.navCtrl.push('page-category');
  }

	onInput(event) {
	    this.service.findByName(this.searchKey)
	        .then(data => {
	            this.restaurants = data;
	        })
	        .catch(error => alert(JSON.stringify(error)));
	}

	onCancel(event) {
	    this.findAll();
  }
  
  devuelveImagen(){
    
  }

	findAll() {


    // probar donde esta el 1 con: { 'id': resul.id_local }
    
   this.localService.getRemoteDataLocalesporRubro(1).subscribe(data =>{
      this.result=data;
      console.log(this.result);
      });

      
    this.imagenService.getRemoteData_primera(1).subscribe(data =>{
      this.result2=data;
      console.log(this.result2);
      });

	    this.service.findAll()
	        .then(data => this.restaurants = data)
	        .catch(error => alert(error));
	}

  alertLocation() {
    let changeLocation = this.locationCtrl.create({
      title: 'Change Location',
      message: "Type your Address to change restaurant list in that area.",
      inputs: [
        {
          name: 'location',
          placeholder: 'Enter your new Location',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Change',
          handler: data => {
            console.log('Change clicked', data);
            this.yourLocation = data.location;
            let toast = this.toastCtrl.create({
              message: 'Location was change successfully',
              duration: 3000,
              position: 'top',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    changeLocation.present();
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create('page-notifications');
    popover.present({
      ev: myEvent
    });
  }

  ionViewWillEnter() {
      this.navCtrl.canSwipeBack();
  }

}
