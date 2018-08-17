import { FormControl,ValidationErrors } from '@angular/forms';


export class CustomValidators {

    public static  AgeValidator(a:FormControl):ValidationErrors{
        console.log('ran validator '+a.value);
        if( (a.value <18 || a.value > 139 )){
          console.log('invalid')
          return {'errorMsg':'Your age should be greater Than 18 and less than 139'};
        }
        return null;
      };

     
}
