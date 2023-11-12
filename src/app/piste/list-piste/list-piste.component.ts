import { Component, OnInit } from '@angular/core';
import { PisteService } from 'src/app/services/piste/piste.service';

@Component({
  selector: 'app-list-piste',
  templateUrl: './list-piste.component.html',
  styleUrls: ['./list-piste.component.scss']
})
export class ListPisteComponent implements OnInit {


  public pistes: any[] = [];

  constructor(private pisteService: PisteService) {}

  ngOnInit(): void {
    this.getPistes();
  }

  getPistes(): void {
    this.pisteService.getAllPistes().subscribe(
      (data) => {
        this.pistes = data;
      },
      (error) => {
        console.error('Error fetching pistes', error);
      }
    );
  }

  deletePiste(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      this.pisteService.deletePiste(id).subscribe(
        () => {
          console.log('Item deleted successfully');
          // Refresh the list after deletion
          this.getPistes();
        },
        (error) => {
          console.error('Error deleting item', error);
        }
      );
    }
  }
}
