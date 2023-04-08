import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private authService: AuthService) { }

  cartItems: any;

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.cartService.cartItems$.subscribe(items => {
          this.cartItems = items;
        });
      }
    });
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  getTotal() {
    return this.cartItems.reduce((total: any, item: any) => total + item.sneakerPrice, 0);
  }

  checkout() {
    // create container and card elements
    const container = document.createElement('div');
    const card = document.createElement('div');
    
    // set container styles
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    
    // set card styles
    card.style.backgroundColor = '#fff';
    card.style.padding = '20px';
    card.style.borderRadius = '5px';
    card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    card.style.textAlign = 'center';
    card.style.position = 'relative'; // set position to relative
    
    // create close button
    const closeButton = document.createElement('button');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px';
    closeButton.style.right = '5px';
    closeButton.style.backgroundColor = 'transparent';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '20px';
    closeButton.style.cursor = 'pointer';
    closeButton.innerHTML = '&times;';
    
    // set close button action
    closeButton.addEventListener('click', () => {
      container.remove();
    });
    
    // create continue shopping button
    const continueButton = document.createElement('button');
    continueButton.style.backgroundColor = 'blue';
    continueButton.style.color = 'white';
    continueButton.style.padding = '10px';
    continueButton.style.borderRadius = '5px';
    continueButton.style.border = 'none';
    continueButton.style.fontSize = '16px';
    continueButton.style.cursor = 'pointer';
    continueButton.innerHTML = 'Continue Shopping';
    
    // set continue button action
    continueButton.addEventListener('click', () => {
      container.remove();
    });
    
    // set card content
    card.innerHTML = '<h2>Order Received!<\h2><h5>Thank you for shopping with us.<\h5><h5>Your order should arrive in 3-4 business days.</h5>';
    
    // append close button, continue button, and card to container
    card.appendChild(closeButton);
    card.appendChild(continueButton);
    container.appendChild(card);
    
    // append container to the body
    document.body.appendChild(container);
  }
  
}