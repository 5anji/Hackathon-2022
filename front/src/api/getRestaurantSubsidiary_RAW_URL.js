import { getDomain } from './request'
export const getRestaurantSubsidiary_RAW_URL = () => '/restaurant/{restaurantId}/subsidiary'

export const getRestaurantSubsidiary_URL = (parameters = {}) => {
  let path = getRestaurantSubsidiary_RAW_URL()
  let query = ''
  let queryParameters = {}
  
  path = path.replace('{restaurantId}', `${parameters['restaurantId']}`)
  
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
