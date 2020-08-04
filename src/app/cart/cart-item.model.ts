export interface CartItem {
    id?: string,
    name: string,
    extraInfo: string,
    imgUrl: string,
    price: number,
    quantity: number,
    specialInstructions?: string
}