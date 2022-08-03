import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../shared/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  constructor(
    private CategoryService: CategoryService,
    private router: Router
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public product = {
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  };

  formSubmit() {
    //validate
    console.log(this.product);
    //addUser: userservice
    this.CategoryService.addProduct(this.product).subscribe(
      (data: any) => {
        //success
        alert('something');
        console.log(data);
        this.router.navigate(['retailer']);
        // alert('Product added Successful');
      },
      (error) => {
        //error
        console.log(error);
        this.router.navigate(['retailer']);
        alert('Product added Successfully');
        // alert('Login Successful');
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
