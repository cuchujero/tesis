import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';

import { HttpClient} from '@angular/common/http';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';

import { Local } from '../../providers/localProvider';
import { HomeUsuPage } from '../home-usu/home-usu';
import { Imagen } from '../../providers/imagenProvider';

@IonicPage({
	name: 'page-local-info',
	segment: 'local-info'
})

@Component({
    selector: 'local-info',
    templateUrl: 'local-info.html'
})


export class LocalInfoPage implements OnInit {

  
  
  id_local=0;

  public onYourRestaurantForm: FormGroup;
 
  todo = {};
  public nombre_local:string;
  public l_a=0;
  public c_a=0;

  //data: Observable<any>;

  constructor(private _fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public localService: Local, public homeusufun: HomeUsuPage, public http: HttpClient, public imagenService: Imagen) {

    //this.localService.getRemoteData(id);
    //this.homefun.id_return();


  }

  

  
  result:any=[];
  
  result2:any=[];


  ionViewDidLoad(){
    
    
    
    this.id_local=this.homeusufun.id_return_local();

    //console.log(this.id);

    
    this.localService.getRemoteData(this.id_local).subscribe(data =>{
    this.result=data;
        
    });

      
    this.imagenService.getRemoteData_todas(this.id_local).subscribe(data =>{
      this.result2=data;
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
