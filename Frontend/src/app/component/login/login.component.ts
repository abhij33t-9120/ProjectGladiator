import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInfo } from '../../shared/model/login.model';
import { LoginService } from '../../shared/login.service';
import { UserInfo } from '../../shared/model/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login_details = new LoginInfo();
  user_details!: UserInfo[];
  constructor(
    private router: Router,
    private LoginService: LoginService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }
  angForm!: FormGroup;
  ngOnInit(): void {
    // this.login1 = this.LoginService.getPUserByemail(this.loginData.email);
  }

  Gotologin(): void {
    this.router.navigate(['Signup']);
  }
  cookiee = '';
  // authenticate(email: string, password: string) {
  //   if (
  //     email === this.login_details.email &&
  //     password === this.login_details.password
  //   ) {
  //     localStorage.setItem('user_id', this.user_details[0].user_id.toString());
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  formSubmit() {
    this.LoginService.login(this.login_details).subscribe((data) => {
      localStorage.setItem('user_id', data.user_id.toString());
      localStorage.setItem('Role', 'User');
      alert('successfull');
      console.log(data);

      this.user_details[0] = data;
      console.log(this.user_details[0] + 'hello');
      this.LoginService.userinfo = data;
      // this.router.navigate(['/product']);
    });

    this.router.navigate(['/products']);
    // window.location.reload();
  }

  click() {
    alert('click');
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
    });
  }
}
