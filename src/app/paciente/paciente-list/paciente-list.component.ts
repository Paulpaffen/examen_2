import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

  paciente: Array<Paciente> = [];
  
  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
    this.pacienteService.getPacientes()
      .subscribe(data => {
        this.paciente = data;
      });
  }

}