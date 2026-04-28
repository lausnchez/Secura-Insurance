import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProximasRenovaciones } from './pages/proximas-renovaciones/proximas-renovaciones';
import { DetallePoliza } from './pages/detalle-poliza/detalle-poliza';
import { PagNoEncontrada } from './pages/pag-no-encontrada/pag-no-encontrada';


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
