import { Component } from '@angular/core';
import { DpContacto } from '../../components/dp-contacto/dp-contacto';
import { DpDirCorrespondencia } from '../../components/dp-dir-correspondencia/dp-dir-correspondencia';
import { DpDirFacturacion } from '../../components/dp-dir-facturacion/dp-dir-facturacion';
import { DpHeader } from '../../components/dp-header/dp-header';
import { DpMetodoPago } from '../../components/dp-metodo-pago/dp-metodo-pago';
import { DpPersonalInfo } from '../../components/dp-personal-info/dp-personal-info';
import { DpUltimasCuotas } from '../../components/dp-ultimas-cuotas/dp-ultimas-cuotas';

@Component({
  selector: 'app-detalle-poliza',
  imports: [
    DpContacto,
    DpDirCorrespondencia,
    DpDirFacturacion,
    DpHeader,
    DpMetodoPago,
    DpPersonalInfo,
    DpUltimasCuotas],
  templateUrl: './detalle-poliza.html',
  styleUrl: './detalle-poliza.scss',
})
export class DetallePoliza {

}
