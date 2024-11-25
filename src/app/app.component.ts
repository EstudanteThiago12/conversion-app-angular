import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConverterMoedaComponent } from './converter-moeda/converter-moeda.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConverterMoedaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'conversion-app-test';
}
