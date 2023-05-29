import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../service/servicos.service';
ServicosService

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  constructor(private alunosService: ServicosService) {}

  ngOnInit(): void {
    
  }

  Listar() {
    this.alunosService.listarAlunos().subscribe()
  } 

}
