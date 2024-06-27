import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class ValidationService {

  constructor() { }

  static onlyAlphabets(control){

   // console.log("the user input is ",control.value)
    const reg = /^[A-Za-z]+$/   // ABSC

    if(reg.test(control.value)){
      return null;
    }
    else{
      return {invalidInput: true};
    }
  }
}
