import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { AgmCoreModule } from '@agm/core';

import { foodIonicApp } from './app.component';

import { PipesModule } from '../pipes/pipes.module';

import {MessageService} from "../providers/message-service-mock";
import {RestaurantService} from "../providers/restaurant-service-mock";
import {DishService} from "../providers/dish-service-mock";
import {CategoryService} from "../providers/category-service-mock";
import {CartService} from "../providers/cart-service-mock";
import {OrdersService} from "../providers/orders-service-mock";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { Cuentas } from '../providers/cuentasProvider';
import { Local } from '../providers/localProvider';
import { Usuario } from  '../providers/usuarioProvider';
import { Imagen } from  '../providers/imagenProvider';
import { Reserva } from  '../providers/reservaProvider';
import { Comentario } from  '../providers/comentariosProvider';
import { SuperTabsModule } from 'ionic2-super-tabs';

//import { CategoryPage } from '../pages/category/category';

// import { HomeAdmPage} from '../pages/home-adm/home-adm';

// import { HomeUsuPage} from '../pages/home-usu/home-usu';



@NgModule({
  declarations: [
    foodIonicApp,
   // HomeAdmPage,
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(foodIonicApp, {
    	preloadModules: true,
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__foodIonicDB',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
		}),
		AgmCoreModule.forRoot({
				apiKey: 'AIzaSyD9BxeSvt3u--Oj-_GD-qG2nPr1uODrR0Y'
		}),
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    foodIonicApp,
    // HomeAdmPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    RestaurantService,
    DishService,
    HttpClientModule,
    CategoryService,
    MessageService,
    CartService,
    OrdersService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, Cuentas, Local, Usuario, Imagen, Reserva, Comentario
  ]
})
export class AppModule {}
