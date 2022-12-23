import { getDomain } from './request'
export const getTagById_RAW_URL = () => '/tag/{tagId}'

export const getTagById_URL = (parameters = {}) => {
  let path = getTagById_RAW_URL()
  let query = ''
  
  path = path.replace('{tagId}', `${parameters['tagId']}`)
    return getDomain() + path + query
}
