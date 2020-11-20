import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';
import { TinderUIComponent } from '../tinder-ui-component/tinder-ui.component';

@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
  styleUrls: ['./support.scss'],
})
export class SupportPage  {
  submitted = false;
  supportMessage: string;
  cards: Array<any> = [];
  speakers: any;

  constructor(
    public confData: ConferenceData,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private route: ActivatedRoute)   {}

  async ionViewDidEnter() {
    /*
    const toast = await this.toastCtrl.create({
      message: 'This does not actually send a support request.',
      duration: 3000
    });
    await toast.present();
    */
  }


  loadTinderCards() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;

      this.speakers.forEach((speaker)=>{
        this.cards.push(
          {
            img: speaker.profilePic,
            title: speaker.name,
            description: speaker.title
          });
      })
    });

/*
    this.cards = [
      {
        img: "https://placeimg.com/300/300/people",
        title: "Demo card 1",
        description: "This is a demo for Tinder like swipe cards"
      },
      {
        img: "https://placeimg.com/300/300/animals",
        title: "Demo card 2",
        description: "This is a demo for Tinder like swipe cards"
      },
      {
        img: "https://placeimg.com/300/300/nature",
        title: "Demo card 3",
        description: "This is a demo for Tinder like swipe cards"
      },
      {
        img: "https://placeimg.com/300/300/tech",
        title: "Demo card 4",
        description: "This is a demo for Tinder like swipe cards"
      },
      {
        img: "https://placeimg.com/300/300/arch",
        title: "Demo card 5",
        description: "This is a demo for Tinder like swipe cards"
      }
    ]
    */
  };

  logChoice($event) {
    console.log("choice made");
    console.log($event);
  }

  async submit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.supportMessage = '';
      this.submitted = false;

      const toast = await this.toastCtrl.create({
        message: 'Your support request has been sent.',
        duration: 3000
      });
      await toast.present();
    }
  }
}
