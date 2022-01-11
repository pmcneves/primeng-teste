import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() cols: any[] = [];
  @Input() styleClass = '';
  @Input() responsiveLayout: 'scroll' | 'stack' = 'stack';
  @Input() hasPaginator = true;
  @Input() numOfInitialRows = 10;
  @Input() hasPageReport = false;
  @Input() rowsPerPage = [10, 25, 50];
  @Input() hasFilter = true;
  @Input() hasClearTableFilterBtn = true;
  @Input() hasSelection = false;
  @Input() isScrollable = true;
  @Input() scrollHeight = '500px';
  @Input() dataKey = ''; //this must be an unique identifier for each row
  @Input() isExpandable = false;
  @Input() isEditable = false;
  @Input() isSortable = false;
  @Input() hasSortIcon = true;
  @Output() getSelectedRows = new EventEmitter();
  @Output() getEditedRow = new EventEmitter();
  public rowInfo: any;
  public selectedRows: any[] = [];
  public editedRow: any | null = null;
  public clonedData: { [s: string]: any } = {};

  public getEventValue($event: any): string {
    return $event.target.value;
  }

  public clear(table: Table) {
    table.clear();
  }

  public onRowSelect(rowData: any) {
    this.selectedRows.push(rowData);
    this.emitSelectedRows();
  }

  public onRowUnselect(rowData: any) {
    this.selectedRows = this.selectedRows.filter(
      (selectedRow) => selectedRow !== rowData
    );
    this.emitSelectedRows();
  }

  public onRowEditInit(rowData: any) {
    this.clonedData[rowData[this.dataKey]] = { ...rowData };
  }

  public onRowEditSave(product: any) {
    this.emitEditedRow(product);
  }

  public onRowEditCancel(rowData: any, ri: number) {
    this.data[ri] = this.clonedData[rowData[this.dataKey]];
    delete this.clonedData[rowData[this.dataKey]];
  }

  public emitSelectedRows() {
    this.getSelectedRows.emit(this.selectedRows);
  }

  public emitEditedRow(row: any) {
    this.getEditedRow.emit(row);
  }
}
