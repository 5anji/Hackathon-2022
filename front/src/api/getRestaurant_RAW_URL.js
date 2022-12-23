import { getDomain } from './request'
export const getRestaurant_RAW_URL = () => '/restaurant/{restaurantId}'

export const getRestaurant_URL = (parameters = {}) => {
  let path = getRestaurant_RAW_URL()
  let query = ''
  
  path = path.replace('{restaurantId}', `${parameters['restaurantId']}`)
    return getDomain() + path + query
}
