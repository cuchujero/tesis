import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservasAdmPage } from './reservas-adm';

@NgModule({
	declarations: [
		ReservasAdmPage
	],
	imports: [
		IonicPageModule.forChild(ReservasAdmPage)
	],
	exports: [
		ReservasAdmPage
	]
})

export class ReservasAdmPagePageModule { }
