import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() placeholder = '';
  @Input() label = '';
  @Input() type: 'text' = 'text';
  @Input() formName = '';
  @Input() inputContent = '';
  public formGroupAux: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
