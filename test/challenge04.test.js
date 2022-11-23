import { afterEach } from 'vitest'
import { describe, expect, it, beforeEach } from 'vitest'
import { numberAnalizer } from '../src/challenge04.js'


describe('Challenge 4: Encuentra la contraseña de tu amigo', () => {
    it('should be true when number is 55678', () => {
        expect(numberAnalizer(55678)).toBe(true)
    })

    it('should be true when number is 12555', () => {
        expect(numberAnalizer(12555)).toBe(true)
    })

    it('should be true when number is 55555', () => {
        expect(numberAnalizer(55555)).toBe(true)
    })

    it('should be true when number is 12345', () => {
        expect(numberAnalizer(12345)).toBe(false)
    })

    it('should be true when number is 57775', () => {
        expect(numberAnalizer(57775)).toBe(false)
    })
   
        
})