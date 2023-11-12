import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration/registration.service';

@Component({
  selector: 'app-list-registration',
  templateUrl: './list-registration.component.html',
  styleUrls: ['./list-registration.component.scss']
})
export class ListRegistrationComponent implements OnInit {


  public registrations: any[] = [];

  constructor(private registrationService: RegistrationService) {}

  ngOnInit(): void {
    this.getregistration();
  }

  getregistration(): void {
    this.registrationService.getAllRegistrations().subscribe(
      (data) => {
        this.registrations = data;
      },
      (error) => {
        console.error('Error fetching registration', error);
      }
    );
  }


  deleteRegistration(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      this.registrationService.deleteRegistration(id).subscribe(
        () => {
          console.log('Item deleted successfully');
          // Refresh the list after deletion
          this.getregistration();
        },
        (error) => {
          console.error('Error deleting item', error);
        }
      );
    }
  }
}