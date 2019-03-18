import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservaUsuPage } from './reserva-usu';


@NgModule({
	declarations: [
		ReservaUsuPage
	],
	imports: [
		IonicPageModule.forChild(ReservaUsuPage)
	],
	exports: [
		ReservaUsuPage
	]
})

export class ReservaUsuPageModule { }
