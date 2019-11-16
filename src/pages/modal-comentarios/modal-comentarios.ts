import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController, ViewController, MenuController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


//import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';

import { Usuario } from '../../providers/usuarioProvider';


@IonicPage({
	name: 'page-modal-comentarios',
	segment: 'modal-comentarios',
	priority: 'high'
})


@Component({
  selector: 'page-modal-comentarios',
  templateUrl: 'modal-comentarios.html'
})


export class ModalComentariosPage{
  
  todo3 = {};

  constructor(public navCtrl: NavController,public navParams: NavParams, public nav: NavController, public alertCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController, public modalCtrl: ModalController, public http: HttpClient, public usuarioService: Usuario, private view: ViewController) {
		//this.menu.swipeEnable(false);
    //this.menu.enable(false);
    //this.usuarioService.insertData(text);
  
  }


  Cerrar_Modal(){

    // recupero
    //console.log(data);

    /*
    const myData = {
      nombre_usuario: 'Parker'
    };
    */
    
   const myData = {
     rate: -1
   }
    this.view.dismiss(myData);

   // envio de nuevo
   // this.view.dismiss(myData);

  }


  Enviar_comentario(){

    const myData = {
      comentario_usuario: this.todo3["comentario_usuario"],
      rate: this.todo3["rate"]
    };


    this.view.dismiss(myData);

  }


     
    







}
