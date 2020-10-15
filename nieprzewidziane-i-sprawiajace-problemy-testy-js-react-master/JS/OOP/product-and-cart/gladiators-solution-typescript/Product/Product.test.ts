import { lamp, keyboard } from 'przemocny/oop-and-solid/utils/products'

describe('Product class', () => {
  it('should return prices without pctTax', () => {
    const pricesWithoutPctTax = lamp.calculateNet()
    expect(pricesWithoutPctTax).toEqual({ regular: 154, sale: 77 })
  })

  it('should return sale price when product is on sale', () => {
    const productPrice = lamp.getPrice()
    expect(productPrice).toBe(200)
  })

  it('should return regular price when product is not on sale', () => {
    const productPrice = keyboard.getPrice()
    expect(productPrice).toBe(200)
  })
})
