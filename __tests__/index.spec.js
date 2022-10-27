import Index from '@/pages/index.vue'

describe('pages/index.vue', () => {
  it('has a default value', () => {
    const defaultData = Index.data()
    expect(defaultData.imgHeight).toBe(500)
  })
})
