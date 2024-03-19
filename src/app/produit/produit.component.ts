import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit  {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
 
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getAllProducts().subscribe((products: any[]) => {
        this.product = products.find(product => product.id === parseInt(id));
      });
  }
}
}
