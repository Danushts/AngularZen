import { FormControl, NG_VALIDATORS,ValidationErrors,Validator } from '@angular/forms';
import { Directive} from '@angular/core';


@Directive({
  selector: '[age-validate]',
  providers:[{provide:NG_VALIDATORS,useExisting:AgevalidateDirective,multi:true}]
})
export class AgevalidateDirective implements Validator{

  constructor() { }
  validate(a:FormControl):ValidationErrors{
    if( (a.value <18 || a.value > 139 )){
      console.log('invalid')
      //return {'ageError':true};
       return {'Error in Age':'Your age should be greater Than 18 and less than 139'};
    }
    return null;
   }
}
