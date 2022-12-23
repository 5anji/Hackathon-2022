import { getDomain } from './request'
export const getDrinkById_RAW_URL = () => '/drink/{drinkId}'

export const getDrinkById_URL = (parameters = {}) => {
  let path = getDrinkById_RAW_URL()
  let query = ''
  
  path = path.replace('{drinkId}', `${parameters['drinkId']}`)
    return getDomain() + path + query
}
