import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from '../types'
import Data from './diaries.json'

const diaryData: DiaryEntry[] = Data as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaryData

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaryData.find(diary => diary.id === id)

  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }

  return undefined
}

export const getEntriesWhitoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaryData.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaryData.map(diary => diary.id)) + 1,
    ...newDiaryEntry
  }

  diaryData.push(newDiary)

  return newDiary
}
