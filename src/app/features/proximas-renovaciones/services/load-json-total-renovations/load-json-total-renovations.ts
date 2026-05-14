import { computed, inject, Injectable, signal } from '@angular/core';
import { Poliza } from '../../../../core/models/poliza.model';
import { HttpClient } from '@angular/common/http';
import { FilterManagement } from '../filter-management/filter-management';
import { FiltroType } from '../../../../core/models/filter.model';

@Injectable({
  providedIn: 'root',
})
export class LoadJsonTotalRenovations {
  
  filterService = inject(FilterManagement);

  renovationsData = signal<Poliza[]>([]); // Datos finales
  pageSize = signal<number>(5); // Elementos por página
  currentPage = signal<number>(0); // Número de página
  totalFilteredRenovations = computed(()=> this.filteredRenovationsData().length); // Total de renovaciones filtradas
  totalRenovations = computed(()=>this.renovationsData().length);

  constructor(private http:HttpClient){
    this.loadRenovationsJson();
  }

  filteredRenovationsData = computed(() => {
    const filters = this.filterService.filterList();
    let data = this.renovationsData();

    const filterByType = (currentData: Poliza[], type: FiltroType, value: string) => {
      const normalizedValue = value.trim().toLowerCase();

      switch (type) {
        case 'numPoliza':
          return currentData.filter(poliza => poliza.policyNumber.toString().includes(normalizedValue));
        case 'nombreRiesgo':
          return currentData.filter(poliza => poliza.name.toLowerCase().includes(normalizedValue));
        case 'fechaInicio':
          return currentData.filter(poliza => poliza.endDate.getTime() >= new Date(value).getTime());
        case 'fechaFinal':
          return currentData.filter(poliza => poliza.endDate.getTime() <= new Date(value).getTime());
        case 'importe':
          return currentData.filter(poliza => poliza.amount.toString().includes(normalizedValue));
        case 'estado':
          return currentData.filter(poliza => poliza.state.toLowerCase().includes(normalizedValue));
        default:
          return currentData;
      }
    };

    filters.forEach(filter => {
      if (!filter.value.trim()) {
        return;
      }

      data = filterByType(data, filter.type, filter.value);
    });

    return data;
  });

  paginatedRenovations = computed(()=>{
    const inicio = this.currentPage() * this.pageSize();
    const final = inicio + this.pageSize();
    return this.filteredRenovationsData().slice(inicio, final); 
  });

  mapState(n: number){
    switch(n){
      case 0:
        return 'Pendiente';
      case 1:
        return 'Pagado';
      case 2:
        return 'Vencido';
      default:
        return 'Pendiente';
    }
  }

  loadRenovationsJson(){
    this.http.get<{ renovations: Poliza[] }>('assets/json/renovations.json').
      subscribe(data =>{
        let renovations = data.renovations.map((p:any) => ({
          ...p,
          state: this.mapState(p.state),
          contractDate: new Date(p.contractDate),
          endDate: new Date(p.endDate),
        })); 
        this.renovationsData.set(renovations);
        this.sortRenovations('numPoliza');
    });
  }

  sortRenovations(sortingOrder:string){
    switch(sortingOrder){
      case 'numPoliza':
        this.renovationsData.update(data => [...data].sort((a, b) => a.policyNumber - b.policyNumber));
        break;
      case 'importe':
        this.renovationsData.update(data => [...data].sort((a, b) => a.amount - b.amount));
        break;
      case 'fechaContratacion':
        this.renovationsData.update(data => [...data].sort((a, b) => a.contractDate.getTime() - b.contractDate.getTime()));
        break;
      case 'fechaVencimiento':
        this.renovationsData.update(data => [...data].sort((a, b) => a.endDate.getTime() - b.endDate.getTime()));
        break;
      
      default:
        this.renovationsData.update(data => [...data].sort((a, b) => a.policyNumber - b.policyNumber));    
        break;
    }
    this.currentPage.set(0);
  }

  setPagination(pageIndex: number, pageSize: number){
    // PageIndex
    if(this.pageSize() != pageSize){
      this.currentPage.set(0);
    }else{
      this.currentPage.set(pageIndex);
    }
    // PageSize
    this.pageSize.set(pageSize);
  }
}
