import request from 'superagent'

export const getItems = func => {
  request
    .get('/api/items')
    .end(func)
}

export const deleteItem = (id, func) => {
  request
    .del(`/api/items/${id}`)
    .end(func)
}
