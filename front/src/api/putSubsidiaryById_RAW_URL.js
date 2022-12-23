import { getDomain } from './request'
export const putSubsidiaryById_RAW_URL = () => '/subsidiary/{subsidiaryId}'

export const putSubsidiaryById_URL = (parameters = {}) => {
  let path = putSubsidiaryById_RAW_URL()
  let query = ''
  
  path = path.replace('{subsidiaryId}', `${parameters['subsidiaryId']}`)
    return getDomain() + path + query
}
