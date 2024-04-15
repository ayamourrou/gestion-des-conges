import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  inject,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteUserResponse } from 'src/app/interfaces/deleteUser-response';
import {
  GetTableUser,
  GetTableUserResponse,
} from 'src/app/interfaces/GetTableuser-response';
import { CompAddEditComponent } from '../../comp-add-edit/comp-add-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../snackbar/snackbar.component';
import { CommonService } from '../../../shared/common.service';
import { OndCsvBuilderService } from '@outsiderninjadevs/core';

export interface UserData {
  id: string;
  // name: string;
  // progress: string;
  // fruit: string;
  [key: string]: string;
}

@Component({
  selector: 'app-table-gestion-users',
  templateUrl: './table-gestion-users.component.html',
  styleUrls: ['./table-gestion-users.component.css'],
})
export class TableGestionUsersComponent implements OnInit, AfterViewInit {
  durationInSeconds = 5;

  displayedColumns: string[] = [
    'id_user',
    'statue_user',
    'nom',
    'prenom',
    'cin',
    'username',
    'password',
    'email',
    'action',
  ];
  dataSource: MatTableDataSource<GetTableUser> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /* Function to paginator and sort our table */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(
    private http: HttpClient,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private shared: CommonService,
    private readonly csv: OndCsvBuilderService
  ) {}

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  ngOnInit(): void {
    this.http
      .get<GetTableUserResponse>('http://localhost:3800/api/table/gettableuser')
      .subscribe(async (data) => {
        if (data.status == 200) {
          this.dataSource = new MatTableDataSource(data.user_info);
          await this.ngAfterViewInit();
        } else {
          alert(data.msg);
        }
      });
  }

  /* Function to search in our table */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /* Function to delete User from table */
  deleteUser(id: number): void {
    console.log(id);
    this.http
      .delete<DeleteUserResponse>(
        `http://localhost:3800/api/user/deleteUser/${id}`
      )
      .subscribe(async (data) => {
        console.log('data.status :' + data.status);
        if (data.status == 200) {
          await this.shared.setMessage(data.msg);
          await this.openSnackBar();
          await new Promise((f) => setTimeout(f, 1500));
          await location.reload();
          this.ngOnInit();
        } else {
          await this.shared.setMessage(data.msg);
          await this.openSnackBar();
          await new Promise((f) => setTimeout(f, 1500));
          await location.reload();
        }
      });
  }

  openAddEditUserFrom(data: any): void {
    this._dialog.open(CompAddEditComponent, {
      data,
    });
  }

  ExtraireFichierCSV() {
    const dataArray: GetTableUser[] = this.dataSource.data;
    const strCsv: string = this.csv.toCSV(dataArray, ';'); // the delimiter (;) is optional
    this.csv.downloadCSV(strCsv, 'Getion des Uitilisateur.csv');
  }
}
