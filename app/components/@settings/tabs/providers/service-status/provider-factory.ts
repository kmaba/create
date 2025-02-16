import type { ProviderName, ProviderConfig, StatusCheckResult } from './types';
import { BaseProviderChecker } from './base-provider';
import { OpenRouterStatusChecker } from './providers/openrouter';

export class ProviderStatusCheckerFactory {
  private static _providerConfigs: Partial<Record<ProviderName, ProviderConfig>> = {
    OpenRouter: {
      statusUrl: 'https://status.openrouter.ai/',
      apiUrl: 'https://openrouter.ai/api/v1/models',
      headers: {},
      testModel: 'google/gemini-2.0-flash-lite-preview-02-05:free',
    },
  };

  static getChecker(provider: ProviderName): BaseProviderChecker {
    const config = this._providerConfigs[provider];

    if (!config) {
      throw new Error(`No configuration found for provider: ${provider}`);
    }

    switch (provider) {
      case 'OpenRouter':
        return new OpenRouterStatusChecker(config);
      default:
        return new (class extends BaseProviderChecker {
          async checkStatus(): Promise<StatusCheckResult> {
            const endpointStatus = await this.checkEndpoint(this.config.statusUrl);
            const apiStatus = await this.checkEndpoint(this.config.apiUrl);

            return {
              status: endpointStatus === 'reachable' && apiStatus === 'reachable' ? 'operational' : 'degraded',
              message: `Status page: ${endpointStatus}, API: ${apiStatus}`,
              incidents: ['Note: Limited status information due to CORS restrictions'],
            };
          }
        })(config);
    }
  }

  static getProviderNames(): ProviderName[] {
    return Object.keys(this._providerConfigs) as ProviderName[];
  }

  static getProviderConfig(provider: ProviderName): ProviderConfig {
    const config = this._providerConfigs[provider];

    if (!config) {
      throw new Error(`Unknown provider: ${provider}`);
    }

    return config;
  }
}
