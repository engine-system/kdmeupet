import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetIndividualPage } from './pet-individual';

@NgModule({
  declarations: [
    PetIndividualPage,
  ],
  imports: [
    IonicPageModule.forChild(PetIndividualPage),
  ],
})
export class PetIndividualPageModule {}
