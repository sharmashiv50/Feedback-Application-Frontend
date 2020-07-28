import { Component, OnInit,ViewChild ,Inject} from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { CreatefeedbackService } from '../../../service/createfeedback/createfeedback.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  addNewFeedBack: FormGroup;
  errorMessage;
  successMessage;
  invalidUser=false;
  
  
  constructor(@Inject(DOCUMENT) private document: Document,private formBuilder: FormBuilder,private createfeedbackservice: CreatefeedbackService) { }
  yesOrNoselection=['Yes','No'];
  ratingSelection=['1','2','3','4','5'];
  proficiency=['Easy','Medium','Hard'];
  selectedOption : string = 'No';
  submitted = false;
  empid='';empname='';

  // convenience getter for easy access to form fields
 get f() { return this.addNewFeedBack.controls; }

  ngOnInit(): void {
   this.empid =sessionStorage.getItem('authenticaterUser');
   this.empname =sessionStorage.getItem('authenticaterUserName')

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

//Reset fields for add new feedback
  onReset() {
    this.submitted = false;
    this.addNewFeedBack.reset();
}
  
//Save the new feedback in database
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.addNewFeedBack.invalid) {
     alert("Please fill all required fields");
        return;
    }
    else
    {
      let resp = this.createfeedbackservice.Create(this.addNewFeedBack.value);
      resp.subscribe(
        data=>{ 
          console.log(data);
          if(data==="FeedBack Added")
            {
            }},
        error=>
          {
          }
         )
    }  
    this.document.location.reload();
  };
  
}