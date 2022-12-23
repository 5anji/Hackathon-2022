import { getDomain, request, applyQueryParameters } from './request'

/**
 * 
 * request: deleteRestaurant
 * url: /restaurant/{restaurantId}
 * @param restaurantId { String } ID of restaurant to return
 */
export default function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config || {}
  let path = '/restaurant/{restaurantId}'
  let body
  let queryParameters = {}
  let form = {}


  if(parameters['restaurantId'] === undefined) {
    return Promise.reject(new Error('Missing required String parameter: restaurantId'))
  }
  path = path.replace('{restaurantId}', `${parameters['restaurantId']}`)
  
  applyQueryParameters(queryParameters, parameters.$queryParameters)

  return request('delete', domain + path, body, queryParameters, form, config)
}
