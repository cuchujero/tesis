import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class Cuentas {

    result:any=[];


    constructor(public http: HttpClient) {
        console.log('Accediendo a Cuentas Provider');
    }

    getRemoteData(){

        
        this.http.get("/api_tesis/get_cuenta.php").subscribe( data => {
            this.result=data;
           // console.log(data)
        
        });
        
        /*
            let promise = new Promise((resolve, reject) => {
                this.http.get("/api_tesis/get_cuenta.php")
                .toPromise()
                .then(
                    res => { // Success
                    //console.log(res);
                    this.result= res;
                    resolve()
                    },
                    msg => {
                        reject();
                    }
                )
            });
            return promise;
        
        */


    }

}