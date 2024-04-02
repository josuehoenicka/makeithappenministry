import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dexcarriados',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass],
  templateUrl: './dexcarriados.component.html',
  styleUrl: './dexcarriados.component.css'
})
export class DexcarriadosComponent {
  private formspreeKey = 'https://formspree.io/f/xwkjrldq';
  section!: any;
  indiceSeleccionado: number | null = null;
  nombre!: string;
  contacto!: string;
  mensaje!: string;
  select = 'Cualquiera';
  opciones = [
    {
      image: '../../../assets/profiles/rosmery.png',
      name: 'Hna. Rosmery',
      nationality: '../../../assets/countries/co.png',
      valor: 1,
      id: 1,
      genre: 'w'
    },
    {
      image: '../../../assets/profiles/jose.png',
      name: 'Pastor José',
      nationality: '../../../assets/countries/co.png',
      valor: 2,
      id: 2,
      genre: 'm'
    },
    {
      image: '../../../assets/profiles/carolina.png',
      name: 'Pastora Carolina',
      nationality: '../../../assets/countries/ve.png',
      valor: 3,
      id: 3,
      genre: 'w'
    },
    {
      image: '../../../assets/profiles/leandro.png',
      name: 'Pastor Leandro',
      nationality: '../../../assets/countries/ve.png',
      valor: 4,
      id: 4,
      genre: 'm'
    },
    {
      image: '../../../assets/profiles/silvia.png',
      name: 'Pastora Silvia',
      nationality: '../../../assets/countries/ar.png',
      valor: 5,
      id: 5,
      genre: 'w'
    },
    {
      image: '../../../assets/profiles/terranova.png',
      name: 'Hno. Fernando',
      nationality: '../../../assets/countries/us.png',
      valor: 6,
      id: 6,
      genre: 'm'
    },
  ];

  constructor(private router: Router, private http: HttpClient) {
    // setInterval(() => {
    //   this.nextImage();
    // }, 4000);
  }

  images: string[] = [
    '../../../../assets/slider/1.jpg',
    '../../../../assets/slider/2.jpg',
    '../../../../assets/slider/3.jpg'
  ];
  currentIndex = 0;

  ngOnInit(): void {
    // setInterval(() => {
    //   this.nextImage();
    // }, 4000);
  }

  selectPerson(opcion: any, index: number) {
    this.indiceSeleccionado = index;
    console.log(opcion);
  }

  limpiarFormulario() {
    this.nombre = '';
    this.contacto = '';
    this.mensaje = '';
    this.select = 'Cualquiera';
    const opciones = document.getElementsByName('opciones');
    opciones.forEach((opcion) => {
      const inputRadio = opcion as HTMLInputElement;
      inputRadio.checked = false;
    });
  }

  enviarFormulario() {
    if (this.nombre && this.contacto) {
      this.http
        .post(this.formspreeKey, {
          Nombre: this.nombre,
          Contacto: this.contacto,
          Mensaje: this.mensaje,
          Hablar_con: this.select,
        })
        .subscribe(
          (data) => {
            this.limpiarFormulario();
            this.router.navigate(['/main']).then(() => {
              window.location.reload();
              window.scrollTo(0, 0);
            });
            alert('¡El mensaje ha sido enviado con éxito!');
          },
          (error) => {
            alert(
              '¡Hubo un error! \nPor favor, envie un mensaje personalizado o intente más tarde'
            );
          }
        );
    } else {
      alert(
        '¡Oh no! Hay campos requeridos por completar. \nPor favor, escribe un nombre y/o medio de contacto'
      );
    }
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
