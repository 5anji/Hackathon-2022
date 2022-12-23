import { getDomain } from './request'
export const getFood_RAW_URL = () => '/food'

export const getFood_URL = (parameters = {}) => {
  let path = getFood_RAW_URL()
  let query = ''
  let queryParameters = {}
  

  if (parameters['pages'] !== undefined) {
    queryParameters['pages'] = parameters['pages']
  }
  if (parameters['nrOfItems'] !== undefined) {
    queryParameters['nrOfItems'] = parameters['nrOfItems']
  }
  const keys = Object.keys(queryParameters)
  query = (keys.length ? '?' : '') + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&'))
  return getDomain() + path + query
}
