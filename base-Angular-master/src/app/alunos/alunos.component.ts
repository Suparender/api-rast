import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../service/servicos.service';
import { AlunoModel } from './aluno.model';
ServicosService
AlunoModel
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

}
