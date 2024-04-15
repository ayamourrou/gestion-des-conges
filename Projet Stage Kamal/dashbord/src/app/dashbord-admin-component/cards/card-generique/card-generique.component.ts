import { Component, Input, numberAttribute } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-card-generique',
  templateUrl: './card-generique.component.html',
  styleUrls: ['./card-generique.component.css'],
})
export class CardGeneriqueComponent {
  @Input({ required: true }) h!: string;
  @Input({ required: true }) color!: string;
  @Input({ required: true }) icon!: string;
  @Input({ required: true, transform: numberAttribute }) i_span!: number;
  @Input({ required: true }) p!: string;
  @Input({ required: true }) p_span!: string;

  displayedColumns: string[] = [
    'id_conge',
    'nom',
    'prenom',
    'statue_conge',
    'dateDebut',
    'dateFin',
    'action',
  ];

  dataSource: MatTableDataSource<string> = new MatTableDataSource();
}
