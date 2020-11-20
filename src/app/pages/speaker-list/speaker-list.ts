import { Component, ViewChild} from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { PopoverController,ToastController,IonList } from '@ionic/angular';
import { SpeakerListPopoverPage } from '../speaker-list-popover/speaker-list-popover';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  // Gets a reference to the list element
  @ViewChild('sessionList', { static: false }) sessionList: IonList;

  speakers: any[] = [];
  queryText = '';
  showSearchbar: boolean = false;

  constructor(public confData: ConferenceData,
              public toastCtrl: ToastController,
              public popoverCtrl: PopoverController) {}

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }

  dragging(event, session) {
    if (session.ack) {
      event.target.getOpenAmount().then(res => {
          let openAmount = res;
          console.log("--- open amount ----");
          console.log(openAmount);
          if (openAmount > 200) {
            console.log("archive this; closeOpened()");
            session.hide=true;
            event.target.close(); //need to do this to take focus off the current item
          }
      });
    }
  }
  fullySwiped($event,session) {
    console.log("fullySwiped");
    console.log(this.sessionList);
      if (this.sessionList) {
        this.sessionList.closeSlidingItems();
      }
  }


  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: SpeakerListPopoverPage,
      event
    });
    await popover.present();
  }

  updateSchedule(){}

  getIcon(session) {
    let myIcon=null;
    switch (session.location) {
      case 'Done':
        myIcon='checkbox';
        break;
      case 'Not Done':
          myIcon='flag';
          break;
      case 'Revoked':
        myIcon='hand-left';
        break;
    }
    if (!session.ack) {
      myIcon =`${myIcon}-outline`;
    }
    return myIcon;
  }
/*
  async ionViewDidEnter() {
    const toast = await this.toastCtrl.create({
      message: 'This does not actually send a support request.',
      duration: 3000
    });
    await toast.present();
  }
  */

  async ack($event, session) {
    $event.stopPropagation();
    $event.preventDefault();
    if (session.ack) {
      session.ack=false;
    } else {
      session.ack=true;
      const toast = await this.toastCtrl.create({
        header: 'Acknowledged',
        //message: 'Acknowledged',
        duration: 1000
      });
      await toast.present();
    }

  }
}
