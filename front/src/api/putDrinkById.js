import { getDomain, request, applyQueryParameters } from './request'

/**
 * 
 * request: putDrinkById
 * url: /drink/{drinkId}
 * @param drinkId { String } ID of the drink
 */
export default function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config || {}
  let path = '/drink/{drinkId}'
  let body
  let queryParameters = {}
  let form = {}


  if(parameters['drinkId'] === undefined) {
    return Promise.reject(new Error('Missing required String parameter: drinkId'))
  }
  path = path.replace('{drinkId}', `${parameters['drinkId']}`)
  
  applyQueryParameters(queryParameters, parameters.$queryParameters)

  return request('put', domain + path, body, queryParameters, form, config)
}
