import { AxiosError } from "axios";

export const getErrorMessage = (error: unknown, defultError: string) : string => {
  if (error instanceof AxiosError) {
    return error.response?.data?.issues?.[0]?.message || error.message || defultError;
  }

  if (error instanceof Error) {
    return error.message || defultError;
  }

  return defultError;
}