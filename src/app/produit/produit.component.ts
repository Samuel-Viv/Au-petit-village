import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent  {
  @Input() nom: string = ''
  @Input() description: string = ''
  @Input() materiau: string = ''
  @Input() hauteur: string = ''
  @Input() prix: number = 0
  @Input() disponibilite: string = ''
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
 
  ngOnInit(): void {
 const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const productId = +idParam;
      this.product = this.productService.getProductById(productId);
    }
  }

  

}
