import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-meu-primeiro',
  templateUrl: './meu-primeiro.component.html',
  styleUrls: ['./meu-primeiro.component.scss']
})
export class MeuPrimeiroComponent implements OnInit {

  titulo = 'Treinamento Angular';
  curso = 'Java';

  series = [
    {nome : 'peakyblinders',ano:2013, canal : 'netflix' },
    {nome : 'the boys',ano:2019, canal : 'amazon-prime' },
    {nome : 'breaking bed',ano:2008, canal : 'amazon-prime' }
  ];

  hoje = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

  getNome(){
    return 'Yuri';
  }

  isDisabled(){
    return false;
  }

  onButtonClick(){
    this.titulo = "Outro Treinamento";
  }

  onInput(digitei){
    this.titulo = digitei;
  }

  getClass(){
    return 'btn btn-success';
  }

  getBackgroundColor(){
    return 'yellow';
  }
}
