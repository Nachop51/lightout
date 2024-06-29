import type { LightoutRequest, LightoutResponse } from '../types'

export async function makeLightoutRequest (request: LightoutRequest): Promise<LightoutResponse> {
  let res: Response | null = null

  const start = performance.now()

  try {
    res = await fetch(request.host, {
      method: request.method,
      headers: {
        host: 'https://jsonplaceholder.typicode.com',
        'User-Agent': 'Lightout/1.0',
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br'
      },
      body: request.body
    })
  } catch (error) {
    console.error(error)
  }

  const timeTaken = performance.now() - start

  if (res == null) {
    return null
  }

  console.log(res.headers.get('Date'))

  res.headers.forEach((value, key) => {
    console.log(`${key}: ${value}`)
  })

  const cookies = Object.fromEntries(res.headers.getSetCookie().map(cookie => {
    const [key, value] = cookie.split(';')[0].split('=')
    return [key, value]
  }))

  const body = await res.text()

  const response: LightoutResponse = {
    status: res.status,
    statusText: res.statusText,
    timeTaken,
    headers: Object.fromEntries(res.headers.entries()),
    cookies,
    body
  }

  return response
}
