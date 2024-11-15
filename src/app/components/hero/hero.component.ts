import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home" class="hero">
      <div class="hero-content">
        <h1>أهلاً بكم في كنيسة الصليب المقدس</h1>
        <p>اختبر الإيمان والمحبة والمجتمع</p>
        <a href="#services" class="btn">انضم إلينا هذا الأحد</a>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://source.unsplash.com/random/1600x900/?church');
      background-size: cover;
      background-position: center;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #fff;
    }

    .hero-content h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }

    .hero-content p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }

    .btn {
      display: inline-block;
      background-color: var(--primary-color);
      color: #fff;
      padding: 0.75rem 1.5rem;
      text-decoration: none;
      border-radius: 30px;
      transition: background-color 0.3s ease;
    }

    .btn:hover {
      background-color: #2980b9;
    }

    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2.5rem;
      }
    }
  `]
})
export class HeroComponent {}