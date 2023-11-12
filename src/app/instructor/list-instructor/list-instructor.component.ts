import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/services/instructor/instructor.service';

@Component({
  selector: 'app-list-instructor',
  templateUrl: './list-instructor.component.html',
  styleUrls: ['./list-instructor.component.scss']
})
export class ListInstructorComponent implements OnInit {


  public instructors: any[] = [];

  constructor(private instructorService: InstructorService) {}

  ngOnInit(): void {
    this.getInstructors();
  }

  getInstructors(): void {
    this.instructorService.getAllInstructors().subscribe(
      (data) => {
        this.instructors = data;
      },
      (error) => {
        console.error('Error fetching instructors', error);
      }
    );
  }

  deleteInstructor(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      this.instructorService.deleteInstructors(id).subscribe(
        () => {
          console.log('Item deleted successfully');
          // Refresh the list after deletion
          this.getInstructors();
        },
        (error) => {
          console.error('Error deleting item', error);
        }
      );
    }
  }
}
