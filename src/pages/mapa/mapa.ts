import {Component} from '@angular/core';
import {IonicPage, NavController, ModalController} from 'ionic-angular';
import {RestaurantService} from '../../providers/restaurant-service-mock';

@IonicPage({
	name: 'page-mapa',
	segment: 'mapa'
})

@Component({
    selector: 'page-mapa',
    templateUrl: 'mapa.html'
})
export class MapaPage {

    restaurants: Array<any>;
	lat: number = -31.63963;
	lng: number = -60.70096;

    constructor(public navCtrl: NavController, public service: RestaurantService, public modalCtrl: ModalController) {
        this.findAll();
    }


    findAll() {
        this.service.findAll()
            .then(data => this.restaurants = data)
            .catch(error => alert(error));
    }

    ionViewDidLoad() {
    }

}
