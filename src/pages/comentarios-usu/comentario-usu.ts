import {Component} from '@angular/core';
import {IonicPage, NavController, AlertController, ToastController, ModalController, Modal, Alert} from 'ionic-angular';

import {Comentario} from '../../providers/comentariosProvider';
import {HomeUsuPage} from '../home-usu/home-usu';
import { elementEnd } from '@angular/core/src/render3/instructions';


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


    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController, public comentariosService: Comentario, public homeusufun: HomeUsuPage, private modal: ModalController) {
       
    }


    
    result:any=[];
    result2:any=[];
    animals = [];


    ionViewDidLoad() {


    this.id_local=this.homeusufun.id_return_local();
    
    this.id_usuario=this.homeusufun.id_return_usuario();

    this.comentariosService.getRemoteData(this.id_local).subscribe(data =>{
             
        this.result=data;
      
       });
   
    }



    ingresar_comentario() {

    /*
    const myData = {
        nombre_usuario: 'Parker'
    };

    */

    
    //const myModal = this.modal.create('page-modal-comentarios');

    const myData = {  };

    const myModal: Modal = this.modal.create('page-modal-comentarios', { data: myData });

    //envio
    //const myModal = this.modal.create('page-modal-comentarios', { data: myData } );

    myModal.present();


    // Recupero

   /*
    return new Promise(resolve => {
      this.http.get('http://your.server.url)
        .map(res => res.json())
        .subscribe((data: any) => {
          resolve(data.Data);
        }, error => {
          resolve(error);
        });
    });
*/

    myModal.onDidDismiss((data) => {


      if (data["rate"]==-1){  
       this.ionViewDidLoad();
      }
      else{

      this.id_local=this.homeusufun.id_return_local();
    
      this.id_usuario=this.homeusufun.id_return_usuario();

      this.comentariosService.insertData(data["comentario_usuario"],data["rate"],this.id_usuario,this.id_local).subscribe((data2: any) =>{
             
        if (this.result[0]=='F'){
          alert("Usted ya realizo su comentario en este local");
        }
        else{
          alert("Comentario Ingresado");
        }
        
        this.actualizar_comentarios();
      
      });
      
       
     
      }

    });

    
 

    

  }




  actualizar_comentarios(){
  this.navCtrl.setRoot(this.navCtrl.getActive().component); 
}
  



/*
    
  ingresar_comentario() {

    let alert = this.alertCtrl.create({
      title: 'Ingresar Comentario',
      inputs: [
        {
          name: 'Comentario',
          placeholder: 'Comentario', 
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
  
            if ((data.Comentario)!="") {
  
              const coment=data.Comentario;
  
              this.usuarioService.GetData_usu().subscribe(data =>{
  
                this.result2=data;       
            
                const busqueda_usu = (this.result2.find( (i) => i.nombre_usuario === nombreusu ));
            
          
                if (busqueda_usu!=undefined) {
                  
                  this.navCtrl.setRoot('page-category',busqueda_usu);   
  
                }
                else{
  
                  
                    let toast = this.toastCtrl.create({
                      message: 'No ingreso comentario',
                      duration: 3000,
                      position: 'bottom',
                      cssClass: 'alerta',
                      closeButtonText: 'OK',
                      showCloseButton: true
                    });
                    toast.present();
                  
                  // return false;
                }
               
            
              });
  
            } else {
  
              
                let toast = this.toastCtrl.create({
                  message: 'No ingreso comentario',
                  duration: 3000,
                  position: 'bottom',
                  cssClass: 'alerta',
                  closeButtonText: 'OK',
                  showCloseButton: true
                });
  
                toast.present();
              
              // return false;
            }
          }
        }
      ]
    });
    alert.present();
  }

*/


}