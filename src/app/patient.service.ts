import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';
 
@Injectable()
export class PatientService {
 
  private patientsUrl: string;
 
  constructor(private http: HttpClient) {
    this.patientsUrl = 'http://localhost:8080/patients';
  }
 
  public findAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsUrl);
  }
 
  public save(patient: Patient) {
    return this.http.post<Patient>(this.patientsUrl, patient);
  }

  public getPatient(id: number): Observable<any>{
    return this.http.get<Patient>(this.patientsUrl + '/${id}');
  }

  public updatePatient(id: number, value: any): Observable<Object> {
    return this.http.put<Patient>(this.patientsUrl + '/${id}', value);
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete<Patient>(this.patientsUrl + '/{id}');
  }
}
