import { getDomain } from './request'
export const putDrinkById_RAW_URL = () => '/drink/{drinkId}'

export const putDrinkById_URL = (parameters = {}) => {
  let path = putDrinkById_RAW_URL()
  let query = ''
  
  path = path.replace('{drinkId}', `${parameters['drinkId']}`)
    return getDomain() + path + query
}
