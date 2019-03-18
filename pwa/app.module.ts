import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { AgmCoreModule } from '@agm/core';
import { foodIonicApp } from './app.component';

import { PipesModule } from '../src/pipes/pipes.module';

import {MessageService} from "../src/providers/message-service-mock";
import {RestaurantService} from "../src/providers/restaurant-service-mock";
import {DishService} from "../src/providers/dish-service-mock";
import {CategoryService} from "../src/providers/category-service-mock";
import {CartService} from "../src/providers/cart-service-mock";
import {OrdersService} from "../src/providers/orders-service-mock";
import { HomeAdmPage } from '../src/pages/home-adm/home-adm';
import { HomePage } from    '../src/pages/home/home';
import { HomeUsuPage } from '../src/pages/home-usu/home-usu';
import { SuperTabsModule } from 'ionic2-super-tabs';



@NgModule({
  declarations: [
    foodIonicApp,
    HomeAdmPage,
    HomePage,
    HomeUsuPage,
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(foodIonicApp, {
			preloadModules: true,
			iconMode: 'md',
			mode: 'md'
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
    HomeAdmPage,
    HomePage,
    HomeUsuPage,
  ],
  providers: [
    RestaurantService,
    DishService,
    HttpClientModule,
    CategoryService,
    MessageService,
    CartService,
		OrdersService,
    // { provide: LocationStrategy, useClass: PathLocationStrategy },
    // { provide: APP_BASE_HREF, useValue : '/' },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
