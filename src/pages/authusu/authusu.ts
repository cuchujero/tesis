import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController, MenuController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


//import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';

import { Usuario } from '../../providers/usuarioProvider';


@IonicPage({
	name: 'page-authusu',
	segment: 'authusu',
	priority: 'high'
})


@Component({
  selector: 'page-authusu',
  templateUrl: 'authusu.html'
})


export class AuthUsuPage{

  /*
  public onLoginForm: FormGroup;
  public onRegisterForm: FormGroup;
  authusu: string = "login";

  data: Observable<any>;

  public ttt: any;
 */

  constructor(public navCtrl: NavController,public navParams: NavParams, public nav: NavController, public alertCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController, public modalCtrl: ModalController, public http: HttpClient, public usuarioService: Usuario) {
		//this.menu.swipeEnable(false);
    //this.menu.enable(false);
    //this.usuarioService.insertData(text);
  }




login_usu() {
  let alert = this.alertCtrl.create({
    title: 'Ingresar Nombre',
    //message: "Ingrese",
    inputs: [
      {
        name: 'username',
        placeholder: 'Nombre o Alias',
        type: 'email'
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Ingresar',
        handler: data => {
          if (1==1){
          //if (User.isValid(data.username, data.password)) {
            // logged in!
          } else {
            // invalid login
            return false;
          }
        }
      }
    ]
  });
  alert.present();
}


result:any=[];

generate_usu(){

  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";
  var possible2 = "0123456789";

  for (var i = 0; i < 3; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  for (var i = 0; i < 3; i++)
    text += possible2.charAt(Math.floor(Math.random() * possible2.length));

    console.log(text);

    
    this.usuarioService.InsertData(text).subscribe(data =>{
             
      this.result=data[0];
      
      //console.log(this.result.nombre_usuario);

      alert("Alias asignado: " + this.result.nombre_usuario);
      this.navCtrl.setRoot('page-category',this.result);


      // ,this.result.id_usuario
    
     });
  

     
    
}






}
