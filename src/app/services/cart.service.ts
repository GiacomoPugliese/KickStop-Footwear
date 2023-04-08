import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<any>([]);
  cartItems$ = this.cartItems.asObservable();
  private storageKey = 'cart-items';

  constructor(private db: AngularFireDatabase, private authService: AuthService) {
    
    if(this.authService.loggedIn()){
      this.loadCartFromDB();
    }
    else{
      this.loadCartFromLocalStorage();
    }
  }

  loadCartFromLocalStorage() {
    const storedItems = localStorage.getItem(this.storageKey);
    if (storedItems) {
      this.cartItems.next(JSON.parse(storedItems));
    }
  }

  saveCartToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cartItems.value));
  }

  loadCartFromDB() {
    const userId = this.authService.getUserId();
    if (userId) {
      this.db
        .list(`carts/${userId}`)
        .valueChanges()
        .subscribe(items => {
          this.cartItems.next(items);
        });
    }
  }

  saveCartToDB() {
    const userId = this.authService.getUserId();
    if (userId) {
      this.db.object(`carts/${userId}`).set(this.cartItems.value);
    }
  }

  addToCart(item: any) {
    let items = this.cartItems.value;
    items.push(item);
    this.cartItems.next(items);

    if (this.authService.loggedIn()) {
      this.saveCartToDB();
    } else {
      this.saveCartToLocalStorage();
    }
  }

  getCartItems() {
    this.loadCartFromDB();
    return this.cartItems.asObservable();
  }

  removeFromCart(item: any) {
    let items = this.cartItems.value;
    let index = items.findIndex((cartItem: any) => cartItem.id === item.id);
    if (index > -1) {
      items.splice(index, 1);
      this.cartItems.next(items);

      if (this.authService.loggedIn()) {
        this.saveCartToDB();
      } else {
        this.saveCartToLocalStorage();
      }
    }
  }

  clearCart() {
    this.cartItems.next([]);

    if (this.authService.loggedIn()) {
      this.saveCartToDB();
    } else {
      this.saveCartToLocalStorage();
    }
  }
  
  checkout() {
    alert('Thank you for shopping with us!');
  }  
}
