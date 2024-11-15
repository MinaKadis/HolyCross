import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer id="contact">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>اتصل بنا</h3>
            <p>الكشح</p>
            <p>هاتف: ٧٨٩٠-٤٥٦-١٢٣</p>
            <p>البريد الإلكتروني: info&#64;holycross.com</p>
          </div>
          <div class="footer-section">
            <h3>روابط سريعة</h3>
            <ul>
              <li><a href="#home">الرئيسية</a></li>
              <li><a href="#services">خدماتنا</a></li>
              <li><a href="#events">الأحداث</a></li>
              <li><a href="#contact">اتصل بنا</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>تواصل معنا</h3>
            <div class="social-links">
              <a href="#" aria-label="فيسبوك"><i class="fab fa-facebook"></i></a>
              <a href="#" aria-label="تويتر"><i class="fab fa-twitter"></i></a>
              <a href="#" aria-label="انستغرام"><i class="fab fa-instagram"></i></a>
              <a href="#" aria-label="يوتيوب"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #333;
      color: #fff;
      padding: 3rem 0;
    }

    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .footer-section {
      flex: 1;
      margin-bottom: 2rem;
      min-width: 200px;
    }

    .footer-section h3 {
      margin-bottom: 1rem;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
    }

    .footer-section ul li a {
      color: #fff;
      text-decoration: none;
      padding: 0.5rem 0;
      display: block;
    }

    .social-links a {
      color: #fff;
      font-size: 1.5rem;
      margin-left: 1rem;
      transition: color 0.3s ease;
    }

    .social-links a:hover {
      color: var(--primary-color);
    }

    @media (max-width: 768px) {
      .footer-content {
        flex-direction: column;
      }
    }
  `]
})
export class FooterComponent {}