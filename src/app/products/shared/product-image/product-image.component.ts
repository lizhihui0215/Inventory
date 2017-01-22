import {Component, OnInit, Input, Host, HostBinding} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css'],
})
export class ProductImageComponent implements OnInit {

  @Input() product: Product;

  @HostBinding() class = 'ui small image';

  constructor() { }

  ngOnInit() {
  }

}
