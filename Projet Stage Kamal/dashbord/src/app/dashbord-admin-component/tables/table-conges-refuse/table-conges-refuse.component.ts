import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GereCongeResponse } from 'src/app/interfaces/GereConge-response';
import { Conge, CongeResponse } from 'src/app/interfaces/conge-response';
import { CommonService } from 'src/app/shared/common.service';
import { SnackbarComponent } from '../../snackbar/snackbar.component';
import { OndCsvBuilderService } from '@outsiderninjadevs/core';

@Component({
  selector: 'app-table-conges-refuse',
  templateUrl: './table-conges-refuse.component.html',
  styleUrls: ['./table-conges-refuse.component.css'],
})
export class TableCongesRefuseComponent implements OnInit, AfterViewInit {
  durationInSeconds = 5;

  displayedColumns: string[] = [
    'id_conge',
    'nom',
    'prenom',
    'statue_conge',
    'dateDebut',
    'dateFin',
    'action',
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

  ngOnInit(): void {
    this.http
      .get<CongeResponse>('http://localhost:3800/api/table/gettablecongerefuse')
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
  /* Function to Edite Conge from table */
  EditeConge(id: string, statue_conge: string): void {
    this.http
      .put<GereCongeResponse>('http://localhost:3800/api/conge/gereconge', {
        id_conge: id.trim(),
        statue_conge: statue_conge.trim(),
      })
      .subscribe(async (data) => {
        if (data.status == 200) {
          await this.shared.setMessage(data.msg);
          await this.openSnackBar();
          await new Promise((f) => setTimeout(f, 1500));
          await location.reload();
        } else {
          await this.shared.setMessage(data.msg);
          await this.openSnackBar();
          await new Promise((f) => setTimeout(f, 1500));
          await location.reload();
        }
      });
  }

  ExtraireFichierCSV() {
    const dataArray: Conge[] = this.dataSource.data;
    const strCsv: string = this.csv.toCSV(dataArray, ';'); // the delimiter (;) is optional
    this.csv.downloadCSV(strCsv, 'Getion des Conges Refuse.csv');
  }
}
