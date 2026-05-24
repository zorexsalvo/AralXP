import { vi, beforeEach } from 'vitest'

let storageData: Record<string, unknown> = {}

const storageMock = {
  get: vi.fn((key: string | string[]) => {
    const keys = typeof key === 'string' ? [key] : key
    const result: Record<string, unknown> = {}
    keys.forEach(k => {
      if (k in storageData) {
        result[k] = storageData[k]
      }
    })
    return Promise.resolve(result)
  }),
  set: vi.fn((data: Record<string, unknown>) => {
    Object.assign(storageData, data)
    return Promise.resolve()
  }),
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
  storageData = {}
})
