import { Component, OnInit } from '@angular/core';
import { SkierService } from 'src/app/services/skier/skier.service';

@Component({
  selector: 'app-list-skier',
  templateUrl: './list-skier.component.html',
  styleUrls: ['./list-skier.component.scss']
})
export class ListSkierComponent implements OnInit {


  public skiers: any[] = [];

  constructor(private skierService: SkierService) {}

  ngOnInit(): void{
    this.getSkiers();
  }

  getSkiers(): void {
    this.skierService.getAllSkiers().subscribe(
      (data) => {
        this.skiers = data;
      },
      (error) => {
        console.error('Error fetching skiers', error);
      }
    );
  }

  deleteSkier(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      this.skierService.deleteSkier(id).subscribe(
        () => {
          console.log('Item deleted successfully');
          // Refresh the list after deletion
          this.getSkiers();
        },
        (error) => {
          console.error('Error deleting item', error);
        }
      );
    }
  }
}