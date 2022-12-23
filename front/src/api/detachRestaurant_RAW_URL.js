import { getDomain } from './request'
export const detachRestaurant_RAW_URL = () => '/restaurant/{restaurantId}'

export const detachRestaurant_URL = (parameters = {}) => {
  let path = detachRestaurant_RAW_URL()
  let query = ''
  
  path = path.replace('{restaurantId}', `${parameters['restaurantId']}`)
    return getDomain() + path + query
}
