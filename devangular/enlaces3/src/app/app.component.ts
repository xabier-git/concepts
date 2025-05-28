import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 👈 importar RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterModule], // 👈 incluir RouterModule
})
export class AppComponent {
  title = 'enlaces3';
}
