import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];
  private servEditora: ControleEditoraService;
  private servLivro: ControleLivrosService;

  constructor(
    servEditora: ControleEditoraService,
    servLivro: ControleLivrosService
  ) {
    this.servEditora = servEditora; 
    this.servLivro = servLivro; 
  }

  excluir = (codigo:number) => {
    this.servLivro.excluir(codigo);
    this.livros = this.servLivro.obterLivros();
  }

  obterNome = (codEditora:number) => {
    return this.servEditora.getNomeEditora(codEditora);
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivro.obterLivros();
  }
}
