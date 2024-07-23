import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailvalidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailvalidatorDirective, multi: true}]
})
export class EmailvalidatorDirective implements Validator {
value:string='';
  constructor() { }
  //note that the AbstractControl gives you value of the control
  validate(control: AbstractControl): ValidationErrors | null {
    this.value=control.value;
    if(this.value.includes("test")){
      return {emailvalue:true};
    }
    return null;
    
  }
 

}
