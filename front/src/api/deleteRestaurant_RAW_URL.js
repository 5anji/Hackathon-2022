import { getDomain } from './request'
export const deleteRestaurant_RAW_URL = () => '/restaurant/{restaurantId}'

export const deleteRestaurant_URL = (parameters = {}) => {
  let path = deleteRestaurant_RAW_URL()
  let query = ''
  
  path = path.replace('{restaurantId}', `${parameters['restaurantId']}`)
    return getDomain() + path + query
}
