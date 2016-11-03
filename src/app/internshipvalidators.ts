import {FormControl} from "@angular/forms";
/**
 * Created by SSKeikoMK on 03-11-2016.
 */

export class InternshipValidators
{
  static getInitialsValidator()
  {
    return function initialsValidator(control: FormControl): {[s: string]: boolean}
    {
      if (control.value.match(/^123456789/))
      {
        return {invalidChars: true};
      }
    }
  }
}