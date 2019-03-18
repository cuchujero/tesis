import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: CategoryService) {
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

  openRestaurantListPage(proptype) {
  // this.navCtrl.push('page-home',this.navParams.get('id_usuario')); 
 
		this.navCtrl.push('page-home', {'proptype': proptype, id_usuario: this.navParams.get('id_usuario') });   // envio el id del rubro
		//this.navCtrl.push('page-home', {'proptype': proptype}, this.navParams.get('id_usuario'));
  }

}
