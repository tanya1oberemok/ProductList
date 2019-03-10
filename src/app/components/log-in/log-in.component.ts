import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  form:FormGroup;
  
  constructor(
    private formBuilder:FormBuilder, 
    private authService: AuthService, 
    private router: Router
  ) { 
    this.form = this.formBuilder.group({
      userName: ['',Validators.required],
      password: ['',Validators.required]
  });
  }

  ngOnInit() {
  }
}
