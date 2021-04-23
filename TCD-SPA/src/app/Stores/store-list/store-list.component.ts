import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/_models/Store';
import { StoreService } from 'src/app/_services/store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  stores: Store[];
  constructor(private storeService:StoreService) { }

  ngOnInit() {
    this.loadStores();
    console.log(this.stores)
  }

  loadStores() {
    this.storeService.getStores().subscribe((stores: Store[]) => {
      this.stores = stores;
    })    
  }

  deleteStore(id: number) {    
      this.storeService.deleteStore(id).subscribe(() => {
        this.stores.splice(this.stores.findIndex(p => p.id === id), 1);
      }, error => {
        console.log(error);
      });    
  }
}
