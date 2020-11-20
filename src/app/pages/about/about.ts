import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Storage } from '@ionic/storage';
import { PopoverController,ModalController } from '@ionic/angular';
import { PopoverPage } from '../about-popover/about-popover';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage {
  speaker:any;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private modalCtrl: ModalController,
              public popoverCtrl: PopoverController,
              private storage: Storage) {
      console.log("About constructor");
      this.speaker={};
      this.speaker.name="Jon Rutherford";
      this.speaker.profilePic="/assets/img/flaticons/man-5.png";
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }


  ionViewWillEnter() {
    this.route.params.subscribe((params: Params) => {
          console.log("In subscribe to params...");
          console.log(params);
        });
  }

  openTutorial() {
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }

  showArchive() {}
}
