import { ElectronEvent } from '../electron/types';

import { processDeeplink } from './deeplink';

export function initElectron() {
  window.electron?.on(ElectronEvent.DEEPLINK, ({ url }: { url: string }) => {
    void processDeeplink(url, electronOpenUrl);
  });
}

export function electronOpenUrl(url: string) {
  window.open(url, '_blank');
}