import { getDomain, request, applyQueryParameters } from './request'

/**
 * 
 * request: postDrink
 * url: /drink
 */
export default function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config || {}
  let path = '/drink'
  let body
  let queryParameters = {}
  let form = {}



  body = parameters.body || parameters.requestBody

  if (body === undefined) {
    return Promise.reject(new Error('Missing required parameter: body or requestBody'))
  }
  
  (config.headers !== undefined) ? (config.headers['Content-Type'] = 'application/json') : (config['headers'] = {'Content-Type': 'application/json' })

  applyQueryParameters(queryParameters, parameters.$queryParameters)

  return request('post', domain + path, body, queryParameters, form, config)
}
