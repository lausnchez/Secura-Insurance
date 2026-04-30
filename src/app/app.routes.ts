import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './features/home/views/home/home';
import { ProximasRenovaciones } from './features/proximas-renovaciones/views/proximas-renovaciones/proximas-renovaciones';
import { DetallePoliza } from './features/detalle-poliza/views/detalle-poliza/detalle-poliza';
import { PagNoEncontrada } from './features/pag-no-encontrada/views/pag-no-encontrada/pag-no-encontrada';


export const routes: Routes = [
    {
        path:'inicio',
        component: Home,
    },
    {
        path:'proximas-renovaciones',
        component: ProximasRenovaciones,
    },
    {
        path:'detalle-poliza',
        component: DetallePoliza,
    },
    {
        path:'',
        component: Home,
    },
    {
        path:'**',
        component: PagNoEncontrada,
    }
];
