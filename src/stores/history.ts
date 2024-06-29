import { create } from 'zustand'
// import type { LightoutRequest } from '../types'
import { persist } from 'zustand/middleware'
import type { LightoutRequest, LightoutResponse } from '../types'

interface HistoryState {
  responses: Record<string, LightoutResponse>
  pushToHistory: (id: LightoutRequest['id'], response: LightoutResponse) => void
  clearHistory: () => void
}

const initialHistory: Record<string, LightoutResponse> = {}

export const useHistory = create<HistoryState>()(persist(
  (set) => ({
    responses: initialHistory,
    pushToHistory: (id, response) => {
      set((state) => ({
        responses: {
          ...state.responses,
          [id]: response
        }
      }))
    },
    clearHistory: () => {
      set({ responses: {} })
    }
  }),
  { name: 'history' }
))
