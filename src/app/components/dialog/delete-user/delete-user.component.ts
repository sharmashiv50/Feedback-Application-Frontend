import { Component, OnInit,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeletefeedbackService } from '../../../service/deletefeedback/deletefeedback.service';


@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,@Inject(DOCUMENT) private document: Document,private deletefeedbackservice: DeletefeedbackService) { }

  ngOnInit(): void {

  }

  //Delete feedback from database
  onDelete()
  {
    if(confirm("Are you sure to delete ")) {
      let resp = this.deletefeedbackservice.Delete(this.data.dataKey);
      resp.subscribe(
        data=>{
          alert('FeedBack Deleted')
        },
        error=>
          {
            alert('FeedBack not Deleted')
          }
         )
      this.document.location.reload();
    }
  }
}
