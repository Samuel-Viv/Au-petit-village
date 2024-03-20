import { Injectable } from '@angular/core';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  private products: Product[] = [
    {
        id:1,
        nom: "Figurine de Astérix",
        image:"../assets/images/asterix.jpg",
        description: "Figurine d'Astérix sculptée en argile et peinte à la main. Parfaite pour les collectionneurs et les amateurs.",
        prix: 35.99,
        materiau: 'Résine',
        hauteur: '15 cm',
        disponibilite: 'En stock'
    },
    {
        id:2,
        nom: "Figurine d'Obelix",
        image:"../assets/images/asterix.jpg",
        description: "Figurine d'Obélix sculptée en argile et peinte à la main. Parfaite pour les collectionneurs et les amateurs.",
        prix: 35.99,
        materiau: 'Résine',
        hauteur: '15 cm',
        disponibilite: 'En stock'
    }, {
        id:3,
        nom: "Figurine d'Idéfix",
        image:"../assets/images/asterix.jpg",
        description: "Figurine d'Idéfix sculptée en argile et peinte à la main. Parfaite pour les collectionneurs et les amateurs.",
        prix: 25.99,
        materiau: 'Résine',
        hauteur: '5 cm',
        disponibilite: 'En stock'
    }, {
        id:4,
        nom: "Figurine de Panoramix",
        image:"../assets/images/asterix.jpg",
        description: "Figurine de Panoramix sculptée en argile et peinte à la main. Parfaite pour les collectionneurs et les amateurs.",
        prix: 30.99,
        materiau: 'Résine',
        hauteur: '15 cm',
        disponibilite: 'En stock'
    }, {
        id:5,
        nom: "Figurine de Falbala",
        image:"../assets/images/asterix.jpg",
        description: "Figurine de Falbala sculptée en argile et peinte à la main. Parfaite pour les collectionneurs et les amateurs.",
        prix: 30.99,
        materiau: 'Résine',
        hauteur: '15 cm',
        disponibilite: 'En stock'
    }
];
getAllProducts(): Product[] {
  return this.products;
}

getProductById(id: number): Product | undefined {
  return this.products.find(product => product.id === id);
}
}
