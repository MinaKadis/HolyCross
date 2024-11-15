import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <nav class="container">
        <div class="logo">كنيسة الصليب المقدس</div>
        <ul class="nav-links" [class.active]="isMenuOpen">
          <li><a href="#home">الرئيسية</a></li>
          <li><a href="#services">خدماتنا</a></li>
          <li><a href="#events">الأحداث</a></li>
          <li><a href="#contact">اتصل بنا</a></li>
        </ul>
        <div class="menu-toggle" (click)="toggleMenu()">
          <i class="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    header {
      background-color: #fff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      position: fixed;
      width: 100%;
      z-index: 1000;
    }

    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--primary-color);
    }

    .nav-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-links li a {
      color: var(--text-color);
      text-decoration: none;
      padding: 0.5rem 1rem;
      transition: color 0.3s ease;
    }

    .nav-links li a:hover {
      color: var(--primary-color);
    }

    .menu-toggle {
      display: none;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      .menu-toggle {
        display: block;
      }

      .nav-links {
        display: none;
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 100%;
        right: 0;
        background-color: #fff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }

      .nav-links.active {
        display: flex;
      }

      .nav-links li {
        text-align: center;
      }

      .nav-links li a {
        display: block;
        padding: 1rem;
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}