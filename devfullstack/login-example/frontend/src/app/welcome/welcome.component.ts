import { Component, OnDestroy  } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnDestroy {
  constructor() {
    console.log("WelcomeComponent.constructor()");
  }

  ngOnDestroy() {
    console.log("WelcomeComponent.ngOnDestroy()");
  }

}
