import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ValidationService } from './validation.service';
import { formatCurrency } from '@angular/common';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
form1 = new FormGroup({
  "name1": new FormControl("meer", [Validators.required, Validators.minLength(4), ValidationService.onlyAlphabets]),
  "address1": new FormGroup({
    "address2": new FormControl(),
    "address3": new FormControl()
  }),
  "skill": new FormArray([new FormControl()])
})

onSubmit(){
  console.log("the form object is", this.form1);

  console.log("only form values", this.form1.value);

  this.form1.patchValue({
    "name1": "happy",
  "address1": {
    "address2": "happy place1",
    "address3": "happy place2"

  }

})
this.form1.setValue({
  "name1": "sad",
"address1": {
  "address2": "sad place1",
  "address3": "sad place2"

},
 "skill": ['c','java','python']

})

}

onreset(){
  this.form1.reset();
}
get nam1(){
  return this.form1.controls['name1'];
}


get skills(){// we got the control of skill form control 
  return this.form1.controls['skill'] as FormArray;
}

onAddSkill(){
  this.skills.push(new FormControl()); // we are pushing new formControl
}
onRemove(key){
  this.skills.removeAt(key);
}


onkeyboard(event1){
  
  const charCode = event1.which?event1.which:event1.keyCode;
  this.form1.controls['name1']
  if(charCode > 47 && charCode <58){
    this.form1.controls['name1'].setErrors({invalidEntry:true});
    return false;

  }
  else{
    return true;
  }

}
}


// learnt on 27/06
// 1. create basic reactive form
// 2. add basic validators like RequiredValidator, milenght 
// 3. custom Validators
// 4. keypress event not related to reactive Forms but usefeul
// 5. form array used to update the form--
// 6. nested form groups