export type PolizaState = 'pending' | 'paid' | 'expired';

export interface Poliza {
  policyNumber: number;
  name: string;
  contractDate: Date;
  endDate: Date;
  amount: number;
  state: PolizaState;
}
