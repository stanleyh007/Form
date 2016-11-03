/**
 * Created by SSKeikoMK on 02-11-2016.
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {InternshipsService} from "./internship.service";

@Component({
  selector: 'internships',
  template: `
    <div *ngFor="let internship of internships" (click)="gotoInternship(internship)">
    {{internship.initials}}, {{internship.lastName}}, {{internship.email}}, {{internship.phone}}, {{internship.programme}}
    </div>
    <p></p>
    <button routerLink="/internship">Create new internship</button>
    
    <button routerLink="a" > Goto A component</button>
    <button routerLink="b" > Goto b component</button>
    
    <router-outlet></router-outlet>
    
`
})

export class InternshipsComponent implements OnInit
{
  private internships: any[] = [];

  constructor(private internshipsService: InternshipsService,
              private router: Router)
  {

  }

  ngOnInit(): void
  {
    this.internships = this.internshipsService.getAllInternships();
  }

  gotoInternship(internship: any): void
  {
    let link = ['/internship', internship._id];
    this.router.navigate(link);
  }

}