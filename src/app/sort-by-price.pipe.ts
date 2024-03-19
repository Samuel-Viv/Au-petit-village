import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(products: any[], sortBy: string): any[] {
    if (!products || !sortBy) {
      return products;
    }

    return products.slice().sort((a, b) => {
      if (sortBy === 'price_asc') {
        return a.prix - b.prix;
      } else if (sortBy === 'price_desc') {
        return b.prix - a.prix;
      } else {
        return 0;
      }
    });
  }
}
