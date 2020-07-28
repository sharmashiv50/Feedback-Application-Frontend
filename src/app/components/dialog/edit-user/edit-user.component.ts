import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdatefeedbackService } from '../../../service/updatefeedback/updatefeedback.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  addNewFeedBack: FormGroup;
  submitted = false;
  yesOrNoselection=['Yes','No'];
  ratingSelection=['1','2','3','4','5'];
  proficiency=['Easy','Medium','Hard'];
  empid='';
  empname=''


  constructor(@Inject(DOCUMENT) private document: Document,@Inject(MAT_DIALOG_DATA) public data: any,private formBuilder: FormBuilder,private updatefeedbackservice: UpdatefeedbackService) { }
  // convenience getter for easy access to form fields
  get f() { return this.addNewFeedBack.controls; }

  ngOnInit(): void {
    this.empid =sessionStorage.getItem('authenticaterUser');
    this.empname =sessionStorage.getItem('authenticaterUserName');

    this.addNewFeedBack = this.formBuilder.group({
      learner_name: ['', Validators.required],
      learner_emp_id: ['', Validators.required],
      course_name : ['', Validators.required],
      is_content_relevant  : ['', Validators.required],
      is_relevant_content_hands_on  : ['', Validators.required],
      proficiency_level  : ['', Validators.required],
      rating_of_content  : ['', Validators.required],
      rating_of_hands_on  : ['', Validators.required],
      comments  : ['', Validators.required]
  });
  }

  onReset() {
    this.submitted = false;
    this.addNewFeedBack.reset();
}
  
//Update feedback in databse
  onSubmit() {
    this.submitted = true;
    console.log(this.addNewFeedBack.value)
    // stop here if form is invalid
    if (this.addNewFeedBack.invalid) {
     alert("Please fill all required fields");
        return;
    }
    else
    {
      let resp = this.updatefeedbackservice.Update(this.data.dataKey.id,this.addNewFeedBack.value);
      resp.subscribe(
        data=>{ 
           },
        error=>
          {
          }
         )
    }  
    this.document.location.reload();
  };
  }
