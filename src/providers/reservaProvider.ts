import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class Reserva {

    //result:any=[];


    constructor(public http: HttpClient) {
        console.log('Accediendo a Reserva Provider');
    }

    insertData(nombre_reserva,fecha,hora,cantidad_personas,telefono_usuario,comentario_usuario,id_usuario,id_local){

        var p00="nombre_reserva";
        var p0="fecha";
        var p1="hora";
        var p2="cantidad_personas";
        var p3="telefono_usuario";
        var p4="comentario_usuario";
        var p5="id_usuario_fk";
        var p6="id_local_fk";

        var url = "/api_tesis/ins_reserva.php";


        return  this.http.get(url+"?"
        +p00+"="+nombre_reserva+"&"
        +p0+"="+fecha+"&"
        +p1+"="+hora+"&"
        +p2+"="+cantidad_personas+"&"
        +p3+"="+telefono_usuario+"&"
        +p4+"="+comentario_usuario+"&"
        +p5+"="+id_usuario+"&"
        +p6+"="+id_local);
        
    }


    GetData_usu(id_local_fk,id_usuario_fk){

        var url = "/api_tesis/get_reserva_usu.php";

        return  this.http.get(url+"?"+"id_local_fk"+"="+id_local_fk
        +"&"+"id_usuario_fk"+"="+id_usuario_fk);
    }


    GetData_local(id_local_fk){

        var url = "/api_tesis/get_reserva_adm.php";

        return  this.http.get(url+"?"+"id_local_fk"+"="+id_local_fk);
    }

  



}