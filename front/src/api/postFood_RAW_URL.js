import { getDomain } from './request'
export const postFood_RAW_URL = () => '/food'

export const postFood_URL = (parameters = {}) => {
  let path = postFood_RAW_URL()
  let query = ''
  
  return getDomain() + path + query
}
