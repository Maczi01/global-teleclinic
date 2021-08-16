export const formatDate = (date) => {
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
  const diff = text(daysDifference);
  return `${diff} ${day} ${month} ${year}, godz. ${hour}:${minute} `;
};

const text = (d) => {
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
