import MockAdapter from 'axios-mock-adapter'

import { instance, request } from './request'

describe('request function', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(instance)
  })

  afterEach(() => {
    mock.resetHistory()
  })

  it('should allow to send a get request to specified url', async () => {
    const url = '/next?q=error'

    mock.onGet(url).reply(200, {})

    await request(url, {})

    expect(mock.history.get[0].url).toEqual(url)
  })

  it('should handle 404 error', async () => {
    mock.onGet('').reply(404)
    try {
      await request('', {})
    } catch (e) {
      expect(e.status).toEqual(404)
    }
  })

  it('should handle 500 error', async () => {
    mock.onGet('').reply(500, {})

    try {
      await request('', {})
    } catch (e) {
      expect(e.status).toEqual(500)
    }
  })

  it('should allow to config query params', async () => {
    mock.onGet('/?key=value').reply(200, {})

    await request('', { query: { key: 'value' } })

    expect(mock.history.get[0].url).toEqual('?key=value')
  })

  it('should handle timeout', async () => {
    mock.onGet('').reply(408)
    try {
      await request('', {})
    } catch (e) {
      expect(e.status).toEqual(408)
    }
  })

  it('should handle multipart post request', async () => {
    const response = { msg: 'resource created' }
    const data = new FormData()
    data.append('id', '25')

    mock.onPost('').reply(201, response)

    const result = await request('', {
      method: 'post',
      multipart: true,
      data
    })

    expect(result).toEqual(response)
    expect(mock.history.post[0].headers['Content-Type']).toEqual('multipart/form-data')
  })
})
