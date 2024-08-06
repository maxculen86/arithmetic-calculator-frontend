export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

export const API_ENDPOINTS = {
  OPERATION: process.env.REACT_APP_API_OPERATION_ENDPOINT || '/operation',
  UPDATE_BALANCE: process.env.REACT_APP_API_UPDATE_BALANCE_ENDPOINT || '/update-balance',
  USER_RECORDS: '/user-records',
  RECORD_DELETE: '/record-delete',
};

// Validate environment variables
if (!API_BASE_URL) {
  throw new Error('REACT_APP_API_BASE_URL is not defined in the environment');
}

if (!API_ENDPOINTS.OPERATION || !API_ENDPOINTS.UPDATE_BALANCE) {
  throw new Error('API endpoints are not properly defined in the environment');
}
