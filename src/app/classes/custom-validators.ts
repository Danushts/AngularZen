import { FormControl,ValidationErrors } from '@angular/forms';


export class CustomValidators {

    public static  AgeValidator(a:FormControl):ValidationErrors{
        console.log('ran validator '+a.value);
        if( (a.value <18 || a.value > 139 )){
          console.log('invalid')
          return {'confused':true};
        }
        return null;
      };

      public static NameValidator(name:FormControl):ValidationErrors{
        if((name.value.length < 3))
      }
}
