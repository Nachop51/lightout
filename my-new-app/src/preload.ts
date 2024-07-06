// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron'
import type { LightoutRequest, LightoutResponse } from './types.d'

contextBridge.exposeInMainWorld('electronAPI', {
  makeRequest: async (request: LightoutRequest): Promise<LightoutResponse> => {
    const res = await ipcRenderer.invoke('make-request', request)

    console.log(res)

    return res
  }
})
