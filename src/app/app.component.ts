import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'makeithappenministry';
  ripple!: boolean;
  count = 0;
  previousUrl!: string;
  inputStyle = "outlined";

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.ripple = true;

    /* TRADUCE LOS CALENDARS A ESPAÑOL */
    this.primengConfig.setTranslation({
      dayNames: [
        'DOMINGO',
        'LUNES',
        'MARTES',
        'MIÉRCOLES',
        'JUEVES',
        'VIERNES',
        'SÁBADO',
      ],
      dayNamesShort: ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'],
      dayNamesMin: ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SÁ'],
      monthNames: [
        'ENERO',
        'FEBRERO',
        'MARZO',
        'ABRIL',
        'MAYO',
        'JUNIO',
        'JULIO',
        'AGOSTO',
        'SEPTIEMBRE',
        'OCTUBRE',
        'NOVIEMBRE',
        'DICIEMBRE',
      ],
      monthNamesShort: [
        'ENE',
        'FEB',
        'MAR',
        'ABR',
        'MAY',
        'JUN',
        'JUL',
        'AGO',
        'SEP',
        'OCT',
        'NOV',
        'DIC',
      ],
      today: 'Hoy',
      clear: 'Limpiar',
    });
  }
}
