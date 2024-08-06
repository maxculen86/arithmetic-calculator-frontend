import axiosInstance from './axiosInstance';
import { API_ENDPOINTS } from './config';
import { FetchRecordsParams, DeleteRecordParams, FetchRecordsResponse } from '../../types/apiTypes';

/**
 * Fetches records based on the provided parameters.
 * @param params - The parameters for fetching records.
 * @returns A promise that resolves to the fetched records.
 * @throws An error if there was an issue fetching the records.
 */
export const fetchRecords = async (params: FetchRecordsParams): Promise<FetchRecordsResponse> => {
  try {
    const response = await axiosInstance.get<FetchRecordsResponse>(API_ENDPOINTS.USER_RECORDS, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Deletes a record.
 * @param params - The parameters for deleting the record.
 * @returns The response data from the server.
 * @throws If there is an error deleting the record.
 */
export const deleteRecord = async (params: DeleteRecordParams) => {
  try {
    const response = await axiosInstance.patch(API_ENDPOINTS.RECORD_DELETE, params, {
      params: params,
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
