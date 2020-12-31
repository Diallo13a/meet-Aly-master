import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-bien',
  templateUrl: './add-bien.component.html',
  styleUrls: ['./add-bien.component.css']
})
export class AddBienComponent implements OnInit {
  bienForm: FormGroup;
  options = ['Location', 'Vente'];
  // the forbidden titles
  forbidenTitles: string[] = ['Hamo', 'Village', 'Ville'];
  constructor() { }

  ngOnInit(): void {
    // Creating the form
    this.bienForm = new FormGroup({
      title: new FormControl(
        null,
        [Validators.required,
          Validators.minLength(5),
        Validators.maxLength(50),
        ],
        this.forbiddenValidator.bind(this)
      ),
      price: new FormControl(
        null,
        [Validators.required,
          Validators.min(100),
          this.lastPriceValidator
        ]),
      description: new FormControl(null, null),
      categorie: new FormControl(null), // select
      image: new FormControl(null),
      sale: new FormControl('Location'), // radio
      imagesSec: new FormArray([])
    });
    this.bienForm.patchValue({
      description: 'J\'ai terminé les formulaires',
    });
  }
  // Async Validator function
  lastPriceValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (+control.value > 1000000) {
          resolve({lastPrice: true});
          return {lastPrice: true};
        }else{
          resolve (null);
        }
        return null;
      }, 2000);
    });
    return promise;
  }
  // Validator function
  forbiddenValidator(ctrl: FormControl): {[key: string]: boolean}{
    if (this.forbidenTitles.indexOf(ctrl.value) !== -1){
      return {titleForbidden: true};
    }
    return null;
  }
  getimagesSecControl(): any{
    return (<FormArray> this.bienForm.get('imagesSec')).controls;
  }
  onAddSecImage(): any{
    const control = new FormControl(null, [Validators.required]);
    (<FormArray> this.bienForm.get('imagesSec')).push(control);
  }
  onSubmit(): any{
    console.log(this.bienForm);
  }
}
