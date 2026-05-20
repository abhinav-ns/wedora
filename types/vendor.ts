export type VendorStatus =
  | "confirmed"
  | "in-progress"
  | "pending"

export interface Vendor {

  id: string

  name: string

  category: string

  status: VendorStatus

  progress: number

  city: string

  image: string

  contactName: string

  contactPhone: string

  price: number
}