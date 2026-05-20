import { BudgetData } from "./planning"

export interface Couple {

  bride: string

  groom: string
}

export interface WeddingVenue {

  name: string

  city: string

  address: string
}

export interface WeddingDate {

  weddingDate: string

  daysLeft: number
}

export interface WeddingAnalytics {

  completionRate: number

  vendorBookings: number

  pendingTasks: number
}

export interface Wedding {

  id: string

  couple: Couple

  venue: WeddingVenue

  schedule: WeddingDate

  budget: BudgetData

  analytics: WeddingAnalytics
}