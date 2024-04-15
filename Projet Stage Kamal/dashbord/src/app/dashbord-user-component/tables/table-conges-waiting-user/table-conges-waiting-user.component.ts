import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SnackbarComponent } from 'src/app/dashbord-admin-component/snackbar/snackbar.component';
import { Conge, CongeResponse } from 'src/app/interfaces/conge-response';
import { CommonService } from 'src/app/shared/common.service';
import { OndCsvBuilderService } from '@outsiderninjadevs/core';

@Component({
  selector: 'app-table-conges-waiting-user',
  templateUrl: './table-conges-waiting-user.component.html',
  styleUrls: ['./table-conges-waiting-user.component.css'],
})
export class TableCongesWaitingUserComponent {
  durationInSeconds = 5;
  userId!: string;

  displayedColumns: string[] = [
    'id_conge',
    'nom',
    'prenom',
    'statue_conge',
    'dateDebut',
    'dateFin',
  ];
  dataSource: MatTableDataSource<Conge> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private shared: CommonService,
    private readonly csv: OndCsvBuilderService
  ) {}

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  ngOnInit() {
    const tokon = localStorage.getItem('tk');
    this.http
      .get<CongeResponse>(
        'http://localhost:3800/api/table/gettablecongewaitinguser',
        {
          headers: {
            Authorization: `Bearer ${tokon}`,
          },
        }
      )
      .subscribe((data) => {
        if (data.status == 200) {
          this.dataSource = new MatTableDataSource(data.conges);
          this.ngAfterViewInit();
        } else {
          alert(data.msg);
        }
      });
  }

  /* Function to paginator and sort our table */
  ngAfterViewInit() {
    this.dataSource.paginator! = this.paginator;
    this.dataSource.sort! = this.sort;
  }

  /* Function to search in our table */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ExtraireFichierCSV() {
    const dataArray: Conge[] = this.dataSource.data;
    const strCsv: string = this.csv.toCSV(dataArray, ';'); // the delimiter (;) is optional
    this.csv.downloadCSV(strCsv, 'conges waiting user.csv');
  }
}
