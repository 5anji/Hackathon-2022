import { getDomain } from './request'
export const deleteFoodID_RAW_URL = () => '/food/{foodId}'

export const deleteFoodID_URL = (parameters = {}) => {
  let path = deleteFoodID_RAW_URL()
  let query = ''
  
  path = path.replace('{foodId}', `${parameters['foodId']}`)
    return getDomain() + path + query
}
