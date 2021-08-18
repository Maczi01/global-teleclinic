import Box from "@material-ui/core/Box";

export const getFormattedVisitDate = (date) => {
  const objDate = new Date(date);
  const locale = "pl";
  const day = objDate.getDate();
  const today = new Date().getDate();
  const month = objDate.toLocaleString(locale, { month: "long" });
  const year = objDate.getFullYear();
  const hour = objDate.getHours();
  const minute = objDate.getMinutes();
  console.log(day - today);
  const daysDifference = day - today;
  const diff = textWithDate(daysDifference);
  return `${diff} ${day} ${month} ${year}, godz. ${hour}:${minute} `;
};

const textWithDate = (d) => {
  switch (d) {
    case 0:
      return "dzisiaj";
    case 1:
      return "jutro";
    case 2:
      return "pojutrze";
    default:
      return "";
  }
};

export const getDayAndMonth = (date) => {
  const dateToConvert = new Date(date)
    let month = dateToConvert.getMonth() + 1;
    month =  month < 10 ? '0' + month : '' + month;
    return `${dateToConvert.getDate()}.${month}`
}

export const getHourAndMinute = (date) => {
  const dateToConvert = new Date(date)
  let minutes = dateToConvert.getMinutes();
  minutes =  minutes < 10 ? '0' + minutes : '' + minutes;
  return `${dateToConvert.getHours()}:${minutes}`
}

export const cutDescription = (description) => {
  return description.length > 150 ? description.substring(0, 150) : description;
};
