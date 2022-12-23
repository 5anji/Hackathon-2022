import { getDomain } from './request'
export const postSubsidiary_RAW_URL = () => '/subsidiary'

export const postSubsidiary_URL = (parameters = {}) => {
  let path = postSubsidiary_RAW_URL()
  let query = ''
  
  return getDomain() + path + query
}
