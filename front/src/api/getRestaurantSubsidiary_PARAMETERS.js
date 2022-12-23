export default {
  restaurantId: {
      "in": "path",
      "name": "restaurantId",
      "description": "ID of restaurant to return",
      "required": true,
      "schema": {"type":"string","format":"uuid"},
      "camelCaseName": "restaurantId"
  },  pages: {
      "in": "query",
      "name": "pages",
      "required": true,
      "schema": {"type":"integer"},
      "description": "The number of pages",
      "camelCaseName": "pages"
  },  nrOfItems: {
      "in": "query",
      "name": "nrOfItems",
      "required": true,
      "schema": {"type":"integer"},
      "description": "The numbers of items to return",
      "camelCaseName": "nrOfItems"
  }}
