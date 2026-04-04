import axios, { AxiosError, AxiosResponse } from "axios";
import { axiosInstance } from "@/lib/axios";

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export class ApiService {
  static async get<T>(url: string, config = {}): Promise<T> {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.get(
        url,
        config
      );
      return response.data.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  static async post<T>(url: string, data: unknown, config = {}): Promise<T> {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.post(
        url,
        data,
        config
      );
      return response.data.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  static async put<T>(url: string, data: unknown, config = {}): Promise<T> {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.put(
        url,
        data,
        config
      );
      return response.data.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  static async delete<T>(url: string, config = {}): Promise<T> {
    try {
      const response: AxiosResponse<ApiResponse<T>> =
        await axiosInstance.delete(url, config);
      return response.data.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  static handleError(error: unknown): void {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiResponse<null>>;
      console.error("API Error:", axiosError.response?.data?.message || error.message);
    } else {
      console.error("Error:", error);
    }
  }
}
