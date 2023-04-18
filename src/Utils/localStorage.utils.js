
export const updateLocalStorage = (identifier, todosArray) => {
  window.localStorage.setItem(identifier, JSON.stringify(todosArray))
}

export const getFromLocalStorage = (identifier) => {
  return window.localStorage.getItem(identifier)
}
