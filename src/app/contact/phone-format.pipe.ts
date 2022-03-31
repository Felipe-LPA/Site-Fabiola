import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
})
export class PhoneFormatPipe implements PipeTransform {
  transform(phone: String): String {
    let formatedPhone = '';
    let cleanPhone = this.getRawNumber(phone);
    let splitedPhone = cleanPhone.split('');

    if (splitedPhone.length === 0) {
      formatedPhone = '';
    } else if (splitedPhone.length === 1) {
      formatedPhone = '(' + cleanPhone;
    } else if (splitedPhone.length >= 1 && splitedPhone.length <= 2) {
      formatedPhone = '(' + cleanPhone + ')';
    } else if (splitedPhone.length >= 3 && splitedPhone.length <= 6) {
      formatedPhone = '(' + cleanPhone.slice(0, 2) + ') ' + cleanPhone.slice(2);
    } else if (splitedPhone.length >= 7 && splitedPhone.length <= 10) {
      formatedPhone =
        '(' +
        cleanPhone.slice(0, 2) +
        ') ' +
        cleanPhone.slice(2, 6) +
        '-' +
        cleanPhone.slice(6);
    } else if (splitedPhone.length === 11) {
      formatedPhone =
        '(' +
        cleanPhone.slice(0, 2) +
        ') ' +
        cleanPhone.slice(2, 7) +
        '-' +
        cleanPhone.slice(7);
    } else {
      formatedPhone =
        '(' +
        cleanPhone.slice(0, 2) +
        ') ' +
        cleanPhone.slice(2, 7) +
        '-' +
        cleanPhone.slice(7, 11);
    }

    return formatedPhone;
  }
  getRawNumber(phone: String): String {
    let splitedPhone = phone.split('');
    let regex = new RegExp('[0-9]');
    let phoneNumber = splitedPhone.filter((digit) => digit.match(regex));

    return phoneNumber.join('');
  }
}
