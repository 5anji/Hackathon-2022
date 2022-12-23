import { getDomain } from './request'
export const putFoodID_RAW_URL = () => '/food/{foodId}'

export const putFoodID_URL = (parameters = {}) => {
  let path = putFoodID_RAW_URL()
  let query = ''
  
  path = path.replace('{foodId}', `${parameters['foodId']}`)
    return getDomain() + path + query
}
