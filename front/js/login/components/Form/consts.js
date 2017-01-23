import request from 'superagent'

export const submit = (name, pass) => {
  request
    .post('/api/session')
    .send({session: {name, pass}})
    .end((err, res) => {
      if (res.statusCode === 201) {
        document.cookie = `access_token=${res.body.data.token}`
        location.href = "/"
      } else {
      }
    })
}
