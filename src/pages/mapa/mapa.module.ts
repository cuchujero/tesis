import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgmCoreModule } from '@agm/core';

import { MapaPage } from './mapa';

@NgModule({
	declarations: [
		MapaPage
	],
	imports: [
		IonicPageModule.forChild(MapaPage),
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyD9BxeSvt3u--Oj-_GD-qG2nPr1uODrR0Y'
		})
	],
	exports: [
		MapaPage
	]
})

export class MapaPageModule { }
