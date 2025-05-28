import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

interface Profile {
  nombre: string;
  nickname: string;
  tieneNovio: boolean;
  equipoActual: string;
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ListadoComponent implements OnInit {
  profiles: Profile[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProfilesList().subscribe({
      next: (data: any[]) => {
        console.log('Data fetched from API:', data);
        this.profiles = data.map(item => ({
          nombre: item.nombre,
          nickname: item.nickname,
          tieneNovio: item.tieneNovio,
          equipoActual: item.equipoActual
        }));
      },
      error: (err) => {
        console.error('Error fetching profiles:', err);
      }
    });
  }
}
