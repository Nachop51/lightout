import { twMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx'
import { CookieAttributes, LightoutRequest } from '@/types.d'

export function cn (...classes: ClassValue[]) {
  return twMerge(clsx(...classes))
}

export function getStatusMeaning (status: number) {
  if (status >= 100 && status < 200) {
    if (status === 100) {
      return 'Continue'
    } else if (status === 101) {
      return 'Switching Protocols'
    } else if (status === 102) {
      return 'Processing'
    } else if (status === 103) {
      return 'Early Hints'
    }
  } else if (status >= 200 && status < 300) {
    if (status === 200) {
      return 'OK'
    } else if (status === 201) {
      return 'Created'
    } else if (status === 202) {
      return 'Accepted'
    } else if (status === 203) {
      return 'Non-Authoritative Information'
    } else if (status === 204) {
      return 'No Content'
    } else if (status === 205) {
      return 'Reset Content'
    } else if (status === 206) {
      return 'Partial Content'
    } else if (status === 207) {
      return 'Multi-Status'
    } else if (status === 208) {
      return 'Already Reported'
    } else if (status === 226) {
      return 'IM Used'
    }
  } else if (status >= 300 && status < 400) {
    if (status === 301) {
      return 'Moved Permanently'
    } else if (status === 302) {
      return 'Found'
    } else if (status === 303) {
      return 'See Other'
    } else if (status === 304) {
      return 'Not Modified'
    } else if (status === 307) {
      return 'Temporary Redirect'
    } else if (status === 308) {
      return 'Permanent Redirect'
    } else {
      return 'Redirect'
    }
  } else if (status >= 400 && status < 500) {
    if (status === 400) {
      return 'Bad Request'
    } else if (status === 401) {
      return 'Unauthorized'
    } else if (status === 402) {
      return 'Payment Required'
    } else if (status === 403) {
      return 'Forbidden'
    } else if (status === 404) {
      return 'Not Found'
    } else if (status === 405) {
      return 'Method Not Allowed'
    } else if (status === 406) {
      return 'Not Acceptable'
    } else if (status === 407) {
      return 'Proxy Authentication Required'
    } else if (status === 408) {
      return 'Request Timeout'
    } else if (status === 409) {
      return 'Conflict'
    } else if (status === 410) {
      return 'Gone'
    } else if (status === 411) {
      return 'Length Required'
    } else if (status === 412) {
      return 'Precondition Failed'
    } else if (status === 413) {
      return 'Payload Too Large'
    } else if (status === 414) {
      return 'URI Too Long'
    } else if (status === 415) {
      return 'Unsupported Media Type'
    } else if (status === 416) {
      return 'Range Not Satisfiable'
    } else if (status === 417) {
      return 'Expectation Failed'
    } else if (status === 418) {
      return "I'm a teapot"
    } else if (status === 421) {
      return 'Misdirected Request'
    } else if (status === 422) {
      return 'Unprocessable Entity'
    } else if (status === 423) {
      return 'Locked'
    } else if (status === 424) {
      return 'Failed Dependency'
    } else if (status === 425) {
      return 'Too Early'
    } else if (status === 426) {
      return 'Upgrade Required'
    } else if (status === 428) {
      return 'Precondition Required'
    } else if (status === 429) {
      return 'Too Many Requests'
    } else if (status === 431) {
      return 'Request Header Fields Too Large'
    }
  } else {
    if (status === 500) {
      return 'Internal Server Error'
    } else if (status === 501) {
      return 'Not Implemented'
    } else if (status === 502) {
      return 'Bad Gateway'
    } else if (status === 503) {
      return 'Service Unavailable'
    } else if (status === 504) {
      return 'Gateway Timeout'
    } else if (status === 505) {
      return 'HTTP Version Not Supported'
    } else if (status === 506) {
      return 'Variant Also Negotiates'
    } else if (status === 507) {
      return 'Insufficient Storage'
    } else if (status === 508) {
      return 'Loop Detected'
    } else if (status === 510) {
      return 'Not Extended'
    } else if (status === 511) {
      return 'Network Authentication Required'
    }
  }

  return 'Unknown'
}

export function resolveBody (request: LightoutRequest) {
  const { method, body } = request

  if (method === 'GET' || method === 'HEAD') {
    return undefined
  }

  return JSON.stringify(body)
}

export function getCookiesFromResponse (response: Response): CookieAttributes[] {
  const cookiesArray: CookieAttributes[] = []

  // Get all 'set-cookie' headers
  const setCookieHeaders = response.headers.get('set-cookie')
  if (setCookieHeaders) {
    // Split the header into individual cookies, each separated by a comma if not within quotes
    const rawCookies = setCookieHeaders.split(/,(?=[^;]*=)/)

    rawCookies.forEach(cookieString => {
      const parts = cookieString.split(';').map(part => part.trim())
      const [nameValuePair, ...attributes] = parts
      const [name, value] = nameValuePair.split('=')

      if (name && value) {
        const cookieAttributes: CookieAttributes = { name, value }

        attributes.forEach(attributeString => {
          const [attributeName, attributeValue] = attributeString.split('=')
          if (attributeName.toLowerCase() === 'secure') {
            cookieAttributes.secure = true
          } else if (attributeName.toLowerCase() === 'httponly') {
            cookieAttributes.httponly = true
          } else if (attributeName && attributeValue) {
            cookieAttributes[attributeName.toLowerCase()] = attributeValue
          }
        })

        cookiesArray.push(cookieAttributes)
      }
    })
  }

  return cookiesArray
}
