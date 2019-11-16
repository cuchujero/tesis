import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {Reserva} from '../../providers/reservaProvider';
import {HomeAdmPage} from '../home-adm/home-adm';

import swal from 'sweetalert';


@IonicPage({
	name: 'page-reservas-adm',
	segment: 'reservas-adm'
})

@Component({
    selector: 'page-reservas-adm',
    templateUrl: 'reservas-adm.html'
})
export class ReservasAdmPage {

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

    confirmar_reserva(){
        swal("Reserva confirmada!", "", "success");
    }

    rechazar_reserva(){
        
    }


}
