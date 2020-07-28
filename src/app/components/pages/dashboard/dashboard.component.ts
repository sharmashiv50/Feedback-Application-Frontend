
import {Component} from '@angular/core';
import {AddUserComponent} from 'src/app/components/dialog/add-user/add-user.component';
import {DeleteUserComponent} from 'src/app/components/dialog/delete-user/delete-user.component';
import {EditUserComponent} from 'src/app/components/dialog/edit-user/edit-user.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ActivatedRoute,Router } from '@angular/router';
import {AuthenticationService} from '../../../service/authentication/authentication.service';
import { DashboardService } from '../../../service/dashboard/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  };

  ELEMENT_DATA = [];

  constructor(public dialog : MatDialog,private route:ActivatedRoute,
              public authenticate:AuthenticationService,
              private router:Router,
              private dashboardService:DashboardService
              ) { }
  userid = '';
  //username='';

  //Default function to run on page load
  ngOnInit() {
    this.userid=sessionStorage.getItem('authenticaterUser');
    //this.username=sessionStorage.getItem('authenticaterUserName');
    this.refreshDashboard();
  }

  //Load data from database on page load
  refreshDashboard()
  {
    this.dashboardService.retrieveDashboard(this.userid).subscribe(
      response => {
        //console.log(response);
        this.ELEMENT_DATA=response;
      }
    )
  };

  //Logout from current session
  LogOut()
  {
    this.authenticate.logout();
    this.router.navigate(['login']);
  };

    //Open new window to create new feedback
  onCreate() {
    const dialogCong = new MatDialogConfig();
    dialogCong.disableClose = true;
    dialogCong.autoFocus = true;
    dialogCong.width = "70%";
    this.dialog.open(AddUserComponent,dialogCong);
  };

  //Open new window to update existing feedback
  onEdit(feedback) {
    let dialogCong = this.dialog.open(EditUserComponent, {
      disableClose : true,
      autoFocus :true,
      width : "70%",
        data: {
          dataKey: feedback,
        }
      });
  };

   //Open new window to delete existing feedback
  onDelete(id) {
    let dialogCong = this.dialog.open(DeleteUserComponent, {
    disableClose : true,
    autoFocus :true,
    width : "70%",
      data: {
        dataKey: id,
      }
    });
  };
};
