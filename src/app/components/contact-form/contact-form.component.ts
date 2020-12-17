import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  Validators,
} from '@angular/forms';
import { Location } from '@angular/common';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
import { SendFormServiceService } from 'src/app/services/send-form-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormDialogComponent } from '../contact-form-dialog/contact-form-dialog.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  class = 'field';
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private noSpacesPattern: any = '/^((?!s{2,}).)*$/';
  questions: string[] = ['Mounts', 'Minions', 'Report an error', 'Others'];

  constructor(
    private location: Location,
    private db: AngularFireDatabase,
    private sendFormService: SendFormServiceService,
    private http: HttpClient,
    public dialog: MatDialog
  ) {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {}

  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      datacenter: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      server: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(this.emailPattern),
      ]),
      questionType: new FormControl('', [Validators.required]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(500),
      ]),
    });
  }

  resetForm() {
    this.contactForm.reset();
  }

  sendForm() {
    if (this.contactForm.valid) {
      this.sendFormService.saveDataForm(this.contactForm.value);
    } else {
      alert("Your message hasn't been sent, kupó...");
    }
    this.resetForm();
  }

  changeQuestion(e) {
    console.log(e.value);
    this.questionType.setValue(e.value, {
      onlySelf: true,
    });
  }

  get name() {
    return this.contactForm.get('name');
  }
  get datacenter() {
    return this.contactForm.get('datacenter');
  }
  get server() {
    return this.contactForm.get('server');
  }
  get message() {
    return this.contactForm.get('message');
  }
  get questionType() {
    return this.contactForm.get('questionType');
  }
  get email() {
    return this.contactForm.get('email');
  }

  openDialog() {
    this.dialog.open(ContactFormDialogComponent, {
      width: '400px',
    });
  }

  openTerms() {
    this.dialog.open(ContactFormDialogComponent, {
      width: '400px',
    });
  }
}
