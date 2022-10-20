import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/shared/service/data.service';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private dataApi:DataService,
              private _snackBar: MatSnackBar          
    ) { }

  ngOnInit(): void {
  }

  addDoctor(){
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.data={
      title:'Register Doctor'
    }

    const dialogRef = this.dialog.open(AddDoctorComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data=>{
      if(data){
        this.dataApi.addDoctor(data);
        this.openSnackBar("Registration of doctor successful","OK")
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
