import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from 'src/app/shared/components/image-modal/image-modal.component';
import { PdfModalComponent } from 'src/app/shared/components/pdf-modal/pdf-modal.component';

/**
 * Education component
 */
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class EducationComponent implements OnInit {
  title = 'Education';
  badge = faAward;
  grad = faGraduationCap;
  constructor(
    private titleService: Title,
    public dialog: MatDialog
  ) { }
  modalTitle: string;
  modalSrc: string;
  modalPage: number;
  /**
   * Open dialog box
   * @example
   * showModal('thesis')
   *
   * @param modal  The switch variable for triggering dialog box {@link MatDialog}
   * @returns The processed target number
   */
  showModal(modal: string) {
    switch (modal) {
      case 'thesis': {
        this.modalTitle = 'Thesis';
        this.modalSrc = 'assets/images/tesis01.png';
        const dialogRef = this.dialog.open(ImageModalComponent, {
          data: {
            title: this.modalTitle,
            name: this.modalSrc
          }
        });
        break;
      }
      case 'physics': {
        this.modalTitle = 'Certificate';
        this.modalSrc = 'assets/images/physics.png';
        const dialogRef = this.dialog.open(ImageModalComponent, {
          data: {
            title: this.modalTitle,
            name: this.modalSrc
          }
        });
        break;
      }
      case 'master': {
        this.modalTitle = 'Certificate',
          this.modalSrc = 'assets/images/master.jpg';
        const dialogRef = this.dialog.open(ImageModalComponent, {
          data: {
            title: this.modalTitle,
            name: this.modalSrc
          }
        });
        break;
      }
      case 'project': {
        this.modalTitle = 'PhD. Proyect';
        this.modalSrc = 'assets/pdf/IN102415_Informe_Final_2015.pdf';
        const dialogRef = this.dialog.open(PdfModalComponent, {
          data: {
            title: this.modalTitle,
            name: this.modalSrc
          }
        });
        break;
      }
      case 'publish1': {
        this.modalTitle = 'Publication';
        this.modalSrc = 'assets/pdf/EMS2016_programme_book.pdf';
        this.modalPage = 57;
        const dialogRef = this.dialog.open(PdfModalComponent, {
          data: {
            title: this.modalTitle,
            name: this.modalSrc,
            page: this.modalPage
          }
        });
        break;
      }

    }
  }
  ngOnInit() {
    setTimeout(() => {
      this.titleService.setTitle(this.title);
    });
   }
}
