export const month = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre"
];


export const getNextLevel = (level: number) => {
  return (100 - (level % 100));
}
