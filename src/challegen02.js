const challenge02 = (codigo) => {  
  const splitCodigo = codigo.replaceAll(" ", 32).split(' ')
  const results = []

  const reducer = (string) => {
    if(string.length < 1) {
      return
    }
    const tres = string.slice(0, 3)
    const dos = string.slice(0, 2)
      
    if (tres <= 127){
      results.push(String.fromCharCode(tres))
      return (reducer(string.slice(3, string.length)))
    } else {
      results.push(String.fromCharCode(dos))
      return (reducer(string.slice(2, string.length)))
    }
      
  }

  splitCodigo.forEach((item) => {
    reducer(item) 
  })

  return results.join('')
}

export default challenge02