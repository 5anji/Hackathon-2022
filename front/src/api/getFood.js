import { getDomain, request, applyQueryParameters } from './request'

/**
 * 
 * request: getFood
 * url: /food
 * @param pages { Number } The number of pages
 * @param nrOfItems { Number } The numbers of items to return
 */
export default function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config || {}
  let path = '/food'
  let body
  let queryParameters = {}
  let form = {}


  if(parameters['pages'] === undefined) {
    return Promise.reject(new Error('Missing required Number parameter: pages'))
  }
  if(parameters['pages'] !== undefined) {
    queryParameters['pages'] = parameters['pages']
  }     if(parameters['nrOfItems'] === undefined) {
    return Promise.reject(new Error('Missing required Number parameter: nrOfItems'))
  }
  if(parameters['nrOfItems'] !== undefined) {
    queryParameters['nrOfItems'] = parameters['nrOfItems']
  }   
  applyQueryParameters(queryParameters, parameters.$queryParameters)

  return request('get', domain + path, body, queryParameters, form, config)
}
