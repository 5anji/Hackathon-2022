import { getDomain } from './request'
export const getFoodID_RAW_URL = () => '/food/{foodId}'

export const getFoodID_URL = (parameters = {}) => {
  let path = getFoodID_RAW_URL()
  let query = ''
  
  path = path.replace('{foodId}', `${parameters['foodId']}`)
    return getDomain() + path + query
}
