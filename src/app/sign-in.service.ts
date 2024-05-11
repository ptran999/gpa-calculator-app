/*
    Title: sign-in.service.ts
    Author: Phuong Tran
    Date: 05/03/2024
    Description: Exercise 7.2 - Reactive Forms.
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  // declare variable and type
  studentIds: Array<number>;

  constructor() {

    // add data to the array
    this.studentIds = [
      1007, 1008, 1009, 1010, 1011, 1012
    ];
  }

  // check for a truthy value
  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
