import { Injectable } from '@angular/core';
import { Filter } from '../../../../core/models/filter.model';
import { signal } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class FilterManagement {
    
  filterList = signal<Filter[]>([]);

  setFilters(filters: Filter[]){
    this.filterList.set(filters);
  }


  addFilter(filter: Filter){
    let filterList = [...this.filterList()];
    filterList.push(filter);
    this.filterList.set(filterList);
  }

  removeFilter(filterID: string){
    this.filterList.update(filters => filters.filter( f => f.id !== filterID));
  }

  clearAllFilters(){
    this.filterList.set([]);
  }

  updateFilter(filterID: string){

  }
}
