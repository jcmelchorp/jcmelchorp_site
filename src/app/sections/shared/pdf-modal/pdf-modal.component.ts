import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, EducationComponent } from '../../education/education.component';

@Component({
  selector: 'app-pdf-modal',
  templateUrl: './pdf-modal.component.html',
  styleUrls: ['./pdf-modal.component.scss']
})
export class PdfModalComponent{

  constructor(
    public dialogRef: MatDialogRef<EducationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
}
