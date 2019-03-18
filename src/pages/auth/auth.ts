import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController, MenuController } from 'ionic-angular';
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


  constructor(public navCtrl: NavController,public navParams: NavParams, private _fb: FormBuilder, public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController, public modalCtrl: ModalController, public http: HttpClient, public cuentasService: Cuentas) {
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
    
    /*

    var url= "/api_tesis/get_cuenta.php";
    this.data = this.http.get(url);
    
    this.data.subscribe(data =>{
    this.result=data;

    //this.result=data[0];
    //console.log(data);

    
    console.log(this.result); // JSON

    */

    // formas de busqueda

    // Con for

    /*

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

    */


    // Otras formas
    
    // this.result.find( (i) => i.password === 'adm');  // te devuelve todos los campos

    // this.result.filter( (i) => i.password === 'adm').shift();  // te devuelve primer arreglo encontrado

    /*

    const busqueda_usu = (this.result.find( (i) => i.nombre_cuenta === this.user ));

    const busqueda_pass = (this.result.find( (i) => i.password === this.pass ));

    if ( (busqueda_usu!=undefined) && (busqueda_pass!=undefined) ){
      this.navCtrl.setRoot('page-your-restaurant');
    }
    else{
      alert('Usuario y/o contraseña erroneos');
    }


    });
    
    */
    
    

     // OBTENGO DATOS REMOTOS POR PROVIDERS (SERVICIOS)
     
     //this.cuentasService.getRemoteData()


      this.cuentasService.getRemoteData().subscribe(data =>{
      this.result=data;
  
      //this.result=data[0];
      //console.log(data);
  
      
      console.log(this.result); // JSON
  
      // formas de busqueda
        
      // this.result.find( (i) => i.password === 'adm');  // te devuelve todos los campos
  
      // this.result.filter( (i) => i.password === 'adm').shift();  // te devuelve primer arreglo encontrado
  
      const busqueda_usu = (this.result.find( (i) => i.nombre_cuenta === this.user ));
  
      const busqueda_pass = (this.result.find( (i) => i.password === this.pass ));
  
      if ( (busqueda_usu!=undefined) && (busqueda_pass!=undefined) ){

        //let modal = this.modalCtrl.create('page-home-adm');
        //modal.present();

        this.navCtrl.setRoot('page-home-adm',busqueda_usu);   // datos que pasas = segundo parametro

        // this.navCtrl.push('page-home-adm',data);  // otra forma

        // para recuperar this.navParams.get('title')  // para recuperar informacion
      }
      else{
        alert('Usuario y/o contraseña erroneos');
      }
  
  
      });

   

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
