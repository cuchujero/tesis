import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class Local {

    //result:any=[];


    constructor(public http: HttpClient) {
        console.log('Accediendo a Local Provider');
    }

    getRemoteData(id){

        return  this.http.get("/api_tesis/get_local_datos.php?id="+ id);
      
    }


    getRemoteDataLocalesporRubro(id_rubro_fk){
        return  this.http.get("/api_tesis/get_locales_datos.php?id_rubro_fk="+ id_rubro_fk);
    }



    SetData(id,nombre_local,direccion,telefono_local,horarios, promociones,local_abierto,cocina_abierta){

        var p0="id";
        var p1="nombre_local";
        var p2="direccion";
        var p3="telefono_local";
        var p4="horarios";
        var p5="promociones";
        var p6="local_abierto";
        var p7="cocina_abierta";

        var url= "/api_tesis/set_local_datos.php";

        return  this.http.get(url+"?"
        +p0+"="+id+"&"
        +p1+"="+nombre_local+"&"
        +p2+"="+direccion+"&"
        +p3+"="+telefono_local+"&"
        +p4+"="+horarios+"&"
        +p5+"="+promociones+"&"
        +p6+"="+local_abierto+"&"
        +p7+"="+cocina_abierta);

        
    }

}