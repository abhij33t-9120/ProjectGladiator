import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { help } from 'src/app/shared/model/help';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {
  emailid!: string;
  password!: string;
  angForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    this.createForm();
  }

  help1: any = help;

  ngOnInit(): void {}
  checkLogin() {
    console.log(this.emailid + ' ' + this.password);
    if (this.emailid == 'Mehul@gmail.com' && this.password == 'Mehul123') {
      alert('Login success');
      localStorage.setItem('email', this.emailid);
      localStorage.setItem('Role', 'Admin');
      this.help1.demo = this.emailid;
      console.log(this.help1.demo);

      this.router.navigate(['/products']);
    } else {
      alert('Wrong Password');
      this.router.navigate(['/adminLogin']);
    }
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
    });
  }
}
