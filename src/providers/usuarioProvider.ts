import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class Usuario {

  constructor(public http: HttpClient) {
    console.log('Accediendo a Usuario Provider');
  }


 GetData_usu(){

    var url = "/api_tesis/get_usu.php";
    return  this.http.get(url);

}

InsertData(text){

  var url = "/api_tesis/ins_usu.php";
  return  this.http.get(url+"?"+"nombre_usuario"+"="+ text);

}


}
