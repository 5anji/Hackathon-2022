import { getDomain } from './request'
export const postTag_RAW_URL = () => '/tag'

export const postTag_URL = (parameters = {}) => {
  let path = postTag_RAW_URL()
  let query = ''
  
  return getDomain() + path + query
}
