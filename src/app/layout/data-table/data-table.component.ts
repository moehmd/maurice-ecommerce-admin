
import {
  Component,
  OnInit,
  ViewChild,
  Input,
  OnChanges,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DataTableColumn } from 'src/app/core/models/data-table-columns';
import { MatSort } from '@angular/material/sort';
import { TableActions } from 'src/app/core/Models/table-actions';
import {Status } from 'src/app/core/services/proxy.service';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() displayedColumns: DataTableColumn[] = [];
  @Input() data: any[] = [];
  @Input() actions: TableActions[] = [];
  @Output() onEdit: EventEmitter<Object> = new EventEmitter();
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  @Output() onDataSourceChange: EventEmitter<any> = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @Output() ddlOnChange: EventEmitter<Object> = new EventEmitter();
  @Input() dropDown: Status[] = [];
  public columns: string[] = [];
  public dataSource = new MatTableDataSource<any>();

  constructor() {}

  ngOnInit(): void {
    this.columns = this.displayedColumns.map((col) => col.name);

  }

  ngOnChanges() {
    console.log('on changes data are: ', this.data);
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort ;
  }
  ddlChangeHanlder(x: any) {
    this.ddlOnChange.emit(x);
  }
  public applySearch(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public edit(id: any) {
    this.onEdit.emit(id);
  }

  public delete(id: any) {
    this.onDelete.emit(id);
  }
}
