export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

/*  CON interface PODEMOS EXTENDER TODAS LAS PROPIEDADES DE SpecialDiaryEntry con las propiedades que ya gurda DiaryEntry  */

// interface SpecialDiaryEntry extends DiaryEntry {
//     flightNumber: number,
//     coords: number
// }

/* SELECCIONA */
// export type NonSensitiveInfoDiaryEntry = Pick < DiaryEntry, 'id' | 'date' | 'weather' | 'visibility' >

/* OMITE */
export type NonSensitiveInfoDiaryEntry = Omit < DiaryEntry, 'comment' >

export type NewDiaryEntry = Omit < DiaryEntry, 'id' >
