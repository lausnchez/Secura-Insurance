export type FiltroType = 
    'noPoliza' |
    'noRiesgo' |
    'fContrato' |
    'fFinal' |
    'importe' |
    'estado';

export interface Filter{
    id: string,
    type: FiltroType,
    value: unknown,
}
