import { getDomain, request, applyQueryParameters } from './request'

/**
 * 
 * request: getTagById
 * url: /tag/{tagId}
 * @param tagId { String } ID of the tag
 */
export default function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config || {}
  let path = '/tag/{tagId}'
  let body
  let queryParameters = {}
  let form = {}


  if(parameters['tagId'] === undefined) {
    return Promise.reject(new Error('Missing required String parameter: tagId'))
  }
  path = path.replace('{tagId}', `${parameters['tagId']}`)
  
  applyQueryParameters(queryParameters, parameters.$queryParameters)

  return request('get', domain + path, body, queryParameters, form, config)
}
