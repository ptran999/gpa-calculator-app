/*
    Title: sign-in.component.ts
    Author: Phuong Tran
    Date: 05/03/2024
    Description: Exercise 7.3 Form Validation.
*/


import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private signinService: SignInService) {

  }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: [
        '', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])
      ]  });
  }

  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);
    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Student ID is invalid.';
    }
  }

  get form() {
    return this.signinForm.controls;
  }

}
