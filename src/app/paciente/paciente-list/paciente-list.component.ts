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
  selectedPaciente!: Paciente;
  selected: Boolean = false;

  
  constructor(private pacienteService: PacienteService) { }

  getMenoresDeEdadCount(): number {
    return this.paciente.filter(p => p.edad < 18).length;
  }

  onSelect(paciente: Paciente): void {
    this.selectedPaciente = paciente;
    this.selected = true;
  }
  
  ngOnInit() {
    this.pacienteService.getPacientes()
      .subscribe(data => {
        this.paciente = data;
      });
  }

}