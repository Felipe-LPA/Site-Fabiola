import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-action',
  templateUrl: './field-action.component.html',
  styleUrls: ['./field-action.component.scss'],
})
export class FieldActionComponent implements OnInit {
  constructor() {}

  civel = ['algo1', 'algo2', 'algo3', 'algo4'];
  familia = ['algo1', 'algo2', 'algo3', 'algo4'];
  sucessoes = ['algo1', 'algo2', 'algo3', 'algo4'];
  digital = ['algo1', 'algo2', 'algo3', 'algo4'];

  ngOnInit(): void {}
}
