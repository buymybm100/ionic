import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SpeakerListPage } from './speaker-list';
import { SpeakerListPageRoutingModule } from './speaker-list-routing.module';
import { SpeakerListPopoverPage } from '../speaker-list-popover/speaker-list-popover';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SpeakerListPageRoutingModule
  ],
  declarations: [SpeakerListPage, SpeakerListPopoverPage],
  entryComponents: [SpeakerListPopoverPage],
  bootstrap: [SpeakerListPage]
})
export class SpeakerListModule {}
