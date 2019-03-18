import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {Reserva} from '../../providers/reservaProvider';
import {HomeAdmPage} from '../home-adm/home-adm';


@IonicPage({
	name: 'page-historial-adm',
	segment: 'historial-adm'
})

@Component({
    selector: 'page-historial-adm',
    templateUrl: 'historial-adm.html'
})
export class HistorialAdmPage {

    id_local=0;


    constructor(public navCtrl: NavController, public reservaService: Reserva, public homeadmfun: HomeAdmPage) {
       
    }

    result:any=[];


    ionViewDidLoad() {

        
    this.id_local=this.homeadmfun.id_return()
    

    this.reservaService.GetData_local(this.id_local).subscribe(data =>{
             
        this.result=data;
      
       });
   
    }




}
