import express from 'express'
import * as diariesServices from '../services/diariesServices'
import toNewDiaryEntry from '../utils'
const router = express.Router()

router
  .get('/', (_req, res) => {
    res.send(diariesServices.getEntriesWhitoutSensitiveInfo())
  })

  .get('/:id', (req, res) => {
    const diary = diariesServices.findById(Number(req.params.id))

    if (diary == null) {
      res.sendStatus(404)
    }

    res.send(diary)
  })

  .post('/', (req, res) => {

    try {
      
      const newDiaryEntry = toNewDiaryEntry(req.body)

      const addedDiaryEntry = diariesServices.addDiary(newDiaryEntry)

      return res.json(addedDiaryEntry)

    } catch (error) {
      console.log(error);
      return res.status(400).send(error)
    }
  })

export default router
