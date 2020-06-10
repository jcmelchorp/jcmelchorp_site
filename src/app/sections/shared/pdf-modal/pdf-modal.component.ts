import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EducationComponent } from '../../education/education.component';
import { DialogPdf } from '../viewmodels/dialog-pdf';
/**
 * PdfModal component
 */
@Component({
  selector: 'app-pdf-modal',
  templateUrl: './pdf-modal.component.html',
  styleUrls: ['./pdf-modal.component.scss']
})
export class PdfModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EducationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogPdf
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(){

  }
}
