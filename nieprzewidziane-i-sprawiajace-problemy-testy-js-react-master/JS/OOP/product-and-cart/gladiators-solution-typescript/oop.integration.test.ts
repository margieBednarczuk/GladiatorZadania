import { Cart } from './Cart'
import { Product } from './Product'

describe('purchase process', () => {
  const cart = new Cart()
  const lamp = new Product(
    'lamp',
    'this is lamp',
    'x-cat',
    [],
    false,
    { regular: 300, sale: 200 },
    23
  )
  const keyboard = new Product(
    'keyboard',
    'this is keyboard',
    'y-cat',
    [],
    false,
    { regular: 60, sale: 50 },
    23
  )
  const chair = new Product(
    'chair',
    'this is chair',
    'z-cat',
    [],
    true,
    { regular: 11, sale: 7 },
    23
  )

  it('should add lamp to the cart', () => {
    cart.addProduct(lamp, 1)

    const productsInCart = cart.getNumberOfProductsInCart()
    const lampsInCart = cart.getProductById(lamp.getId())

    expect(productsInCart).toBe(1)
    expect(lampsInCart.quantity).toBe(1)
    expect(lampsInCart.product.getName()).toBe('lamp')

    const prices = cart.checkout()

    expect(prices).toEqual({ gross: 300, net: 231 })
  })

  it('should add 2 keyboards to the cart', () => {
    cart.addProduct(keyboard, 2)

    const productsInCart = cart.getNumberOfProductsInCart()
    const keyboardsInCart = cart.getProductById(keyboard.getId())

    expect(productsInCart).toBe(3)
    expect(keyboardsInCart.quantity).toBe(2)
    expect(keyboardsInCart.product.getName()).toBe('keyboard')

    const prices = cart.checkout()

    expect(prices).toEqual({ gross: 420, net: 323.4 })
  })

  it('should add 7 chairs to the cart', () => {
    cart.addProduct(chair, 7)

    const productsInCart = cart.getNumberOfProductsInCart()
    const chairsInCart = cart.getProductById(chair.getId())

    expect(productsInCart).toBe(10)
    expect(chairsInCart.quantity).toBe(7)
    expect(chairsInCart.product.getName()).toBe('chair')

    const prices = cart.checkout()

    expect(prices).toEqual({ gross: 469, net: 361.13 })
  })

  it('should change lamps quantity to 2', () => {
    cart.changeProductQuantity(lamp, 2)
    const productsInCart = cart.getNumberOfProductsInCart()
    const lampsInCart = cart.getProductById(lamp.getId())

    expect(productsInCart).toBe(11)
    expect(lampsInCart.quantity).toBe(2)

    const prices = cart.checkout()

    expect(prices).toEqual({ gross: 769, net: 592.13 })
  })

  it('should remove 1 keyboard from the cart', () => {
    const keyboardsInCart = cart.getProductById(keyboard.getId())

    cart.changeProductQuantity(keyboard, -1, false)
    const productsInCart = cart.getNumberOfProductsInCart()

    expect(productsInCart).toBe(10)
    expect(keyboardsInCart.quantity).toBe(1)

    const prices = cart.checkout()

    expect(prices).toEqual({ gross: 709, net: 545.93 })
  })

  it('should add description to the cart', () => {
    const cartDescription = 'this is carts description'
    cart.setCartDescription(cartDescription)

    expect(cart.getCartDescription()).toBe(cartDescription)
  })

  it('should add discount to keyboards', () => {
    cart.addDiscountToProduct(keyboard)
    const keyboardsInCart = cart.getProductById(keyboard.getId())
    const keyboardPrice = keyboardsInCart!.product.getPrice()
    expect(keyboardPrice).toBe(50)

    const prices = cart.checkout()

    expect(prices).toEqual({ gross: 699, net: 538.23 })
  })

  it('should checkout the cart and return net and gross prices', () => {
    const prices = cart.checkout()

    expect(prices).toEqual({ gross: 699, net: 538.23 })
  })
})
