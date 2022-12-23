import { getDomain } from './request'
export const getSubsidiaryById_RAW_URL = () => '/subsidiary/{subsidiaryId}'

export const getSubsidiaryById_URL = (parameters = {}) => {
  let path = getSubsidiaryById_RAW_URL()
  let query = ''
  
  path = path.replace('{subsidiaryId}', `${parameters['subsidiaryId']}`)
    return getDomain() + path + query
}
