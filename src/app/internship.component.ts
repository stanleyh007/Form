/**
 * Created by SSKeikoMK on 01-11-2016.
 */
import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Params} from "@angular/router";
import {InternshipsService} from "./internship.service";
import {InternshipValidators} from "./internshipvalidators";

@Component({
  selector: 'internship-entry',
  template: `
  <h2 class="">Internship Form</h2>
  <form [formGroup]="internshipForm" (ngSubmit)="onSubmit(internshipForm)">
  
  <div class="row">
    <div class="col-sm-6" [ngClass]="{'has-error': !internshipForm.valid && internshipForm.touched}">
    <div class="form-group">
    <label for="initials">First Name</label>
    <input type="text"
           id="initials"
           placeholder="initials"
           [formControl]="internshipForm.controls['initials']"
           class="form-control" value="{{selectedInternship?.initials}}"/>
           
      <p *ngIf="!internshipForm.controls.initials.valid 
      && internshipForm.controls.initials.touched" class="help-block">Name are invalid</p>
      <p *ngIf="internshipForm.controls.initials.hasError('required') 
      && internshipForm.controls.initials.touched" class="ui message help-block">Name are required</p>
      <p *ngIf="internshipForm.controls.initials.hasError('invalidChars') 
      && internshipForm.controls.initials.touched" class="ui message help-block">Number is invalid</p>
    </div>
    <p *ngIf="!internshipForm.valid && internshipForm.controls.initials.touched" class="help-block">Form is invalid</p>
    
    <button type="submit" class="btn btn-primary" [disabled]="!internshipForm.valid">Submit</button>
    <button routerLink="/internships" class="btn btn-danger">Back</button>
    </div>
    </div> 
</form>
`
})

export class InternshipEntryComponent implements OnInit
{
  internshipForm: FormGroup;
  selectedInternship: any;

  ngOnInit(): void
  {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.selectedInternship = this.internshipService.getInternship(id);
    });

    this.internshipForm = this.fb.group({
      'initials': ['', Validators.compose([
        Validators.required, InternshipValidators.getInitialsValidator()])]
    })
  }

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private internshipService: InternshipsService)
  {

  }

  public invalidInitials() : Boolean
  {
    if (!this.internshipForm.controls['initials'].valid && this.internshipForm.controls['initials'].touched)
    {
      return true;
    }
    return true;
  }

  public onSubmit(form)
  {
    if (form.valid)
    {
      console.log("Yes! It is valid");
    }
    else
    {
      console.log("No! it is not, please fix it and try again");
    }
  }
}
