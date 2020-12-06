import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  Validators,
} from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  questions: string[] = ['Mounts', 'Minions', 'Report an error', 'Others'];

  constructor(private location: Location) {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {}

  createFormGroup() {
    return new FormGroup({
      datacenter: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      server: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(this.emailPattern),
      ]),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(500),
      ]),
      questionType: new FormControl('', [Validators.required]),
    });
  }

  resetForm() {
    this.contactForm.reset();
  }
  sendForm() {
    if (this.contactForm.valid) {
      alert('Message sent, kupó! ');
      console.log(this.contactForm.value);
    } else {
      alert("Your message hasn't been sent, kupó...");
    }
    this.resetForm();
  }

  changeQuestion(e) {
    console.log(this.contactForm.controls['questionType'].value);
    this.questionType.setValue(e.target.value, {
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
}
