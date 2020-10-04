import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: 0
  }

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.readById(this.route.snapshot.paramMap.get('id')).subscribe( product => {
      this.product = product
    })
  }

  cancel(): void {
    this.router.navigateByUrl('products')
  }

  delete(): void {
    this.productService.delete(this.product.id).subscribe( () => {
      this.productService.showMessage('Produto excluído!')
      this.router.navigateByUrl('products')
    })
  }

}
