import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: false, showIndicators: true } }
  ]
})
export class HomeComponent {
  images = [
    { id: 1, url: 'assets/c4c60bbf-9ebc-45f8-acc9-834b18f2a26f.jpg' },
    { id: 2, url: 'assets/Captura de pantalla 2023-07-30 131554.png' },
    { id: 3, url: 'assets/videojuego-nintendo-gameboy-advance-zelda-a-link-to-the-past-four-swords.jpg' }
  ];
}
