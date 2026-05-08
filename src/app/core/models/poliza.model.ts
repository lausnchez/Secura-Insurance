export type PolizaState = 'Pendiente' | 'Pagado' | 'Vencida';
export interface Poliza {
  policyNumber: number;
  name: string;
  contractDate: Date;
  endDate: Date;
  amount: number;
  state: PolizaState;
}