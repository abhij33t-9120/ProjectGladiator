import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetailerDetailsService } from 'src/app/shared/retailer-details.service';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.scss'],
})
export class RetailerComponent implements OnInit {
  r_id!: number;
  res!: string;
  constructor(
    private retailerService: RetailerDetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.r_id = Number(localStorage.getItem('user_id'));
  }

  deleteRetailer() {
    this.retailerService.delete1(this.r_id).subscribe(
      (res: string) => {
        this.res = res;
        alert('deleted successfully');
      },
      (error) => {
        alert(error);
      }
    );
    localStorage.clear();
    this.router.navigate(['/products']);
  }
}
