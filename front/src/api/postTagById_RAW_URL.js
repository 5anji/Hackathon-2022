import { getDomain } from './request'
export const postTagById_RAW_URL = () => '/tag/{tagId}'

export const postTagById_URL = (parameters = {}) => {
  let path = postTagById_RAW_URL()
  let query = ''
  
  path = path.replace('{tagId}', `${parameters['tagId']}`)
    return getDomain() + path + query
}
