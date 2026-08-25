import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.feddy.suite',
  appName: 'Feddy Suite',
  webDir: 'public',
  server: {
    url: 'https://feddy-suite.vercel.app',
    cleartext: true
  }
};

export default config;