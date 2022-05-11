"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDiary = exports.getEntriesWhitoutSensitiveInfo = exports.findById = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
const diaryData = diaries_json_1.default;
const getEntries = () => diaryData;
exports.getEntries = getEntries;
const findById = (id) => {
    const entry = diaryData.find(diary => diary.id === id);
    if (entry != null) {
        const { comment } = entry, restOfDiary = __rest(entry, ["comment"]);
        return restOfDiary;
    }
    return undefined;
};
exports.findById = findById;
const getEntriesWhitoutSensitiveInfo = () => {
    return diaryData.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        };
    });
};
exports.getEntriesWhitoutSensitiveInfo = getEntriesWhitoutSensitiveInfo;
const addDiary = (newDiaryEntry) => {
    const newDiary = Object.assign({ id: Math.max(...diaryData.map(diary => diary.id)) + 1 }, newDiaryEntry);
    diaryData.push(newDiary);
    return newDiary;
};
exports.addDiary = addDiary;
