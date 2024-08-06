export interface OperationResponse {
  result: string;
}

export interface UpdateBalanceRequest {
  userId: string;
  amount: number;
}

export interface UpdateBalanceResponse {
  newBalance: number;
}

export interface FetchRecordsParams {
  userId: string;
  operationId?: string;
  page: number;
  startDate?: string;
  endDate?: string;
  rowsPerPage?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  searchString?: string;
}

export interface DeleteRecordParams {
  userId: string;
  recordId: string;
}

export interface FetchRecordsResponse {
  items: any[];
  page: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  totalCount: number;
}