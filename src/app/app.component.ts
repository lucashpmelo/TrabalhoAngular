import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrabalhoAngular';
  texto : string = 'Universidade Tecnológica Federal do Paraná';
  lat: number = -25.301284;
  lng: number = -54.114391;
  zoom: number = 15;
}
