import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

import { MessageBroker } from '../messageBroker';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPage {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  })
  formError = false
  sending = false
  messageBroker = new MessageBroker()

  submitForm() {
    if (this.contactForm.value.name == '' || this.contactForm.value.email == '' || this.contactForm.value.message == '') {
      this.formError = true
    } else {
      this.formError = false
      this.messageBroker.sendMessage(this.contactForm.value.name ?? '<Anonymous>', this.contactForm.value.email ?? '<Anonymous>', this.contactForm.value.message ?? '<No message>')
      alert('Message sent')
      this.contactForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        message: new FormControl('', Validators.required)
      })
    }
    
  }
}
