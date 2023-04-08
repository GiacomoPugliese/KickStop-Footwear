import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(
    private orderDetailsService: OrderDetailsService,
    private cartService: CartService
  ) { }

  sneakerData: any;
  cartItems: any;

  ngOnInit(): void {
    this.sneakerData = this.orderDetailsService.sneakerDetails;
    this.cartItems = this.cartService.getCartItems();
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
    
    // create container and card elements
    const container = document.createElement('div');
    const card = document.createElement('div');

    // set container styles
    container.style.position = 'fixed';
    container.style.color = 'white';
    container.style.top = '10%';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    
    // set card styles
    card.style.backgroundColor = '#40c464';
    card.style.paddingTop = '10px';
    card.style.paddingLeft = '10px';
    card.style.paddingRight = '10px';
    card.style.borderRadius = '5px';
    card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    card.style.textAlign = 'center';
    
    // set card content
    // set card content
    card.innerHTML = '<h1><i class="bi bi-check-circle-fill text-success"></i> Item added to cart!</h1>';


    // append card to container
    container.appendChild(card);

    // append container to the body
    document.body.appendChild(container);

    // remove container after 2 seconds
    setTimeout(() => {
        container.remove();
    }, 1000);

    this.cartItems = this.cartService.getCartItems();
  }

}
