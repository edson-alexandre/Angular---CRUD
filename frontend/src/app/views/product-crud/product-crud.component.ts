import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/templates/header/header.service';
import { HeaderData } from '../../components/templates/header/header-data-model';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) { 
    this.headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: 'products'
    }
  }

  ngOnInit(): void {    
  }

  navigateToProductCreate(): void {
    this.router.navigate(['products/create'])
  }

}
