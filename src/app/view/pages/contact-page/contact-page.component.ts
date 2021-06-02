import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../../environments/environment";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import swal, {SweetAlertOptions} from 'sweetalert2';
import {PageViewsService} from "../../../controller/pageViews/page-views.service";
import {AppUtils} from "../../../../utils/app/app-utils";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.sass']
})
export class ContactPageComponent implements OnInit {
  formGroup!: FormGroup;
  submitted = false;
  hidePassword = true

  constructor(private browserTitle: Title,
              private pageViewsService: PageViewsService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.browserTitle.setTitle(`Contact | ${environment.appTitle}`);
    this.pageViewsService.increment();
    this.formGroup = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      sampleDate: new FormControl(new Date(), [Validators.required]),
      referral: new FormControl('', [Validators.required]),
      bestTimeToCall: new FormControl('mornings', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    this.formGroup.markAllAsTouched();
    AppUtils.consoleLog("Form Value:", this.formGroup.value);
    if (this.formGroup.valid) {
      this.submitted = true;
      return swal.fire({
        title: 'Thank you!',
        html: `Thanks ${this.formGroup.get('firstName')?.value} for testing out this form submission functionality!  We hoped you enjoyed completing the form.`,
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'OK',
      } as SweetAlertOptions);
    } else {
      return swal.fire({
        title: 'Opps! Your form is incomplete',
        html: `Unfortunately, one or more fields are either incomplete or contain entries with errors.  Please check your form and try again.`,
        icon: 'error',
        showCancelButton: false,
        confirmButtonText: 'OK',
      } as SweetAlertOptions);
    }
  }
}
