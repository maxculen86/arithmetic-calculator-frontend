import { OperationType } from '../types/operationTypes';

export const operationTypes: OperationType[] = [
  'addition', 'subtraction', 'multiplication', 'division', 'square_root', 'random_string'
];

export const operationTypeMap: { [key: string]: string } = {
  '1': 'addition',
  '2': 'subtraction',
  '3': 'multiplication',
  '4': 'division',
  '5': 'square_root',
  '6': 'random_string'
};

