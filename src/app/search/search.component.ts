import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit  {

  searchProduct: string = '';
  sortBy: string= '';
  productList: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadAllProducts();
    
  }

  loadAllProducts() {
    this.productList = this.productService.getAllProducts()  
  };
  } 

