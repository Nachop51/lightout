import { create } from 'zustand'
// import type { LightoutRequest } from '../types'
import { persist } from 'zustand/middleware'
import type { LightoutRequest, LightoutResponse } from '../types'

interface HistoryState {
  responses: Record<string, LightoutResponse>
  pushToHistory: (id: LightoutRequest['id'], response: Response) => void
  clearHistory: () => void
}

const initialHistory: Record<string, LightoutResponse> = {}

export const useHistory = create<HistoryState>()(persist(
  (set) => ({
    responses: initialHistory,
    pushToHistory: (id, response) => {
      response.text().then((body) => {
        set((state) => ({
          responses: {
            ...state.responses,
            [id]: {
              status: response.status,
              statusText: response.statusText,
              headers: Object.fromEntries(response.headers.entries()),
              body,
              cookies: {}
            }
          }
        }))
      })
    },
    clearHistory: () => {
      set({ responses: {} })
    }
  }),
  { name: 'history' }
))
