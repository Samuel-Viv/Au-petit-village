import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit  {

  searchProduct: string = '';
  sortBy: string= '';
  productList: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadAllProducts();
    
  }

  loadAllProducts() {
    this.productService.getAllProducts().subscribe((result:any) => {
      this.productList = result.data;
    });
  } 

  changeSortOrder(): void {
    this.sortBy = this.sortBy === 'price_asc' ? 'price_desc' : 'price_asc';
  }
  }


