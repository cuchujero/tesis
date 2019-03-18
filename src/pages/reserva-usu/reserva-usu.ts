import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import { HttpClient} from '@angular/common/http';

import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';

import { Local } from '../../providers/localProvider';
import { HomeUsuPage } from '../home-usu/home-usu';
import { Reserva } from '../../providers/reservaProvider';


@IonicPage({
	name: 'page-reserva-usu',
	segment: 'reserva-usu'
})

@Component({
    selector: 'reserva-usu',
    templateUrl: 'reserva-usu.html'
})


export class ReservaUsuPage {
  
  id_local=0;
  id_usuario=0;
 
  todo2 = {};
  public nombre_local:string;
  public l_a=0;
  public c_a=0;

  //data: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public localService: Local, public reservaService: Reserva, public homeusufun: HomeUsuPage, public http: HttpClient) {



  }


  
  
  ionViewDidLoad(){  }

  
  result:any=[];
  result2:any=[];

  solicitar_reserva(){
      
    let postData2 = this.todo2;

    this.id_local=this.homeusufun.id_return_local();
    
    this.id_usuario=this.homeusufun.id_return_usuario();
    
    this.reservaService.insertData(this.todo2["nombre_reserva"],this.todo2["fecha"],this.todo2["hora"],this.todo2["cantidad_personas"],this.todo2["telefono_usuario"],this.todo2["comentario_usuario"],this.id_usuario,this.id_local).subscribe(data =>{
             
      this.result2=data;

      alert("Su reserva fue enviada. Su solicitud será respondida por un responsable del local.");
    
     });
      
  }




  
  
}
