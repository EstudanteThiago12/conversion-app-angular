import { Component } from '@angular/core';
import { ConversorService } from '../conversor-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter-moeda',
  imports: [FormsModule],
  templateUrl: './converter-moeda.component.html',
  styleUrl: './converter-moeda.component.css'
})
export class ConverterMoedaComponent {

  opcaoEscolhida: String = '';
  valor: number = 0;
  resultado: number = 0;

  constructor(private conversorService: ConversorService) {}

  async calcularConversao() {
    let valorMoeda = 0;
    await this.conversorService.converterMoeda(this.opcaoEscolhida)
      .then(response => {
        const object = this.opcaoEscolhida.slice(0, 3) + this.opcaoEscolhida.slice(4, 7);
        valorMoeda = response.data[object].high;
      });

    this.resultado = this.valor * valorMoeda;
  }

}
