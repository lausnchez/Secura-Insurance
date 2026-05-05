import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'inicio', loadComponent: () => import('./features/home/views/home/home').then(m => m.Home)},
    {path:'proximas-renovaciones', loadComponent: () => import('./features/proximas-renovaciones/views/proximas-renovaciones/proximas-renovaciones').then(m => m.ProximasRenovaciones)},
    {path:'detalle-poliza', loadComponent: () => import('./features/detalle-poliza/views/detalle-poliza/detalle-poliza').then(m => m.DetallePoliza)},
    {path:'', loadComponent: () => import('./features/home/views/home/home').then(m => m.Home)},
    {path:'**', loadComponent: () => import('./features/pag-no-encontrada/views/pag-no-encontrada/pag-no-encontrada').then(m => m.PagNoEncontrada)}
];
