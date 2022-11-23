import { describe, expect, it } from 'vitest'
import challenge02 from '../src/challegen02'

// Reto 2: ¡Atrapa a esos ciber criminales!
// Problema
// Un grupo de ciber criminales están usando mensajes encriptados para comunicarse. El FBI nos ha pedido ayuda para descifrarlos.
// Los mensajes son cadenas de texto que incluyen números enteros muy largos y espacios en blanco. Aunque los números no parecen tener sentido... una chica llamada Alice ha descubierto que podrían usar el código ASCII de las letras en minúscula.
// Con su método ha conseguido descifrar estos mensajes:

// "109105100117" -> midu
// "9911110010110998101114" -> codember
// "9911110010110998101114 109105100117" -> codember midu
// "11210897121 116101116114105115" -> play tetris
// Pero han interceptado un mensaje más largo que no han podido y nos han dicho que es muy importante que lo descifremos:

// 11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101

// Ahora que ya sabes esto, https://codember.dev/encrypted.txt

// Pistas
// Recuerda que los mensajes son cadenas de texto conformadas por números y espacios en blanco.
// Parece que los números tienen algo que ver con el código ASCII.
// Los espacios en blanco parece que son simplemente espacios...
// Cómo enviar la solución
// Usa el comando "submit" para enviar tu solución con la frase descifrada, en minúsculas y respetando los espacios en blanco. Por ejemplo:

// $ submit this is fine

describe('desencriptar el mensaje', () => {
  it ('test midu', () => {
    
    const desencripterCode = challenge02("109105100117")
    expect(desencripterCode).toBe('midu')
  })

  it ('test codember', () => {
    const desencripterCode = challenge02("9911110010110998101114")
    expect(desencripterCode).toBe('codember')
  })

  it ('test codember midu', () => {
    const desencripterCode = challenge02("9911110010110998101114 109105100117")    
    expect(desencripterCode).toBe('codember midu')
  })

  it ('test play tetris', () => {
    const desencripterCode = challenge02("11210897121 116101116114105115")    
    expect(desencripterCode).toBe('play tetris')
  })

  // it ('mail', () => {
  //   const desencripterCode = challenge02("83101 113117105101110 101114101115 84101 9911111011112299111 84117 110111 109101 9911111011199101115 97 109105 84101 101115116111121 1119811510111411897110100111 84101 101115116111121 115105103117105101110100111 81117105101114101115 10611710397114 7411710110397 99111110109105103111 8697108101 8697109111115 97 10611710397114 691061019911711697 101115116101 9911110997110100111 101110 10897 11610111410910511097108 11511798109105116 116561181061045651505752561029911097108")
  //   console.log("🚀 ~ file: challenge02.test.js ~ line 53 ~ it ~ desencripterCode", desencripterCode)
  //   // expect(desencripterCode).toBe('play tetris')
  // })

  // it ('test challege02', () => {
  //   const desencripterCode = challenge02("11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101")
  //   console.log("🚀 ~ file: challenge02.test.js ~ line 53 ~ it ~ desencripterCode", desencripterCode)
  //   expect(desencripterCode).toBe('play tetris')
  // // 🙈🙈🙈🙈🙈🙈🙈🙈
  // })
})
