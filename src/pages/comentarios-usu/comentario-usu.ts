import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {Comentario} from '../../providers/comentariosProvider';
import { HomeUsuPage } from '../home-usu/home-usu';

@IonicPage({
	name: 'page-comentario-usu',
	segment: 'comentario-usu'
})

@Component({
    selector: 'page-comentario-usu',
    templateUrl: 'comentario-usu.html'
})
export class ComentarioUsuPage {

    id_local=0;
    id_usuario=0;


    constructor(public navCtrl: NavController, public comentariosService: Comentario, public homeusufun: HomeUsuPage) {
       
    }


    
    result:any=[];


    ionViewDidLoad() {

        
    this.id_local=this.homeusufun.id_return_local();
    
    this.id_usuario=this.homeusufun.id_return_usuario();

    this.comentariosService.getRemoteData(this.id_local).subscribe(data =>{
             
        this.result=data;
      
       });
   
    }




}
