import request from 'superagent'

export const getItems = func => {
  request
    .get('/api/items')
    .end(func)
}
