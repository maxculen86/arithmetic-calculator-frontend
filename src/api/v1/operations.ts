import axiosInstance from './axiosInstance';
import { API_ENDPOINTS } from './config';
import { OperationData } from '../../types/operationTypes';
import { OperationResponse, UpdateBalanceRequest, UpdateBalanceResponse } from '../../types/apiTypes';

/**
 * Creates a new operation.
 * @param data The operation data.
 * @returns A promise that resolves to the operation response.
 * @throws If an error occurs during the API call.
 */
export async function createOperation(data: OperationData): Promise<OperationResponse> {
  try {
    const response = await axiosInstance.post<OperationResponse>(API_ENDPOINTS.OPERATION, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

/**
 * Adds the specified amount to the balance of the user with the given ID.
 * @param userId The ID of the user.
 * @param amount The amount to be added to the balance.
 * @returns A promise that resolves to the updated balance response.
 * @throws If an error occurs during the API request.
 */
export async function addBalance(userId: string, amount: number): Promise<UpdateBalanceResponse> {
  try {
    const data: UpdateBalanceRequest = { userId, amount };
    const response = await axiosInstance.post<UpdateBalanceResponse>(API_ENDPOINTS.UPDATE_BALANCE, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
