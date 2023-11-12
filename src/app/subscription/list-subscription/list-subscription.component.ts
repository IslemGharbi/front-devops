import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/services/subscription/subscription.service';

@Component({
  selector: 'app-list-subscription',
  templateUrl: './list-subscription.component.html',
  styleUrls: ['./list-subscription.component.scss']
})
export class ListSubscriptionComponent implements OnInit {


  public subscriptions: any[] = [];

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit(): void {
    this.getSubscriptions();
  }

  getSubscriptions(): void {
    this.subscriptionService.getAllSubscriptions().subscribe(
      (data) => {
        this.subscriptions = data;
      },
      (error) => {
        console.error('Error fetching subscriptions', error);
      }
    );
  }

  deleteSubscription(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      this.subscriptionService.deleteSubscription(id).subscribe(
        () => {
          console.log('Item deleted successfully');
          // Refresh the list after deletion
          this.getSubscriptions();
        },
        (error) => {
          console.error('Error deleting item', error);
        }
      );
    }
  }
}
