export function isTestAccessToken(): boolean {
  return (process.env.MERCADO_PAGO_ACCESS_TOKEN || '').startsWith('TEST-');
}

export function getMpCheckoutUrl(response: {
  init_point?: string;
  sandbox_init_point?: string;
}): string | undefined {
  if (isTestAccessToken()) {
    return response.sandbox_init_point || response.init_point;
  }
  return response.init_point || response.sandbox_init_point;
}
