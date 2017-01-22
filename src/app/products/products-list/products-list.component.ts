import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../shared/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() products: Product[];

  @Output() onProductSelected: EventEmitter<Product>;

  selectedProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.selectedProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.selectedProduct) { return false; }

    return product.sku === this.selectedProduct.sku;
  }

  ngOnInit() {
  }

}
