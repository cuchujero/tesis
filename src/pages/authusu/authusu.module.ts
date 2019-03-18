import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthUsuPage } from './authusu';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AuthUsuPage
	],
	imports: [
		IonicPageModule.forChild(AuthUsuPage),
		HttpClientModule
	],
	exports: [
		AuthUsuPage
	]
})

export class AuthusuPageModule {

	
 }
