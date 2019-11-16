import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, NavController, MenuController } from 'ionic-angular';

@IonicPage({
	name: 'page-walkthrough',
	segment: 'walkthrough',
	priority: 'high'
})

@Component({
  selector: 'page-walkthrough',
  templateUrl: 'walkthrough.html',
})
export class WalkthroughPage {
	@ViewChild(Slides) slides: Slides;
  showSkip = true;
  dir: string = 'ltr';

  slideList: Array<any> = [
    {
      title: "<strong>Bricker</strong>",
      description: "No sabes donde reunirte a comer? Encontra los restaurantes y bares cercanos con las mejores promociones.",
      image: "assets/img/logo-intro1.png",
    },
    {
      title: "<strong>Bricker</strong>",
      description: "No encontras un lugar comodo para beber con amigos? Decidi a cual ir por sus fotos y comentarios",
      image: "assets/img/logo-intro2.png",
    },
    {
      title: "<strong>Bricker</strong>",
      description: "Tampoco sabes que hacer esta noche? Compara cada local y elegi el mejor",
      image: "assets/img/logo-intro3.png",
    }
  ];

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.menu.swipeEnable(false);
    this.menu.enable(false);
  }

  onSlideNext() {
    this.slides.slideNext(300)
  }

	onSlidePrev() {
    this.slides.slidePrev(300)
  }

  onLastSlide() {
  	this.slides.slideTo(3, 300)
  }

  openHomePage() {
  	this.navCtrl.push('page-authusu');
  }

  openAuthPage() {
    this.navCtrl.push('page-auth');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalkthroughPage');
  }

}
