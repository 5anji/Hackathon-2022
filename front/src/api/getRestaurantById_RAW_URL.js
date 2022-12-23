import { getDomain } from './request'
export const getRestaurantById_RAW_URL = () => '/restaurant'

export const getRestaurantById_URL = (parameters = {}) => {
  let path = getRestaurantById_RAW_URL()
  let query = ''
  
  return getDomain() + path + query
}
