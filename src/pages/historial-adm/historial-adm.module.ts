import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistorialAdmPage } from './historial-adm';

@NgModule({
	declarations: [
		HistorialAdmPage
	],
	imports: [
		IonicPageModule.forChild(HistorialAdmPage)
	],
	exports: [
		HistorialAdmPage
	]
})

export class HistorialAdmPageModule { }
