import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-action',
  templateUrl: './field-action.component.html',
  styleUrls: ['./field-action.component.scss'],
})
export class FieldActionComponent implements OnInit {
  constructor() {}

  civel = ['Direitos Individuais', 'Direitos Coletivos', 'Contratos', 'Consumidor'];
  familia = ['Divórcio', 'União Estável', 'Pensão Alimentícia', 'Partilha de Bens'];
  sucessoes = ['Inventários e Arrolamentos', 'Planejamento Sucessório', 'Doação de Bens', 'Testamento'];
  digital = ['Herança Digital', 'Direitos Relativos a Redes Sociais', 'Proteção de Dados', 'Direitos Autorais de Bens Digitais'];

  ngOnInit(): void {}
}
