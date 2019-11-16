import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class Video {

    //result:any=[];


    constructor(public http: HttpClient) {
        console.log('Accediendo a Video Provider');
    }

    getRemoteData_todos(id_local_fk){

        return  this.http.get("/api_tesis/get_videos.php?id_local_fk="+ id_local_fk);
    }



}