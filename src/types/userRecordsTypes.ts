export type OperationType = 'addition' | 'subtraction' | 'multiplication' | 'division' | 'square_root' | 'random_string' | 'create_user';

export interface Operation {
  id: string;
  user_id: string;
  operation_id: string;
  operation_response: string;
  amount: number;
  user_balance: number;
  created_at: string | null;
  deleted: boolean;
}

export interface FilterProps {
  operationType: OperationType | null;
  startDate: string | null;
  endDate: string | null;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}
