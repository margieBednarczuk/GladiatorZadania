import { Cart } from 'przemocny/oop-and-solid/Cart/Cart'
import * as products from 'przemocny/oop-and-solid/utils/products'
import _ from 'lodash'
import { Product } from 'przemocny/oop-and-solid/Product/Product'

describe('Cart class', () => {
  let cart: Cart
  let lamp: Product
  let keyboard: Product
  let monitor: Product

  beforeEach(() => {
    cart = new Cart()

    lamp = _.cloneDeep(products.lamp)
    keyboard = _.cloneDeep(products.keyboard)
    monitor = _.cloneDeep(products.monitor)
    cart.addProduct(lamp, 1)
    cart.addProduct(keyboard, 3)
    cart.addProduct(monitor, 1)
  })

  it('should return cart value ', () => {
    const cartValue = cart.getGrossCartValue()
    expect(cartValue).toBe(1800)
  })

  it('should return number of items in cart', () => {
    const numberOfItemsInCart = cart.getNumberOfProductsInCart()
    expect(numberOfItemsInCart).toBe(5)
  })

  it('should add product to the cart and update "lastModifiedAt" field', () => {
    cart.addProduct(lamp, 2)
    const productInCart = cart.getProductById(lamp.getId())
    expect(productInCart!.quantity).toBe(3)
    expect(cart.getLastModifiedAt() instanceof Date).toBe(true)
  })

  it('should remove product from the the cart and update "lastModifiedAt" field', () => {
    cart.removeProduct(keyboard)
    const productInCart = cart.getProductById(keyboard.getId())
    expect(productInCart).toBeNull()
    expect(cart.getLastModifiedAt() instanceof Date).toBe(true)
  })

  it('should throw an error when product quantity is set below 0', () => {
    expect(() => cart.changeProductQuantity(keyboard, -20)).toThrow(
      'ProductQuantity cannot be below 0'
    )
  })

  it('should remove product from the cart when product quantity is set to 0', () => {
    cart.changeProductQuantity(keyboard, 0)
    const keyboardsInCart = cart.getProductById(keyboard.getId())
    expect(keyboardsInCart).toBeNull()
    expect(cart.getLastModifiedAt() instanceof Date).toBe(true)
  })

  it('should change product quantity in the cart', () => {
    cart.changeProductQuantity(keyboard, 10)
    const keyboardsInCart = cart.getProductById(keyboard.getId())
    expect(keyboardsInCart!.quantity).toBe(10)
    expect(cart.getLastModifiedAt() instanceof Date).toBe(true)
  })

  it('should add discount to selected product', () => {
    const productInCart = cart.getProductById(lamp.getId())

    let isProductOnSale = productInCart!.product.getIsOnSale()
    expect(isProductOnSale).toBe(false)

    cart.addDiscountToProduct(lamp)

    isProductOnSale = productInCart!.product.getIsOnSale()
    expect(isProductOnSale).toBe(true)
    expect(cart.getLastModifiedAt() instanceof Date).toBe(true)
  })

  it('should set carts description', () => {
    cart.setCartDescription('this is description')
    expect(cart.getCartDescription()).toBe('this is description')
    expect(cart.getLastModifiedAt() instanceof Date).toBe(true)
  })

  it('should checkout the cart', () => {
    const prices = cart.checkout()
    expect(prices).toEqual({ net: 1386, gross: 1800 })
  })
})
