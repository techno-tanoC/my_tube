import request from 'superagent'

export const submit = (name, pass) => {
  request
    .post('/api/session')
    .send({session: {name, pass}})
    .end((err, res) => {
      if (res.statusCode === 201) {
        // 90 days
        document.cookie = `access_token=${res.body.data.token};max-age=${60 * 60 * 24 * 90}`
        location.href = "/"
      } else {
      }
    })
}
