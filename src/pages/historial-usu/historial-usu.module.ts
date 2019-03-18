import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistorialUsuPage } from './historial-usu';

@NgModule({
	declarations: [
		HistorialUsuPage
	],
	imports: [
		IonicPageModule.forChild(HistorialUsuPage)
	],
	exports: [
		HistorialUsuPage
	]
})

export class HistorialUsuPageModule { }
