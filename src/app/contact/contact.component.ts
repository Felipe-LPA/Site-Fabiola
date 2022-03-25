import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  optEmailPhone = "optEmailPhone"
  constructor(private formBuilder: FormBuilder) { }
  contactForm = this.formBuilder.group({
    name: ["",[Validators.required]],
    subject: [""],
    optEmailPhone: ["optEmailPhone"],
    email: ["",[]],
    phone: ["",[]],
    description: ['']
  })
  // phoneConditionallyRequiredValidator(formControl: AbstractControl){
  //   if(this.optEmailPhone == "optEmailPhone") return Validators.required(formControl)
  //   return null
  // }

  // emailConditionallyRequiredValidator(formControl: AbstractControl) {
  //   if (!formControl.parent || !formControl || formControl.parent.get('optEmailPhone') == null) {
  //     return null;
  //   }
    
  //   if (formControl.parent.get('optEmailPhone').value == "optEmailPhone") {
  //     return Validators.required(formControl); 
  //   }
  //   return null;
  // }

  // phoneConditionallyRequiredValidator() {
  //   if(this.optEmailPhone == 'optEmailPhone' || this.optEmailPhone == 'optPhone'){
  //     Validators.
  //   }
  //   return null
  // }
  
  onSubmit(){
    console.log(this.contactForm.value)
  }
  ngOnInit(): void {
    
  }

}
