import type { TabType } from './types';

export const TAB_ICONS: Record<TabType, string> = {
  profile: 'i-ph:user-circle-fill',
  settings: 'i-ph:gear-six-fill',
  features: 'i-ph:star-fill',
  data: 'i-ph:database-fill',
  'service-status': 'i-ph:activity-bold',
  connection: 'i-ph:wifi-high-fill',
  debug: 'i-ph:bug-fill',
  'event-logs': 'i-ph:list-bullets-fill',
  'task-manager': 'i-ph:chart-line-fill',
};

export const TAB_LABELS: Record<TabType, string> = {
  profile: 'Profile',
  settings: 'Settings',
  features: 'Features',
  data: 'Data Management',
  'service-status': 'Service Status',
  connection: 'Connection',
  debug: 'Debug',
  'event-logs': 'Event Logs',
  'task-manager': 'Task Manager',
};

export const TAB_DESCRIPTIONS: Record<TabType, string> = {
  profile: 'Manage your profile and account settings',
  settings: 'Configure application preferences',
  features: 'Explore new and upcoming features',
  data: 'Manage your data and storage',
  'service-status': 'Monitor cloud LLM service status',
  connection: 'Check connection status and settings',
  debug: 'Debug tools and system information',
  'event-logs': 'View system events and logs',
  'task-manager': 'Monitor system resources and processes',
};

export const DEFAULT_TAB_CONFIG = [
  // User Window Tabs (Always visible by default)
  { id: 'features', visible: true, window: 'user' as const, order: 0 },
  { id: 'data', visible: true, window: 'user' as const, order: 1 },
  { id: 'connection', visible: true, window: 'user' as const, order: 2 },
  { id: 'event-logs', visible: true, window: 'user' as const, order: 3 },

  // User Window Tabs (In dropdown, initially hidden)
  { id: 'profile', visible: false, window: 'user' as const, order: 4 },
  { id: 'settings', visible: false, window: 'user' as const, order: 5 },
  { id: 'task-manager', visible: false, window: 'user' as const, order: 6 },
  { id: 'service-status', visible: false, window: 'user' as const, order: 7 },

  // User Window Tabs (Hidden)
  { id: 'debug', visible: false, window: 'user' as const, order: 8 },

  // Developer Window Tabs (All visible by default)
  { id: 'profile', visible: true, window: 'user' as const, order: 4 },
  { id: 'settings', visible: true, window: 'user' as const, order: 5 },
  { id: 'task-manager', visible: true, window: 'user' as const, order: 6 },
];
