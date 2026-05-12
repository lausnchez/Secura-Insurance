import { computed, Injectable, signal } from '@angular/core';
import { Poliza } from '../../../../core/models/poliza.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoadJsonTotalRenovations {
  
  renovationsData = signal<Poliza[]>([]); // Datos finales
  pageSize = signal<number>(1); // Elementos por página
  currentPage = signal<number>(0); // Número de página
  
  filters = signal<[{filter: string, content: string}]>([{filter: '', content: ''}]); // Filtros aplicados
  totalRenovations = computed(()=> this.renovationsData().length); // Total de renovaciones

  paginatedRenovations = computed(()=>{
    const inicio = this.currentPage() * this.pageSize();
    const final = inicio + this.pageSize();
    return this.renovationsData().slice(inicio, final); 
  });



  // Pólizas pasadas por los filtros
  filteredRenovationsData = computed(()=>{
    // REcoger datos totales
    let data = this.renovationsData();
    
    // Sistema de filtro
    this.filters().forEach((filter)=>{
      const filterContents = filter.content;
      let filteredData: Poliza[] = [];
      
      // Listado de filtros
      switch(filter.filter){
        case 'policyNumber':
          // filteredData = data.filter(p => p.policyNumber.toString() == filterContents);
          filteredData = data.filter(p => p.policyNumber.toString().includes(filterContents));
          break;
        case 'name':
          filteredData = data.filter(p => p.name == filterContents);
          break;
        case 'contractDate':
          filteredData = data.filter(p => p.contractDate.toString() == filterContents);
          break;
        case 'endDate':
          filteredData = data.filter(p => p.endDate.toString() == filterContents);
          break;
        case 'amount':
          filteredData = data.filter(p => p.amount.toString() == filterContents);
          break;
        case 'state':
          filteredData = data.filter(p => p.state == filterContents);
          break;

        default:
          filteredData = [];
      }
      return filteredData;
    });

  });

  constructor(private http:HttpClient){
    this.loadRenovationsJson();
  }

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
        })); 
        this.renovationsData.set(renovations);
    });
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
