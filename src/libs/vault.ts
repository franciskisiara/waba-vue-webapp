export const store = (info: object) => {
  const data = { ...retrieve(), ...info }
  localStorage.setItem('rascan::waba', JSON.stringify(data))
}

export const retrieve = (key: string | null = null) => {
  const cache = localStorage.getItem('rascan::waba')
  const data = cache ? JSON.parse(cache) : {}
  return key ? data[key] : data
}

export const seal = (param: string = '') => {
  localStorage.removeItem('rascan::waba')
  const alert = param ? `?alert=${param}` : ''
  location.href = `/login${alert}`
}
