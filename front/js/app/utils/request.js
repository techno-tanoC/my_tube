import request from 'superagent'

const accessToken = () => {
  return document.cookie.split("=")[1]
}

export const getItems = func => {
  request
    .get('/api/items')
    .set("x-access-token", accessToken())
    .end(func)
}

export const createItem = (title, url, func) => {
  request
    .post('/api/items')
    .set("x-access-token", accessToken())
    .send({item: {title, url}})
    .end(func)
}

export const deleteItem = (id, func) => {
  request
    .del(`/api/items/${id}`)
    .set("x-access-token", accessToken())
    .end(func)
}

export const logout = () => {
  request
    .del('/api/session')
    .set("x-access-token", accessToken())
    .end((err, res) => {
      if (res.statusCode === 204) {
        document.cookie = "access_token="
        location.href = "/login"
      }
    })
}
