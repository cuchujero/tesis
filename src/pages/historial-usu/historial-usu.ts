import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {Reserva} from '../../providers/reservaProvider';
import {HomeUsuPage} from '../home-usu/home-usu';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@IonicPage({
	name: 'page-historial-usu',
	segment: 'historial-usu'
})

@Component({
    selector: 'page-historial-usu',
    templateUrl: 'historial-usu.html'
})
export class HistorialUsuPage {

    id_local=0;
    id_usuario=0;


    constructor(public navCtrl: NavController, public reservaService: Reserva, public homeusufun: HomeUsuPage) {
       
    }

    result:any=[];


    ionViewDidEnter() {

    this.id_local=this.homeusufun.id_return_local();
    
    this.id_usuario=this.homeusufun.id_return_usuario();

    this.reservaService.GetData_usu(this.id_local,this.id_usuario).subscribe(data =>{
             
        this.result=data;
      
       });
   
    }

/*
    ngAfterViewInit(){
      
    this.id_local=this.homeusufun.id_return_local();
    
    this.id_usuario=this.homeusufun.id_return_usuario();

    this.reservaService.GetData_usu(this.id_local,this.id_usuario).subscribe(data =>{
             
        this.result=data;

      
       });
    }
*/


actualizar_historial()
{
    this.navCtrl.setRoot(this.navCtrl.getActive().component); 
}

}

