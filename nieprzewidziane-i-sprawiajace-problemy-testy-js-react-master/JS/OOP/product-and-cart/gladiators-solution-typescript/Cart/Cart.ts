import { v4 as uuid } from 'uuid'
import { Product } from 'przemocny/oop-and-solid/Product/Product'

interface IProductInCart {
  product: Product
  quantity: number
}

export class Cart {
  private readonly uuid: string
  private description: string
  private productList: IProductInCart[]
  private createdAt: Date
  private lastModifiedAt: Date

  constructor() {
    this.uuid = uuid()
    this.productList = []
    this.description = ''

    const creationDate = new Date()

    this.createdAt = creationDate
    this.lastModifiedAt = creationDate
  }

  updateLastModifiedAt(): void {
    this.lastModifiedAt = new Date()
  }

  setCartDescription(description: string): void {
    this.description = description
    this.updateLastModifiedAt()
  }

  getCartDescription(): string {
    return this.description
  }

  getLastModifiedAt(): Date {
    return this.lastModifiedAt
  }

  getGrossCartValue(): number {
    return this.productList.reduce(
      (accumulator, productInCart) => accumulator + this.getProductInCartGrossValue(productInCart),
      0
    )
  }

  getNetCartValue(): number {
    return this.productList.reduce((accumulator, productInCart) => {
      return (
        accumulator +
        (this.getProductInCartGrossValue(productInCart) *
          (100 - productInCart.product.getPctTax())) /
          100
      )
    }, 0)
  }

  // eslint-disable-next-line class-methods-use-this
  getProductInCartGrossValue(productInCart: IProductInCart): number {
    return productInCart.product.getPrice() * productInCart.quantity
  }

  getNumberOfProductsInCart(): number {
    return this.productList.reduce(
      (accumulator, productInCart) => accumulator + productInCart.quantity,
      0
    )
  }

  getProductById(id: string): IProductInCart {
    const product = this.productList.find(
      (productInCart: IProductInCart) => productInCart.product.getId() === id
    )
    if (!product) throw new Error('err')
    return product
  }

  getProductIndexInCart(productId: string): number {
    return this.productList.findIndex(
      (productInCart) => productInCart.product.getId() === productId
    )
  }

  addProduct(product: Product, quantity: number): void {
    const productIndexInCart = this.getProductIndexInCart(product.getId())

    const isProductInCart = productIndexInCart !== -1

    if (isProductInCart) {
      this.productList[productIndexInCart].quantity += quantity
    } else {
      this.productList.push({ product, quantity })
    }

    this.updateLastModifiedAt()
  }

  removeProduct(product: Product): void {
    this.productList = this.productList.filter(
      (productInCart: IProductInCart) => productInCart.product.getId() !== product.getId()
    )

    this.updateLastModifiedAt()
  }

  changeProductQuantity(product: Product, newQuantity: number, inPlaceModified = true): void {
    const productIndexInCart = this.getProductIndexInCart(product.getId())

    const isProductInCart = productIndexInCart !== -1

    if (!isProductInCart) throw new Error('There is no such product in cart')

    if (inPlaceModified) {
      if (newQuantity <= 0) {
        this.removeProduct(product)
        return
      }

      this.productList[productIndexInCart].quantity = newQuantity
    }

    if (!inPlaceModified) {
      const newProductQuantityInCart = this.productList[productIndexInCart].quantity + newQuantity

      if (newProductQuantityInCart <= 0) {
        this.removeProduct(product)
        return
      }

      this.productList[productIndexInCart].quantity = newProductQuantityInCart
    }

    this.updateLastModifiedAt()
  }

  addDiscountToProduct(product: Product): void {
    const productIndexInCart = this.getProductIndexInCart(product.getId())

    this.productList[productIndexInCart].product.setSale(true)

    this.updateLastModifiedAt()
  }

  checkout(): { net: number; gross: number } {
    const netCartValue = parseFloat(this.getNetCartValue().toFixed(2))
    const grossCartValue = parseFloat(this.getGrossCartValue().toFixed(2))
    return { net: netCartValue, gross: grossCartValue }
  }
}
