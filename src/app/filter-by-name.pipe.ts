import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(products: any[], searchProduct: string): any[] {
    if (!searchProduct.trim()) {
      return products;
    }
    searchProduct = searchProduct.toLowerCase();
    return products.filter(product => product.nom.toLowerCase().includes(searchProduct));
  }

}
