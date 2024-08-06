import { operationTypeMap } from "../constants/operationTypes";

export const getOperationType = (operationId: string): string => {
  return operationTypeMap[operationId] || 'Unknown';
};
