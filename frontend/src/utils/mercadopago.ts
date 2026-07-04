declare global {
  interface Window {
    MP_DEVICE_SESSION_ID?: string;
  }
}

export function getMpDeviceSessionId(): string | undefined {
  return window.MP_DEVICE_SESSION_ID;
}
