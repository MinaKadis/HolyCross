import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="events" class="events">
      <div class="container">
        <h2 class="section-title">الأحداث القادمة</h2>
        <div class="event-grid">
          <div class="event-card" *ngFor="let event of events">
            <div class="event-image" [style.backgroundImage]="'url(' + event.image + ')'"></div>
            <div class="event-content">
              <h3>{{ event.title }}</h3>
              <p class="event-date">{{ event.date }}</p>
              <p>{{ event.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .events {
      padding: 5rem 0;
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

    .event-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .event-card {
      background-color: #fff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .event-image {
      height: 200px;
      background-size: cover;
      background-position: center;
    }

    .event-content {
      padding: 1.5rem;
    }

    .event-content h3 {
      margin-bottom: 0.5rem;
    }

    .event-date {
      color: var(--primary-color);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
  `]
})
export class EventsComponent {
  events = [
    {
      title: 'ليلة التسبيح الصيفية',
      date: '١٥ يونيو ٢٠٢٤',
      description: 'انضم إلينا في ليلة من التسبيح والعبادة',
      image: 'https://source.unsplash.com/random/400x200/?worship'
    },
    {
      title: 'حملة الطعام المجتمعية',
      date: '١ يوليو ٢٠٢٤',
      description: 'ساعدنا في خدمة مجتمعنا المحلي من خلال التبرع بالمواد الغذائية.',
      image: 'https://source.unsplash.com/random/400x200/?community'
    }
  ];
}