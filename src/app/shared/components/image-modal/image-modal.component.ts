import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogPdf } from '../viewmodels/dialog-pdf';
import { EducationComponent } from 'src/app/sections/education/education.component';
/**
 * ImageModal component
 */
@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EducationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogPdf
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
