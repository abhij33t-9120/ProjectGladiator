import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddRetailerService } from '../../shared/add-retailer.service';

@Component({
  selector: 'app-add-retailer',
  templateUrl: './add-retailer.component.html',
  styleUrls: ['./add-retailer.component.scss'],
})
export class AddRetailerComponent implements OnInit {
  constructor(
    private Addretailer: AddRetailerService,
    private router: Router
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public retailer = {
    r_id: '',
    name: '',
    email: '',
    password: '',
  };

  formSubmit() {
    //validate
    console.log(this.retailer);
    //addUser: userservice
    this.Addretailer.addUser(this.retailer).subscribe(
      (data: any) => {
        //success
        alert('something');
        console.log(data);
        this.router.navigate(['/admin']);
        alert('Register Successful');
      },
      (error) => {
        //error
        console.log(error);
        this.router.navigate(['/admin']);
        alert('Register Successfull');
      }
    );
  }

  validateNo(e: any): boolean {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
