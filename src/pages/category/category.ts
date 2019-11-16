import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';

import {CategoryService} from '../../providers/category-service-mock';

@IonicPage({
	name: 'page-category',
	segment: 'category'
})

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

	categories: Array<any>;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public navParams: NavParams, public service: CategoryService) {
  	this.findAll();
	}
	
  id_return_usuario(){

    // Recupero informacion de ventana anterior (id)

    return this.navParams.get('id_usuario');
  }


  ionViewDidLoad() {
  
  }

	findAll() {
	    this.service.findAll()
	        .then(data => this.categories = data)
	        .catch(error => alert(error));
	}

  
  presentNotifications(myEvent) {
    let popover = this.popoverCtrl.create('page-notifications');
    popover.present({
      ev: myEvent
    });
  }

  openRestaurantListPage(id_rubro) {

		this.navCtrl.push('page-home', {'id_rubro': id_rubro, id_usuario: this.navParams.get('id_usuario') });   // envio el id del rubro
		//this.navCtrl.push('page-home', {'proptype': proptype}, this.navParams.get('id_usuario'));
  }

  
}
