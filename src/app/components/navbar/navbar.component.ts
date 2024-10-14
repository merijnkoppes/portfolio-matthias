import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement;

    if (this.isMobileMenuOpen) {
      const menuHeight = mobileMenu.scrollHeight; // Get the height of the menu items
      mobileMenu.style.height = `${menuHeight}px`; // Set the height to the scroll height
    } else {
      mobileMenu.style.height = '0'; // Collapse the menu
    }
  }
}
