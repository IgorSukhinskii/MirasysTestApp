import Constants from 'expo-constants';

const baseUrl = Constants.expoConfig?.extra?.baseUrl;

/**
 * Custom error type for errors thrown by `fetchHelper`.
 */
export class FetchError extends Error {
  /** A short, machine-readable error code. */
  code: 'NETWORK_ERROR' | 'HTTP_ERROR' | 'PARSE_ERROR';
  /** The HTTP status code if available, otherwise undefined. */
  status?: number;
  /** Raw response body text if available (useful for debugging). */
  responseBody?: string;
  /** Response headers if available. */
  headers?: Headers;

  constructor(
    code: FetchError['code'],
    message: string,
    options?: { status?: number; responseBody?: string; headers?: Headers }
  ) {
    super(message);
    this.name = 'FetchError';
    this.code = code;
    this.status = options?.status;
    this.responseBody = options?.responseBody;
    this.headers = options?.headers;
  }
}

/**
 * Sends a POST request to a specified API endpoint and returns the parsed JSON response.
 *
 * Handles network, HTTP, and parsing errors consistently by throwing a structured `FetchError`.
 *
 * @template TResponse - The expected type of the response data.
 * @param {string} endpoint - The API endpoint to call (relative to `baseUrl`).
 * @param {any} body - The request payload to send in the POST body. Will be serialized as JSON.
 * @returns {Promise<TResponse>} A promise that resolves with the parsed JSON response of type
 * `TResponse` if successful, or rejects with a `FetchError` describing the error.
 *
 * @throws {FetchError} With:
 * - `code = 'NETWORK_ERROR'` if the request failed (e.g., no internet).
 * - `code = 'HTTP_ERROR'` if the response status is not OK (non-2xx). Includes status, headers, and raw body.
 * - `code = 'PARSE_ERROR'` if the response could not be parsed as JSON.
 *
 * @example
 * interface User {
 *   id: number;
 *   name: string;
 * }
 *
 * apiFetch<User>('/users', { id: 1 })
 *   .then(user => console.log(user.name))
 *   .catch((err: FetchError) => {
 *     console.error(`[${err.code}] ${err.message}`);
 *     if (err.code === 'HTTP_ERROR') {
 *       console.error('Status:', err.status);
 *       console.error('Response:', err.responseBody);
 *     }
 *   });
 */
export async function apiFetch<TResponse>(endpoint: string, body: any): Promise<TResponse> {
  try {
    const url = new URL(endpoint, baseUrl);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const rawText = await response.text(); // Read the body once safely

    if (!response.ok) {
      throw new FetchError('HTTP_ERROR', `Request failed with status ${response.status}`, {
        status: response.status,
        responseBody: rawText,
        headers: response.headers,
      });
    }

    try {
      return JSON.parse(rawText) as TResponse;
    } catch {
      throw new FetchError('PARSE_ERROR', 'Failed to parse JSON response', {
        responseBody: rawText,
        headers: response.headers,
      });
    }
  } catch (err: any) {
    if (err instanceof FetchError) {
      throw err; // already structured
    }
    throw new FetchError('NETWORK_ERROR', err?.message || 'Network request failed');
  }
}
