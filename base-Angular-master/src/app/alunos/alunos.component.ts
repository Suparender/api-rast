import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../service/servicos.service';
import { AlunoModel } from './aluno.model';
import { NgModel } from '@angular/forms';
ServicosService
AlunoModel
NgModel
@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  aluno: AlunoModel = new AlunoModel()

  alunos: Array<any> = new Array()
  
  constructor(private alunosService: ServicosService) {}

  ngOnInit(): void {
    this.Listar()
  }

  Listar() {
    this.alunosService.listarAlunos().subscribe( alunos => {
      this.alunos = alunos
    }, err => {
      console.log("Erro ao listar alunos", err)
    } )
  } 

  CadastrarAluno() {
    console.log(this.aluno)
    this.alunosService.Cadastrar(this.aluno).subscribe( a =>{
      this.aluno = new AlunoModel()
      this.Listar()
    }, err => {
      console.log("Erro ao cadastrar alunos", err)
    } )
  }

  AtualizarAluno(id: number) {
    this.alunosService.Atualizar(id, this.aluno).subscribe( a =>{
      this.aluno = new AlunoModel()
      this.Listar()
    }, err => {
      console.log("Erro ao atualizar alunos", err)
    } )
  }

  ExcluirAluno(id: number) {
    this.alunosService.Excluir(id).subscribe( a =>{
      this.aluno = new AlunoModel()
      this.Listar()
    }, err => {
      console.log("Erro ao excluir alunos", err)
    } )
  }

}
