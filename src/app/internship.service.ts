/**
 * Created by SSKeikoMK on 02-11-2016.
 */
import {Injectable} from "@angular/core";
import {internships} from "./mock-internship";

@Injectable()
export class InternshipsService
{
  public getAllInternships(): any
  {
    return internships;
  }

  public getInternship(id: number): any
  {
    return this.getAllInternships().find(internship => internship._id === id);
  }
}