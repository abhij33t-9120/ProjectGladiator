import { Component, OnInit } from '@angular/core';
import { RetailerDetailsService } from '../../shared/retailer-details.service';
import { ret_detail } from '../../shared/model/retailer-details.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  RetailerList!: ret_detail[];
  constructor(private productService: RetailerDetailsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: ret_detail[]) => {
        this.RetailerList = data;
        this.productService.RetailerList = data;
        console.log(this.RetailerList);
      },
      (error) => {
        console.log(this.RetailerList);
        throw new Error('Data not found');
      }
    );
  }

  delete(id: number) {
    this.productService.delete(id).subscribe(
      (data) => {
        alert('delete successful');
      },
      (error) => {
        alert('Failed');
      }
    );
  }
}
