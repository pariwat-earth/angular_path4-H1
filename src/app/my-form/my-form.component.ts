import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  from: FormGroup;

  constructor(private fb: FormBuilder) {
    this.from = this.fb.group({
      name:['',[Validators.pattern('[a-zA-Z ]*'),Validators.required]],
      email:['',[Validators.email,Validators.required]],
      postalAddress:['',[Validators.required,Validators.minLength(3)]],
      comments:[''],
    });
  }

  ngOnInit(): void {
  }

}
