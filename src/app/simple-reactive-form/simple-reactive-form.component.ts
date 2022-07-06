import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-simple-reactive-form',
  templateUrl: './simple-reactive-form.component.html',
  styleUrls: ['./simple-reactive-form.component.scss']
})
export class SimpleReactiveFormComponent {

  public nameFormControl = new FormControl(null,
    Validators.compose([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10)
    ])
  );

  constructor() {
  }


  public get name() {
    return this.nameFormControl.value;
  }

}
