import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="services">
      <div class="container">
        <h2 class="section-title">خدماتنا</h2>
        <div class="service-grid">
          <div class="service-card" *ngFor="let service of services">
            <i [class]="service.icon"></i>
            <h3>{{ service.title }}</h3>
            <p>{{ service.time }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      padding: 5rem 0;
      background-color: #fff;
    }

    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: var(--primary-color);
    }

    .service-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .service-card {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 2rem;
      text-align: center;
      transition: transform 0.3s ease;
    }

    .service-card:hover {
      transform: translateY(-5px);
    }

    .service-card i {
      font-size: 3rem;
      color: var(--secondary-color);
      margin-bottom: 1rem;
    }
  `]
})
export class ServicesComponent {
  services = [
    { icon: 'fas fa-church', title: 'قداس الأحد', time: '٩:٠٠ صباحاً و ١١:٠٠ صباحاً' },
    { icon: 'fas fa-book-reader', title: 'دراسة الكتاب المقدس', time: 'الأربعاء ٧:٠٠ مساءً' },
    { icon: 'fas fa-hands-helping', title: 'خدمة المجتمع', time: 'السبت ١٠:٠٠ صباحاً' }
  ];
}