import { Product } from 'przemocny/oop-and-solid/Product/Product'

export const lamp = new Product(
  'lamp',
  'very nice lamp',
  'lightning',
  ['lamp', 'light'],
  false,
  { regular: 200, sale: 100 },
  23
)

export const monitor = new Product(
  'monitor',
  '24 inch monitor',
  'displays',
  ['24"', 'full-hd'],
  false,
  { regular: 1000, sale: 800 },
  23
)

export const keyboard = new Product(
  'keyboard',
  'qwerty keyboard',
  'displays',
  ['keyboard', 'utils'],
  true,
  { regular: 300, sale: 200 },
  23
)
