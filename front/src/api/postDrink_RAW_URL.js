import { getDomain } from './request'
export const postDrink_RAW_URL = () => '/drink'

export const postDrink_URL = (parameters = {}) => {
  let path = postDrink_RAW_URL()
  let query = ''
  
  return getDomain() + path + query
}
