import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class Imagen {

    //result:any=[];


    constructor(public http: HttpClient) {
        console.log('Accediendo a Imagen Provider');
    }

    getRemoteData_primera(id_local_fk){

        return  this.http.get("/api_tesis/get_imagen_primera.php?id_local_fk="+ id_local_fk);
    }

    getRemoteData_todas(id_local_fk){

        return  this.http.get("/api_tesis/get_imagenes.php?id_local_fk="+ id_local_fk);
    }



}