import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeAdmPage } from './home-adm';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    HomeAdmPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeAdmPage),
    SuperTabsModule
  ],
})
export class HomeAdmPageModule {}
