import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: UserOptions = { username: '', password: ''};
  task: any = {desc:'', bywhen:''};
  submitted = false;
  defaultHref = '/app/tabs/schedule';
  currType:String='Promise';
  tasktype:String;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public userData: UserData
  ) {}

  ionViewWillEnter() {
    this.tasktype = this.route.snapshot.paramMap.get('tasktype');
    console.log("tasktype="+this.tasktype);
  }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }

  toggle() {
    if (this.currType==='Promise') {
      this.currType='Request';
    } else {
      this.currType='Promise';
    }
  }
}
