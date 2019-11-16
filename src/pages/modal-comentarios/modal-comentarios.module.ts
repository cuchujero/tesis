import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalComentariosPage } from './modal-comentarios';
import { HttpClientModule } from '@angular/common/http';
import { Ionic2RatingModule } from "ionic2-rating";


@NgModule({
	declarations: [
		ModalComentariosPage
	],
	imports: [
		IonicPageModule.forChild(ModalComentariosPage),
		HttpClientModule,
		Ionic2RatingModule
	],
	exports: [
		ModalComentariosPage
	]
})

export class ModalComentariosPageModule {

	
 }
