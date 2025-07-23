import { Component , OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  constructor() {
    console.log("HomeComponent.constructor()");
  }

  ngOnDestroy() {
    console.log("HomeComponent.ngOnDestroy()");
  }
}
