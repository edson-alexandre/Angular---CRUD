import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  
  product: Product = {
    id: 0,
    name: '',
    price: 0
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe( product => {
      this.product = product
    })
  }

  cancel(): void {
    this.router.navigate(['products']);
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(product => {
      this.productService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(['products']);
    })
  }

}
