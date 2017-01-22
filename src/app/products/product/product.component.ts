import {Component, OnInit, Input} from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  host: {'class': 'item'},
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
