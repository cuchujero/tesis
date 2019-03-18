import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeUsuPage } from './home-usu';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    HomeUsuPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeUsuPage),
    SuperTabsModule
  ],
})
export class HomeUsuPageModule {}
