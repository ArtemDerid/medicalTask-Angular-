import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientService } from './patient.service';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { CommentListComponent } from './comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientFormComponent,
    PatientDetailsComponent,
    UpdatePatientComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
