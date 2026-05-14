export type FiltroType =
    'numPoliza' |
    'nombreRiesgo' |
    'fechaInicio' |
    'fechaFinal' |
    'importe' |
    'estado';

export interface Filter {
    id: string;
    type: FiltroType;
    value: string;
}
