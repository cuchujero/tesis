import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
	name: 'page-restaurant-filter',
	segment: 'restaurant-filter'
})

@Component({
  selector: 'page-restaurant-filter',
  templateUrl: 'restaurant-filter.html',
})

export class RestaurantFilterPage {


  constructor(public navCtrl: NavController) {


  }

	result:any=[];


	
  
  ionViewDidLoad(){
	 ;

	}

  closeModal() {
    this.navCtrl.pop();
	}


	mostrar_filtros(){


	}


}
