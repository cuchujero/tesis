import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalInfoPage } from './local-info';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
	declarations: [
		LocalInfoPage
	],
	imports: [
		IonicPageModule.forChild(LocalInfoPage),
		HttpClientModule
	],
	exports: [
		LocalInfoPage
	]
})

export class LocalInfoPageModule { }
