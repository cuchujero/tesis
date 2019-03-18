import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
//import { Observable } from 'rxjs/Observable';
// import { HttpClient, Headers, RequestOptions } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';

import { Local } from '../../providers/localProvider';
import { HomeAdmPage } from '../home-adm/home-adm';

@IonicPage({
	name: 'page-your-restaurant',
	segment: 'your-restaurant'
})

@Component({
    selector: 'your-restaurant',
    templateUrl: 'your-restaurant.html'
})


export class YourRestaurantPage implements OnInit {

  
  
  id_local=0;

  public onYourRestaurantForm: FormGroup;
 
  todo = {};
  public nombre_local:string;
  public l_a=0;
  public c_a=0;

  //data: Observable<any>;

  constructor(private _fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public localService: Local, public homeadmfun: HomeAdmPage, public http: HttpClient) {

    //this.localService.getRemoteData(id);
    //this.homefun.id_return();


  }

  
  result2:any=[];

  enviar_formulario(){
    
    //var headers = new Headers();
    //headers.append("Accept", 'application/json');
    //headers.append('Content-Type', 'application/json' );
    //const requestOptions = new RequestOptions({ headers: headers });
    // tercer parametro de post requestOptions


    //let postData = new FormData();
    
    let postData = this.todo;

    //console.log(postData);

    // JSON.stringify

    /*

    this.http.post("/api_tesis/set_local_datos.php", postData)
      .subscribe(data => {
        console.log(data);
      });
      
     */
     

    //this.http.get("/api_tesis/set_local_datos.php?+nombre_local="+ this.todo[this.nombre_local]);


    this.id_local=this.homeadmfun.id_return();

      if (this.todo["local_abierto"]==true){
        this.l_a=1;
      }
      else{
        this.l_a=0;
      }

      if (this.todo["cocina_abierta"]==true){
        this.c_a=1;
      }
      else{
        this.c_a=0;
      }
    
    this.localService.SetData(this.id_local,this.todo["nombre_local"],this.todo["direccion"],this.todo["telefono_local"],this.todo["horarios"],this.todo["promociones"],this.l_a,this.c_a).subscribe(data =>{
             
      this.result2=data;
      alert("datos guardados exitosamente");
    
     });
      
  }



    //console.log(this.todo["nombre_local"]);
   
  

  
  result:any=[];


  ionViewDidLoad(){
    
    this.id_local=this.homeadmfun.id_return();

    //console.log(this.id);

    
    this.localService.getRemoteData(this.id_local).subscribe(data =>{
    this.result=data;
      
    console.log(this.result); 
  
    });

  }


  ngOnInit() {
    this.onYourRestaurantForm = this._fb.group({
      profiledata: [true, Validators.compose([
        Validators.required
      ])],
      restaurantTitle: ['', Validators.compose([
        Validators.required
      ])],
      restaurantAddress: ['', Validators.compose([
        Validators.required
      ])],
      restaurantType: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  // process send button
  sendData() {
    // send booking info
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'profiles-bg',
      message: 'Your restaurant was registered!',
      duration: 3000,
      position: 'bottom'
    });

    loader.present();


    setTimeout(() => {
      loader.dismiss();
      toast.present();
      // back to home page
      this.navCtrl.setRoot('page-auth');
    }, 3000)
    
  }

}
