import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IonicPage, NavController, AlertController, ToastController, MenuController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/catch';

import  'rxjs/add/operator/map';

import { Cuentas } from '../../providers/cuentasProvider';


@IonicPage({
	name: 'page-auth',
	segment: 'auth',
	priority: 'high'
})


@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})
export class AuthPage implements OnInit {



  public onLoginForm: FormGroup;
  public onRegisterForm: FormGroup;
  auth: string = "login";

  data: Observable<any>;

  public ttt: any;


  constructor(public navCtrl: NavController, private _fb: FormBuilder, public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController, public http: HttpClient, public cuentasService: Cuentas) {
		this.menu.swipeEnable(false);
    this.menu.enable(false);
    this.cuentasService.getRemoteData();
  }

  ngOnInit() {
    this.onLoginForm = this._fb.group({
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.onRegisterForm = this._fb.group({
      fullName: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  // go to register page
  // register() {
  //   this.nav.setRoot(RegisterPage);
  // }


  // login and go to home page


  result:any=[];

  user:string;
  pass:string;

  datos_cuenta=[];

  
  access=0;

 

  login() {
   
    console.log("usuario escrito : " + this.user);
    console.log("password escrito: " + this.pass);

    
    // OBTENER DATOS REMOTOS DE FORMA DIRECTA
    
    
    
    var url= "/api_tesis/get_cuenta.php";
    this.data = this.http.get(url);
    
    this.data.subscribe(data =>{
    this.result=data;

    //this.result=data[0];
    //console.log(data);

    
    console.log(this.result); // JSON

       
    for(var i = 0; i < this.result.length; i++)
      {
        if ( (this.result[i].nombre_cuenta == this.user) && (this.result[i].password == this.pass) )
        {
          this.access=1;
          
        }
      }
      
        if (this.access==1){
          this.navCtrl.setRoot('page-your-restaurant');
        }
        else{
          alert('Usuario y/o contraseña erroneos');
        }

    });
    
 
    

    // OBTENGO DATOS REMOTOS POR PROVIDERS (SERVICIOS)
    
    //this.cuentasService.getRemoteData()

   

 }



  Recuperar_contra() {
    let forgot = this.forgotCtrl.create({
      title: 'Recuperar contraseña',
      message: "Ingrese su direccion de email para reiniciar su contraseña",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'El e-mail fue enviado exitosamente',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
