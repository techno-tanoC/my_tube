import {parse} from 'query-string'

export const thumb = url => {
  const query = url.split("?")[1]
  return `http://i.ytimg.com/vi/${parse(query).v}/mqdefault.jpg`
}
