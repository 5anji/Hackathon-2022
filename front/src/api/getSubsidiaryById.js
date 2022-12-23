import { getDomain, request, applyQueryParameters } from './request'

/**
 * 
 * request: getSubsidiaryById
 * url: /subsidiary/{subsidiaryId}
 * @param subsidiaryId { String } ID of subsidiary to return
 */
export default function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config || {}
  let path = '/subsidiary/{subsidiaryId}'
  let body
  let queryParameters = {}
  let form = {}


  if(parameters['subsidiaryId'] === undefined) {
    return Promise.reject(new Error('Missing required String parameter: subsidiaryId'))
  }
  path = path.replace('{subsidiaryId}', `${parameters['subsidiaryId']}`)
  
  applyQueryParameters(queryParameters, parameters.$queryParameters)

  return request('get', domain + path, body, queryParameters, form, config)
}
