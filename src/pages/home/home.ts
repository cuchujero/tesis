import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController, Modal, ToastController, PopoverController, ModalController } from 'ionic-angular';

import {RestaurantService} from '../../providers/restaurant-service-mock';

import { Local } from '../../providers/localProvider';
import { Imagen } from '../../providers/imagenProvider';
import { Filtro } from '../../providers/filtrosProvider';

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
  id_usuario=0;
  id_rubro=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public popoverCtrl: PopoverController, public locationCtrl: AlertController, public modalCtrl: ModalController, public toastCtrl: ToastController, public service: RestaurantService,public localService: Local, public imagenService: Imagen, public filtroService: Filtro) {
		this.menuCtrl.swipeEnable(true, 'authenticated');
		this.menuCtrl.enable(true);
		this.findAll();
  
  }

  
  result:any=[];
  result2:any=[];
  result3:any=[];
  

  
  
  ionViewDidLoad(){


    }
  


  openRestaurantListPage(proptype) {

  	this.navCtrl.push('page-restaurant-list', proptype);
  }



  openRestaurantFilterPage() {

    this.filtroService.getRemoteData().subscribe(data =>{
      
			this.result3=data;

    });
  
    const myModal: Modal = this.modalCtrl.create('page-restaurant-filter');
  //  const myModal: Modal = this.modalCtrl.create('page-restaurant-filter', { datos: this.result3 });
    myModal.present();



    
    //-----------------------------------------------------------------------------
/*

    // Recupero

    
    
    myModal.onDidDismiss((data) => {

      this.id_local=this.homeusufun.id_return_local();
    
      this.id_usuario=this.homeusufun.id_return_usuario();

      this.comentariosService.insertData(data["comentario_usuario"],data["rate"],this.id_usuario,this.id_local).subscribe(data2 =>{
             
        this.result2=data2;

        if (this.result2[0]=='F'){
          alert("Usted ya realizo su comentario en este local");
        }
        else{
          alert("Comentario Ingresado");
        }
      
       });

       this.ionViewDidLoad();
     
        
    });


*/

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
  
  devuelveImagen(id_local){

  }

	findAll() {

    this.id_usuario = this.navParams.get('id_usuario');
    this.id_rubro = this.navParams.get('id_rubro');
   
    this.localService.getRemoteDataLocalesporRubro(this.id_rubro).subscribe(data =>{
      this.result=data;
      // console.log("ver: " + JSON.stringify(this.result));
      });

  /*
    this.imagenService.getRemoteData_primera(1).subscribe(data =>{
        this.result2=data;
        console.log("eee " + this.result2);
        });
   */

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
    let popover = this.popoverCtrl.create('page-notifications');
    popover.present({
      ev: myEvent
    });
  }

  ionViewWillEnter() {
      this.navCtrl.canSwipeBack();
  }

}
