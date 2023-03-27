import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCV } from '../model/userCV.model';
import { PdfServiceService } from '../services/pdf-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userCVFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private pdfService: PdfServiceService,
    private router: Router) { }

  ngOnInit(): void {

    this.userCVFormGroup = this.formBuilder.group({
      fullName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      role: new FormControl('', [Validators.required, Validators.minLength(2)]),
      experience: new FormControl('', [Validators.required, Validators.minLength(2)]),
      typeOfProjects: new FormControl('', [Validators.required, Validators.minLength(2)]),
      technologyStack: new FormControl('', [Validators.required, Validators.minLength(2)]),
      educationList: this.formBuilder.array([this.getEducationControl()]),
      languages: new FormControl('', [Validators.required, Validators.minLength(2)]),
      detailedExperienceList: this.formBuilder.array([this.getDetailedExperienceControl()]),
    })
  }
  
  private getEducationControl(): FormGroup {  
    return this.formBuilder.group({
      school:'',
      description:'',
      period:''
    })
  }

  private getDetailedExperienceControl(): FormGroup {  
    return this.formBuilder.group({
      jobRole:'',
      company:'',
      timePeriod:''
    })
  }

  public get educationList() {
    return <FormArray>this.userCVFormGroup.get('educationList');
  }

  public get detailedExperienceList() {
    return <FormArray>this.userCVFormGroup.get('detailedExperienceList');
  }

  public addEducation(): void{
    this.educationList.push(this.getEducationControl());
  }

  public removeEducation(i:number):void {
    this.educationList.removeAt(i);
  }

  public addExperience(): void{
    this.detailedExperienceList.push(this.getDetailedExperienceControl());
  }

  public removeExperience(i:number):void {
    this.detailedExperienceList.removeAt(i);
  }

  generateFromOldTemplate() {

      let userCV = new UserCV();
      userCV.fullName = this.userCVFormGroup.controls['fullName'].value;
      userCV.role =this.userCVFormGroup.controls['role'].value;
      userCV.experience = this.userCVFormGroup.controls['experience'].value;
      userCV.typeOfProjects = this.userCVFormGroup.controls['typeOfProjects'].value;
      userCV.technologyStack = this.userCVFormGroup.controls['technologyStack'].value;
      userCV.educationList = this.userCVFormGroup.controls['educationList'].value;
      userCV.languages = this.userCVFormGroup.controls['languages'].value;
      userCV.detailedExperienceList = this.userCVFormGroup.controls['detailedExperienceList'].value;
      
      console.log(userCV);

      return this.pdfService.generate(userCV).subscribe((response) => {

        console.log(response);

        let file = new Blob([response.body], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"});
        let newVariable: any = window.navigator;

        if (newVariable && newVariable.msSaveOrOpenBlob) {
          const name = "test";
          newVariable.msSaveOrOpenBlob(file, name);
        } else {
          const fileUrl = URL.createObjectURL(file);
          const child = window.open(fileUrl);
        }
      });
  }

  generateFromNewTemplate() {

    let userCV = new UserCV();
    userCV.fullName = this.userCVFormGroup.controls['fullName'].value;
    userCV.role =this.userCVFormGroup.controls['role'].value;
    userCV.experience = this.userCVFormGroup.controls['experience'].value;
    userCV.typeOfProjects = this.userCVFormGroup.controls['typeOfProjects'].value;
    userCV.technologyStack = this.userCVFormGroup.controls['technologyStack'].value;
    userCV.educationList = this.userCVFormGroup.controls['educationList'].value;
    userCV.languages = this.userCVFormGroup.controls['languages'].value;
    userCV.detailedExperienceList = this.userCVFormGroup.controls['detailedExperienceList'].value;
    
    console.log(userCV);

    return this.pdfService.generatePdf(userCV).subscribe((response) => {

      console.log(response);

      let file = new Blob([response.body], { type: "application/pdf"});
      let newVariable: any = window.navigator;

      if (newVariable && newVariable.msSaveOrOpenBlob) {
        const name = "test";
        newVariable.msSaveOrOpenBlob(file, name);
      } else {
        const fileUrl = URL.createObjectURL(file);
        const child = window.open(fileUrl);
      }
    });
}

}
