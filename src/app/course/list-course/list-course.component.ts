import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {


  public courses: any[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getAllCourses().subscribe(
      (data) => {
        this.courses = data;
      },
      (error) => {
        console.error('Error fetching courses', error);
      }
    );
  }



  deleteCourse(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      this.courseService.deleteCourse(id).subscribe(
        () => {
          console.log('Item deleted successfully');
          // Refresh the list after deletion
          this.getCourses();
        },
        (error) => {
          console.error('Error deleting item', error);
        }
      );
    }
  }
}