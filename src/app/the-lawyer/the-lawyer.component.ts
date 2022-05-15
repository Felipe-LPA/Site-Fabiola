import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-lawyer',
  templateUrl: './the-lawyer.component.html',
  styleUrls: ['./the-lawyer.component.scss'],
})
export class TheLawyerComponent implements OnInit {
  constructor() {}

  bodyText: string[] = [
    'Advogada inscrita na Ordem dos Advogados do Brasil com atuação em São Paulo sob o nº 463.560. Formada pela Universidade Paulista, hoje, atuo nas áreas de Direito Digital e Cível.',
    'Desde criança me identifiquei com a profissão, apesar de não ter nenhum familiar na área. Enquanto outras crianças brincavam de boneca, carrinho e futebol, eu gostava de encenar os tribunais baseados nos filmes americanos que assistia. Por isso não foi surpresa a escolha pelo Direito, onde me apaixonei pelos ensinamentos e pelo estudo.',
    'O tempo na universidade foi muito bem aproveitado, convivi com excelentes profissionais, os quais me ensinaram e me inspiraram. Tive a oportunidade de fazer uma iniciação científica na qual me aprofundei no tema das Migrações Ambientais e suas consequências jurídicas e sociais. E escrevi meu TCC, no qual defendi a tese da viabilidade jurídica da Herança Digital, sob uma mirada humanística. Ele baseou meu primeiro livro publicado. O qual pode ser adquirido tanto no site da editora Thoth como na Amazon.',
    'Procuro basear minhas escolhas profissionais e pessoais nos ensinamentos como o acima de Roosevel, com uma visão humanista para que o Direito possa encontrar a Justiça.'
  ];

  ngOnInit(): void {}
}
