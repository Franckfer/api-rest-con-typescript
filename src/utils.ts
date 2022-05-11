import { NewDiaryEntry } from "./types";
import { Weather, Visibility} from './enums'

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date))
}

const isString = (string: string): boolean => {
    return typeof string === 'string'
}

const isWeather = (param: any): boolean => {
    return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): boolean => {
    return Object.values(Visibility).includes(param)
}




const parseDate = (dateFromRequest: any): string => {
    if(!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date')
    }
    return dateFromRequest;
}

const parseComment = (commentFromRequest: any): string => {
    if(!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment')
    }
    return commentFromRequest;
}

const parseWeather = (weatherFromRequest: any): Weather => {
    if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather')
    }
    return weatherFromRequest;
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if(!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility')
    }
    return visibilityFromRequest;
}



const toNewDiaryEntry = (object: any): NewDiaryEntry => {

    const newEntry: NewDiaryEntry = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment)

    }

    return newEntry
}



export default toNewDiaryEntry