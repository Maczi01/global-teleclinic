import {format} from "date-fns";
import {pl} from 'date-fns/locale';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'

export const getFormattedVisitDate = (date) => {
    const daysDifference = differenceInCalendarDays(new Date(date), new Date())
    const diff = textWithDate(daysDifference);
    return `${diff}${format(new Date(date), 'dd MMMM y,', {locale: pl})} 
    godz. ${format(new Date(date), 'H:mm')}`;
};

const textWithDate = (d) => {
    switch (d) {
        case 0:
            return "dzisiaj ";
        case 1:
            return "jutro ";
        case 2:
            return "pojutrze ";
        default:
            return "";
    }
};

export const getDayAndMonth = (date) => format(new Date(date), 'dd.MM');

export const getHourAndMinute = (date) => format(new Date(date), 'H:mm');

export const cutDescription = (description) => {
    return description.length > 150
        ? `${description.substring(0, 150)}... `
        : description;
};
