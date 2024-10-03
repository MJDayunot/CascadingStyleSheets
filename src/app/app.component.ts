import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BtsComponent} from "./component/bts/bts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BtsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CSSElements';
}
