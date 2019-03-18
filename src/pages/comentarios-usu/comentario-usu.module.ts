import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComentarioUsuPage } from './comentario-usu';

@NgModule({
	declarations: [
		ComentarioUsuPage
	],
	imports: [
		IonicPageModule.forChild(ComentarioUsuPage)
	],
	exports: [
		ComentarioUsuPage
	]
})

export class ComentarioUsuPageModule { }
