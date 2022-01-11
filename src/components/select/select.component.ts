import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() data: any;
  @Input() formName: string;
  @Input() selectedOption = '';
  @Input() validators: ValidatorFn | ValidatorFn[] | null;
  @Output() getSelectedData = new EventEmitter();
  public formGroupAux: FormGroup;
  public selected: any;

  constructor() {}

  ngOnInit(): void {
    this.formGroupAux = new FormGroup({
      [this.formName]: new FormControl(
        { value: this.selectedOption },
        this.validators
      ),
    });
    this.formGroupAux.valueChanges.subscribe(() => {
      this.emitSelectedData(this.formGroupAux);
    });
  }

  private emitSelectedData(teste: any) {
    this.getSelectedData.emit(teste);
  }
}
