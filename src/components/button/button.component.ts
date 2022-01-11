import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label = 'label';
  @Input() isBtnLoading = false;
  @Input() customClass = '';
  @Input() icon = '';
  @Input() loadingIcon = 'pi pi-spinner pi-spin';
  @Input() disabled = false;
  @Input() iconPos: 'left' | 'right' = 'right';
  @Output() btnClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public btnClick(): void {
    this.btnClicked.emit();
  }
}
