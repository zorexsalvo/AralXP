import { vi, beforeEach } from 'vitest'

const storageMock = {
  get: vi.fn(),
  set: vi.fn(),
  remove: vi.fn(),
  clear: vi.fn()
}

Object.defineProperty(globalThis, 'chrome', {
  value: {
    storage: {
      local: storageMock
    }
  },
  writable: true
})

beforeEach(() => {
  vi.clearAllMocks()
})
