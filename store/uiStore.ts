import { create } from "zustand"

interface UIStore {

  activeSheet: string | null

  sheetData: any

  openSheet: (
    sheet: string,
    data?: any
  ) => void

  closeSheet: () => void
}

export const useUIStore =
  create<UIStore>((set) => ({

    activeSheet: null,

    sheetData: null,

    openSheet: (
      sheet,
      data
    ) =>

      set({

        activeSheet: sheet,

        sheetData: data,
      }),

    closeSheet: () =>

      set({

        activeSheet: null,

        sheetData: null,
      }),

  }))