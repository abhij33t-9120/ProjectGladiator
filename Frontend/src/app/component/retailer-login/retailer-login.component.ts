import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInfo } from 'src/app/shared/model/login.model';
import { RetInfo } from 'src/app/shared/model/retailer.model';
import { RetailerLoginService } from 'src/app/shared/retailer-login.service';

@Component({
  selector: 'app-retailer-login',
  templateUrl: './retailer-login.component.html',
  styleUrls: ['./retailer-login.component.scss'],
})
export class RetailerLoginComponent implements OnInit {
  userinfo!: RetInfo[];
  loginfo = new LoginInfo();
  constructor(
    private router: Router,
    private RetLoginService: RetailerLoginService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }
  angForm!: FormGroup;
  ngOnInit(): void {}

  formSubmit() {
    this.RetLoginService.login(this.loginfo).subscribe(
      (data) => {
        localStorage.setItem('user_id', data.r_id.toString());
        localStorage.setItem('Role', 'Retiler');
        this.router.navigate(['/retailer']);
        alert('Login Successfull');
      },
      (error: any) => {
        console.log(error);
        alert('error');
      }
    );
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
    });
  }
}
