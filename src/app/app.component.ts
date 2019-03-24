import { Component } from '@angular/core';
import { products } from './products';
import { GridDataResult ,PageChangeEvent} from '@progress/kendo-angular-grid';

@Component({
    selector: 'my-app',
    templateUrl:'./app.component.html'

})
export class AppComponent {
    public gridView: GridDataResult;
    public gridData: any[] = products;
    public pageSize = 10;
    public skip = 0;

    constructor() {
        this.loadItems();
    }


    public pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();
    }

    private loadItems(): void {
        this.gridView = {
            data: this.gridData.slice(this.skip, this.skip + this.pageSize),
            total: this.gridData.length
        };
    }
    
}
