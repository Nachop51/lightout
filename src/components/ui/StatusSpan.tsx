interface StatusSpanProps {
  status: number
}

const StatusSpan = ({ status }: StatusSpanProps) => {
  let className = ''
  let text = ''

  if (status >= 200 && status < 300) {
    className = 'text-green-300'

    if (status === 200) {
      text = 'OK'
    } else if (status === 201) {
      text = 'Created'
    } else if (status === 202) {
      text = 'Accepted'
    } else if (status === 203) {
      text = 'Non-Authoritative Information'
    } else if (status === 204) {
      text = 'No Content'
    } else if (status === 205) {
      text = 'Reset Content'
    } else if (status === 206) {
      text = 'Partial Content'
    } else if (status === 207) {
      text = 'Multi-Status'
    } else if (status === 208) {
      text = 'Already Reported'
    } else if (status === 226) {
      text = 'IM Used'
    }
  } else if (status >= 300 && status < 400) {
    className = 'text-blue-500'
    if (status === 301) {
      text = 'Moved Permanently'
    } else if (status === 302) {
      text = 'Found'
    } else if (status === 303) {
      text = 'See Other'
    } else if (status === 304) {
      text = 'Not Modified'
    } else if (status === 307) {
      text = 'Temporary Redirect'
    } else if (status === 308) {
      text = 'Permanent Redirect'
    } else {
      text = 'Redirect'
    }
  } else if (status >= 400 && status < 500) {
    className = 'text-red-500'
    if (status === 400) {
      text = 'Bad Request'
    } else if (status === 401) {
      text = 'Unauthorized'
    } else if (status === 402) {
      text = 'Payment Required'
    } else if (status === 403) {
      text = 'Forbidden'
    } else if (status === 404) {
      text = 'Not Found'
    } else if (status === 405) {
      text = 'Method Not Allowed'
    } else if (status === 406) {
      text = 'Not Acceptable'
    } else if (status === 407) {
      text = 'Proxy Authentication Required'
    } else if (status === 408) {
      text = 'Request Timeout'
    } else if (status === 409) {
      text = 'Conflict'
    } else if (status === 410) {
      text = 'Gone'
    } else if (status === 411) {
      text = 'Length Required'
    } else if (status === 412) {
      text = 'Precondition Failed'
    } else if (status === 413) {
      text = 'Payload Too Large'
    } else if (status === 414) {
      text = 'URI Too Long'
    } else if (status === 415) {
      text = 'Unsupported Media Type'
    } else if (status === 416) {
      text = 'Range Not Satisfiable'
    } else if (status === 417) {
      text = 'Expectation Failed'
    } else if (status === 418) {
      text = "I'm a teapot"
    } else if (status === 421) {
      text = 'Misdirected Request'
    } else if (status === 422) {
      text = 'Unprocessable Entity'
    } else if (status === 423) {
      text = 'Locked'
    } else if (status === 424) {
      text = 'Failed Dependency'
    } else if (status === 425) {
      text = 'Too Early'
    } else if (status === 426) {
      text = 'Upgrade Required'
    } else if (status === 428) {
      text = 'Precondition Required'
    } else if (status === 429) {
      text = 'Too Many Requests'
    } else if (status === 431) {
      text = 'Request Header Fields Too Large'
    }
  } else {
    className = 'text-yellow-500'
    if (status === 500) {
      text = 'Internal Server Error'
    } else if (status === 501) {
      text = 'Not Implemented'
    } else if (status === 502) {
      text = 'Bad Gateway'
    } else if (status === 503) {
      text = 'Service Unavailable'
    } else if (status === 504) {
      text = 'Gateway Timeout'
    } else if (status === 505) {
      text = 'HTTP Version Not Supported'
    } else if (status === 506) {
      text = 'Variant Also Negotiates'
    } else if (status === 507) {
      text = 'Insufficient Storage'
    } else if (status === 508) {
      text = 'Loop Detected'
    } else if (status === 510) {
      text = 'Not Extended'
    } else if (status === 511) {
      text = 'Network Authentication Required'
    }
  }

  return (
    <span className={className}>{status} {text}</span>
  )
}

export default StatusSpan
