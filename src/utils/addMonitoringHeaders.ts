const INT_VERSION = '__current_worker_version__'
const HEADER_NAME = 'ii'

function getHeaderValue(type: 'procdn' | 'ingress'): string {
  return `fingerprintjs-pro-cloudflare/${INT_VERSION}/${type}`
}

export function addMonitoringHeadersForProCDN(url: URL) {
  url.searchParams.append(HEADER_NAME, getHeaderValue('procdn'))
}

export function addMonitoringHeadersForVisitorIdRequest(url: URL) {
  url.searchParams.append(HEADER_NAME, getHeaderValue('ingress'))
}
