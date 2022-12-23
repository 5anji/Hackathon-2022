import { getDomain } from './request'
export const postDrinkById_RAW_URL = () => '/drink/{drinkId}'

export const postDrinkById_URL = (parameters = {}) => {
  let path = postDrinkById_RAW_URL()
  let query = ''
  
  path = path.replace('{drinkId}', `${parameters['drinkId']}`)
    return getDomain() + path + query
}
