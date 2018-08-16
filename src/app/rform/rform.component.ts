import { CustomValidators } from './../classes/custom-validators';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators, AbstractControl } from '@angular/forms';

// function AgeValidator(a:AbstractControl):{[key:string]:boolean}|null{
//   console.log('ran validator '+a.value);
//   if( (a.value <18 || a.value > 139 )){
//     console.log('invalid')
//     return {'confused':true};
//   }
//   return null;
// }


@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {
  reactiveForm:FormGroup;
  constructor() { 
    this.reactiveForm = new FormGroup({
      'name':new FormControl('',[Validators.required]),
     // 'age' :new FormControl('',[Validators.min(18),Validators.required]),
     'age' :new FormControl('',[CustomValidators.AgeValidator]),
      'description':new FormControl()
    });
  }

  ngOnInit() {
  }

  submitMyForm(formOb){
    console.log(formOb);
  }

}
