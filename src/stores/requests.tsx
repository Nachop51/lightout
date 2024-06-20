import { create } from 'zustand'
import type { LightoutRequest } from '../types.d'
import { persist } from 'zustand/middleware'
import { createId } from '@paralleldrive/cuid2'

interface RequestsState {
  requests: LightoutRequest[]
  selectedRequest: LightoutRequest | null
  addRequest: (request?: LightoutRequest) => void
  selectRequest: (request: LightoutRequest) => void
  deleteRequest: (request: LightoutRequest) => void
}

const initialRequests: LightoutRequest[] = [
  { id: createId(), host: 'http://localhost:5000/users', method: 'GET' },
  { id: createId(), name: 'My Request', host: 'http://localhost:5000', method: 'POST' },
  { id: createId(), host: 'http://localhost:5000', method: 'PATCH' }
]

export const useRequests = create<RequestsState>()(persist(
  (set) => ({
    requests: initialRequests,
    selectedRequest: null,
    addRequest: (request) => {
      if (!request) request = { id: createId(), name: 'New request', host: '', method: 'GET' }

      set((state) => ({
        requests: [...state.requests, request],
        selectedRequest: request
      }))
    },
    selectRequest: (request: LightoutRequest) => {
      set(() => ({
        selectedRequest: request
      }))
    },
    deleteRequest: (request: LightoutRequest) => {
      set((state) => ({
        selectedRequest: state.selectedRequest?.id === request.id ? null : state.selectedRequest,
        requests: state.requests.filter(({ id }) => id !== request.id)
      }
      ))
    }
  }),
  { name: 'requests' }
))
