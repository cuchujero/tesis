
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class Comentario {

    //result:any=[];


    constructor(public http: HttpClient) {
        console.log('Accediendo a Comentarios Provider');
    }

    getRemoteData(id_local_fk){
        var url = "/api_tesis/get_comentario.php";
        return  this.http.get(url+"?"+"id_local_fk"+"="+ id_local_fk);
    }

}