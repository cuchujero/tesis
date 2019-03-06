import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthPage } from './auth';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AuthPage
	],
	imports: [
		IonicPageModule.forChild(AuthPage),
		HttpClientModule
	],
	exports: [
		AuthPage
	]
})

export class AuthPageModule {

	
 }
