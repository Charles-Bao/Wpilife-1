import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  answer: string;
  type: string;
  selected = new FormControl('valid', [
    Validators.required
  ]);
  productNameError = new FormControl('', [
    Validators.required
  ]);
  productPriceError = new FormControl('', [
    Validators.required
  ]);
  productContactError = new FormControl('', [
    Validators.required
  ]);
  options = ['Household Item', 'Book', 'House', 'Others'];
  matcher = new MyErrorStateMatcher();
  productType = '';
 show() {
 console.log(this.selected);
 }
}
