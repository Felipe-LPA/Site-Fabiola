import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PhoneFormatPipe } from './phone-format.pipe';



@NgModule({
  declarations: [
    ContactComponent,
    PhoneFormatPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class ContactModule { }
