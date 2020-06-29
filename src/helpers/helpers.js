export const getDate = () => {
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yy = today.getFullYear().toString().slice(-2)

  today = dd + '/' + mm + '/' + yy
  return today
}
