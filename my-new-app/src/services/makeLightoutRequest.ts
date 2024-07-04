import type { LightoutRequest, LightoutResponse } from '@/types.d'

export function makeLightoutRequest (request: LightoutRequest): Promise<LightoutResponse> {
  return window.electronAPI.makeRequest(request)
}
