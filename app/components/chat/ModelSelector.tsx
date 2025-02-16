import { useEffect } from 'react';
import type { ProviderInfo } from '~/types/model';
import type { ModelInfo } from '~/lib/modules/llm/types';

// New constants for default provider and model
const DEFAULT_PROVIDER: ProviderInfo = { name: 'OpenRouter', staticModels: [] }; // ...other properties if needed...
const DEFAULT_MODEL = 'cognitivecomputations/dolphin3.0-r1-mistral-24b:free';

interface ModelSelectorProps {
  model?: string;
  setModel?: (model: string) => void;
  provider?: ProviderInfo;
  setProvider?: (provider: ProviderInfo) => void;
  modelList: ModelInfo[];
  providerList: ProviderInfo[];
  apiKeys: Record<string, string>;
  modelLoading?: string;
}

export const ModelSelector = ({ setModel, setProvider }: ModelSelectorProps) => {
  useEffect(() => {
    setProvider?.(DEFAULT_PROVIDER);
    setModel?.(DEFAULT_MODEL);
  }, [setProvider, setModel]);

  // Removed UI for model selection as it's now hardcoded.
  return null;
};
