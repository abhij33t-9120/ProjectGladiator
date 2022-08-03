import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  angForm!: FormGroup;
  public user = {
    name: '',
    password: '',
    email: '',
  };

  ngOnInit(): void {}

  formSubmit() {
    console.log(this.user);
    if (this.user.name == '' || this.user.name == null) {
      // alert('User is required !!');

      return;
    }

    if (this.user.password == '' || this.user.password == null) {
      // alert('User is required !!');

      return;
    }

    //validate

    //addUser: userservice
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        //success
        alert('something');
        console.log(data);
      },
      (error) => {
        //error
        console.log(error);
        this.router.navigate(['login']);
        alert('Registration Successful');
      }
    );
  }
}
