import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewChecked {
  emailPhone: String = 'email and phone';
  constructor(private cdRef: ChangeDetectorRef) {}

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    subject: new FormControl(),
    optEmailPhone: new FormControl('email and phone'),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(14),
    ]),
    description: new FormControl(),
  });

  changeRequiredValidators(choosedField: String) {
    this.emailPhone = choosedField;
    console.log(choosedField);
    this.contactForm.controls['phone'].removeValidators(Validators.required);
    this.contactForm.controls['email'].removeValidators(Validators.required);
    this.contactForm.controls['phone'].updateValueAndValidity();
    this.contactForm.controls['email'].updateValueAndValidity();
    this.contactForm.updateValueAndValidity();
    if (choosedField === 'email and phone') {
      this.contactForm.controls['email'].addValidators(Validators.required);
      this.contactForm.controls['email'].updateValueAndValidity();
      this.contactForm.controls['phone'].addValidators(Validators.required);
      this.contactForm.controls['phone'].updateValueAndValidity();
      this.contactForm.updateValueAndValidity();
      console.log(
        'Phone: ',
        this.contactForm.controls['phone'].valid,
        'Email: ',
        this.contactForm.controls['email'].valid
      );
    } else if (choosedField === 'email') {
      this.contactForm.controls['phone'].setValue(null);
      this.contactForm.controls['email'].addValidators(Validators.required);
      this.contactForm.controls['email'].updateValueAndValidity();
      this.contactForm.updateValueAndValidity();
      console.log(
        'Phone: ',
        this.contactForm.controls['phone'].valid,
        'Email: ',
        this.contactForm.controls['email'].valid
      );
    } else if (choosedField === 'phone') {
      this.contactForm.controls['email'].setValue(null);
      this.contactForm.controls['phone'].addValidators(Validators.required);
      this.contactForm.controls['phone'].updateValueAndValidity();
      this.contactForm.updateValueAndValidity();
      console.log(
        'Phone: ',
        this.contactForm.controls['phone'].valid,
        'Email: ',
        this.contactForm.controls['email'].valid
      );
    }
  }
  isOver15Digits(phoneNumber: AbstractControl) {
    if (phoneNumber.value?.length > 15) {
      phoneNumber.setValue = phoneNumber.value.slice(0, 15);
    }
  }

  onSubmit() {
    console.log(
      'Formalário: ',
      this.contactForm.invalid ? 'Inválido' : 'válido'
    );
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
  ngOnInit(): void {
    this.emailPhone = 'email and phone';
  }
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
    this.isOver15Digits(this.contactForm.controls['phone']);
  }
}
