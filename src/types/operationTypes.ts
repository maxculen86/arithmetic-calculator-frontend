export type OperationType = 'addition' | 'subtraction' | 'multiplication' | 'division' | 'square_root' | 'random_string';

export type OperationParams = {
  num1?: number;
  num2?: number;
};

export interface OperationData {
  userId: string;
  operationType: OperationType;
  operationParams?: OperationParams;
}
