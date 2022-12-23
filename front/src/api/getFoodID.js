import { getDomain, request, applyQueryParameters } from './request'

/**
 * 
 * request: getFoodID
 * url: /food/{foodId}
 * @param foodId { String } ID of food to return
 */
export default function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config || {}
  let path = '/food/{foodId}'
  let body
  let queryParameters = {}
  let form = {}


  if(parameters['foodId'] === undefined) {
    return Promise.reject(new Error('Missing required String parameter: foodId'))
  }
  path = path.replace('{foodId}', `${parameters['foodId']}`)
  
  applyQueryParameters(queryParameters, parameters.$queryParameters)

  return request('get', domain + path, body, queryParameters, form, config)
}
