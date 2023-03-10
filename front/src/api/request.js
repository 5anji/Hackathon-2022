/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
let domain = ''
let axiosInstance = axios.create()
let resolver = null

/**
* Default domain, which will be used for all requests by api functions.
* @see setDomain
* @see availableDomains
*/
export const getDomain = () => {
  return domain
}

/**
 * Set default domain, for requests.
 *
 * @see getDomains
 * @see availableDomains
 */
export const setDomain = ($domain) => {
  domain = $domain
}

/**
 * Domains which was described in swaggger/open api
 */
export const availableDomains = () => {
  return []
}

/**
 * Axios singltone instance. Required to not modify all other axios instances. All modifications, like
 * global interceptors, can be applied safely to this instance, and they would't be applied to all other,
 * axios instances.
 * @see setAxiosInstance
 */
export const getAxiosInstance = () => {
  return axiosInstance
}

export const setAxiosInstance = ($axiosInstance) => {
  axiosInstance = $axiosInstance
}

/**
 *  Set global resolve function. This is useful, when you need to do some additional work, before resolve
 *  response.
 *  @param fn {Function} Function which must accept first argument response (axios response object),
 *                       second argument resolve function of promise, and third reject.
 */
export const setResponseResolver = (fn) => {
  resolver = fn
}

/**
 *  Helper function for methods
 */
export const applyQueryParameters = (query, parameters) => {
  if(parameters) {
    Object.keys(parameters).forEach(function(parameterName){
      query[parameterName] = parameters[parameterName]
    });
  }
}

export const stringifyHeaders = config => {
  if (config.headers && typeof config.headers === 'object') {
    config.headers = Object
      .entries(config.headers)
      .reduce((headers, entry) => {
        headers[entry[0]] = String(entry[1]);
        return headers
      }, {})
  }
}

/**
 *  Make final request, with provided arguments, this function mostly for internal use.
 */
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if ( keys.length > 0 ) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }

  // latest axios don't understand headers values which is not strings
  stringifyHeaders(config)

  let request
  if (body) {
    request = axiosInstance[method](queryUrl,body,config)
  } else if (method === 'get' || method === 'delete' || method === 'head' || method === 'option') {
    request = axiosInstance[method](queryUrl,config)
  } else {
    request = axiosInstance[method](queryUrl,qs.stringify(form),config)
  }

  const configResolver = (config && config.resolver)
  if (typeof resolver === 'function' || typeof configResolver === 'function') {
    return new Promise((resolve, reject) => {
      return request
        .then(response => {
          (resolver||configResolver)(response, resolve, reject)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  return request
}
