import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {Comentario} from '../../providers/comentariosProvider';
import { HomeAdmPage } from '../home-adm/home-adm';

@IonicPage({
	name: 'page-comentario-adm',
	segment: 'comentario-adm'
})

@Component({
    selector: 'page-comentario-adm',
    templateUrl: 'comentario-adm.html'
})
export class ComentarioAdmPage {

    id_local=0;

    comentarios: Array<any>;

    constructor(public navCtrl: NavController, public comentariosService: Comentario, public homeadmfun: HomeAdmPage) {
       
    }


    
    result:any=[];


    ionViewDidLoad() {

        
    this.id_local=this.homeadmfun.id_return();

    this.comentariosService.getRemoteData(this.id_local).subscribe(data =>{
             
        this.result=data;

      
       });
   
    }




}
