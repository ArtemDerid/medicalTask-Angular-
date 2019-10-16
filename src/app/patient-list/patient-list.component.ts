import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Observable<Patient[]>;

  constructor(private patientService: PatientService, 
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.patients = this.patientService.findAll();
  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  patientDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updatePatient(id: number){
    this.router.navigate(['update', id]);
  }

}
