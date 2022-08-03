import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ret_detail } from 'src/app/shared/model/retailer-details.model';
import { RetailerDetailsService } from 'src/app/shared/retailer-details.service';

@Component({
  selector: 'app-retailer-profile',
  templateUrl: './retailer-profile.component.html',
  styleUrls: ['./retailer-profile.component.scss'],
})
export class RetailerProfileComponent implements OnInit {
  r_id!: number;
  retailerInfo!: ret_detail;
  constructor(
    private retailerDetailsService: RetailerDetailsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.r_id = Number(localStorage.getItem('user_id'));
    this.retailerDetailsService.getRetailerDetails(this.r_id).subscribe(
      (data) => {
        // alert('Retailer details');
        this.retailerInfo = data;
        console.log(this.retailerInfo);
      },
      (error) => {
        alert('error');
      }
    );
  }
}
