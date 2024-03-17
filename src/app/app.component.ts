import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RadioComponent } from './radio/radio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RadioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'makeithappenministry';
}
