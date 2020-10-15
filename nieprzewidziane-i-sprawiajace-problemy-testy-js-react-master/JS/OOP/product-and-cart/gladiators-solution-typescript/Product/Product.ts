import { v4 as uuid } from 'uuid'

interface IPrices {
  sale: number
  regular: number
}

interface IProduct {
  category: string
  description: string
  sale: boolean
  name: string
  pctTax: number
  prices: IPrices
  tags: string[]
  readonly uuid: string
}

export class Product implements IProduct {
  readonly uuid: string
  constructor(
    public name: string,
    public description: string,
    public category: string,
    public tags: string[],
    public sale: boolean,
    public prices: IPrices,
    public pctTax: number
  ) {
    this.uuid = uuid()
  }

  calculateNet(): IPrices {
    const regularPriceWithoutTax = (this.prices.regular * (100 - this.pctTax)) / 100
    const salePriceWithoutTax = (this.prices.sale * (100 - this.pctTax)) / 100
    return { sale: salePriceWithoutTax, regular: regularPriceWithoutTax }
  }

  getName(): string {
    return this.name
  }

  getId(): string {
    return this.uuid
  }

  getIsOnSale(): boolean {
    return this.sale
  }

  setSale(value: boolean) {
    this.sale = value
  }

  getPrice(): number {
    if (this.sale) return this.prices.sale

    return this.prices.regular
  }

  getPctTax(): number {
    return this.pctTax
  }
}
