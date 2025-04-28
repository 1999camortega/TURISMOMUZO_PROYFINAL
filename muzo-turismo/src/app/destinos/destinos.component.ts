import { Component, OnInit } from '@angular/core';
import { DestinosService } from '../destinos.service';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.css']
})
export class DestinosComponent implements OnInit {

  destinos: any[] = [];

  constructor(private destinosService: DestinosService) { }

  ngOnInit(): void {
    this.getDestinos();
  }

  getDestinos(): void {
    this.destinosService.getDestinos().subscribe(
      (data) => {
        this.destinos = data;
      },
      (error) => {
        console.error('Error al obtener destinos', error);
      }
    );
  }
}
