import { create } from 'zustand'
import type { LightoutRequest } from '../types'
import { persist } from 'zustand/middleware'
import { createId } from '@paralleldrive/cuid2'

interface RequestsState {
  requests: Record<string, LightoutRequest>
  selectedRequest: LightoutRequest | null
  addRequest: (request?: LightoutRequest) => void
  selectRequest: (id: string) => void
  deleteRequest: (id: string) => void
  updateRequest: (request: LightoutRequest) => void
}

const initialRequests: Record<string, LightoutRequest> = {
  1: {
    id: '1',
    host: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET'
  },
  2: {
    id: '2',
    host: 'https://jsonplaceholder.typicode.com/posts',
    method: 'POST'
  },
  3: {
    id: '3',
    host: 'https://jsonplaceholder.typicode.com/posts',
    method: 'PUT'
  }
}

export const useRequests = create<RequestsState>()(persist(
  (set) => ({
    requests: initialRequests,
    selectedRequest: null,
    addRequest: (request) => {
      if (!request) request = { id: createId(), host: '', method: 'GET' }

      set((state) => ({
        requests: {
          ...state.requests,
          [request.id]: request
        },
        selectedRequest: request
      }))
    },
    selectRequest: (id) => {
      set((state) => {
        return { selectedRequest: state.requests[id] }
      })
    },
    deleteRequest: (id) => {
      set((state) => ({
        requests: Object.fromEntries(Object.entries(state.requests).filter(([key]) => key !== id)),
        selectedRequest: state.selectedRequest?.id === id ? null : state.selectedRequest
      }))
    },
    updateRequest: (request) => {
      set((state) => ({
        selectedRequest: request,
        requests: {
          ...state.requests,
          [request.id]: request
        }
      }))
    }
  }),
  { name: 'requests' }
))
