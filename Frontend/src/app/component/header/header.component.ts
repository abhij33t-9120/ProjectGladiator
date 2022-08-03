import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { AdminLoginService } from 'src/app/shared/admin-login.service';
import { help } from 'src/app/shared/model/help';
import { LoginService } from '../../shared/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cookiee = '';
  call = '';
  // display = false;
  public totalItem: number = 0;
  public searchTerm!: string;
  constructor(
    private router: Router,
    private cartService: CartService,
    public userLogin: LoginService,
    public adminLogin: AdminLoginService
  ) {}

  help1: any = help;

  ngOnInit(): void {
    this.fun();

    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });

    // if(sessionStorage.getItem('email')===)
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
  clickFunction() {
    localStorage.clear();

    this.router.navigate(['/products']);
  }

  Function() {
    this.router.navigate(['/admin']);
  }

  fun() {
    if (localStorage.getItem('Role') === 'Admin') {
      this.cookiee = 'Admin';
      console.log(this.cookiee);
    } else if (localStorage.getItem('Role') === 'User') {
      this.cookiee = 'User';
      console.log(this.cookiee);
    } else {
      this.cookiee = 'Retailer';
      console.log(this.cookiee);
    }
  }
}
