import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-bien',
  templateUrl: './add-bien.component.html',
  styleUrls: ['./add-bien.component.css']
})
export class AddBienComponent implements OnInit {
  bienForm: FormGroup;
  options = ['Location', 'Vente'];
  constructor() { }

  ngOnInit(): void {
    // Creating the form
    this.bienForm = new FormGroup({
      title: new FormControl(
        null,
        [Validators.required,
          Validators.minLength(5),
        Validators.maxLength(50)]),
      price: new FormControl(
        null,
        [Validators.required,
          Validators.min(100)
        ]),
      description: new FormControl(null,null,),
      categorie: new FormControl(null), // select
      image: new FormControl(null),
      sale: new FormControl('Location'), // radio
      imagesSec: new FormArray([])
    });
    this.bienForm.patchValue({
      description: 'J\'ai terminé les formulaires',
    });
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
