import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class RestClientService {
    private readonly baseUrl: string;
    private readonly apiKey: string;

    constructor(private readonly configService: ConfigService) {
        this.baseUrl = this.configService.get<string>('BASE_URL') || 'https://api.themoviedb.org/3';
        this.apiKey = this.configService.get<string>('API_KEY') || 'your_default_api_key';
    }

    async get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
        const response = await fetch(this._injectQueryParams(this._buildUrl(endpoint), params), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }

    async post<T>(endpoint: string, data: any): Promise<T> {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }

    private _buildUrl(endpoint: string): string {
        return `${this.baseUrl}${endpoint}`;
    }

    private _injectQueryParams(url: string, params?: Record<string, string>): string {
        const newParams = { ...params, language: 'pt-br' };
        const query = new URLSearchParams(newParams).toString();
        return `${url}?${query}`;
    }
}
