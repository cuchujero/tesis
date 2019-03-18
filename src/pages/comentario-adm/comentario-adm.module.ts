import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComentarioAdmPage } from './comentario-adm';

@NgModule({
	declarations: [
		ComentarioAdmPage
	],
	imports: [
		IonicPageModule.forChild(ComentarioAdmPage)
	],
	exports: [
		ComentarioAdmPage
	]
})

export class ComentarioAdmPageModule { }
