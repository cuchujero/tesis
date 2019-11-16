
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class Filtro {

    //result:any=[];


    constructor(public http: HttpClient) {
        console.log('Accediendo a Filtros Provider');
    }

    getRemoteData(){
        
        var url = "/api_tesis/get_filtros.php";
        return  this.http.get(url);
    }


}