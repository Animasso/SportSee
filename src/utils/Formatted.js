/**
 *
 * @param {string} str convert the kind value of the data into french
 * @returns {string}
 */
export function enToFr(str) {
  switch (str) {
    case "energy":
      return "Energie";
    case "strength":
      return "Force";
    case "speed":
      return "Vitesse";
    case "intensity":
      return "Intensité";
    case "cardio":
      return "Cardio";
    case "endurance":
      return "Endurance";
    default:
      return;
  }
}
/**
 *
 * @param {object} session convert the date into a number that matching a day
 * @returns {object}
 */
//pour changer les date en chiffre  BarchartActivity
export function dayToNumber(session) {
  return session?.map((data, index) => ({
    ...data,
    day: index + 1,
  }));
}
/**
 * @param {object} average convert the day into a letter of the week
 * @returns {object}
 */
//pour changer les chiffres en lettre SessionTimechart
export function numberToLetter(average) {
  return average?.map((data) => {
    switch (data.day) {
      case 1:
        return { ...data, day: "L" };
      case 2:
        return { ...data, day: "M" };
      case 3:
        return { ...data, day: "M" };
      case 4:
        return { ...data, day: "J" };
      case 5:
        return { ...data, day: "V" };
      case 6:
        return { ...data, day: "S" };
      case 7:
        return { ...data, day: "D" };
      default:
        return { ...data };
    }
  });
}
/**
 *
 * @param {number} score convert the score number into pourcentage
 * @returns {object} with an array of two object
 */
export function formatettedScore(score) {
  return [
    {
      value: score * 100 || score * 100,
    },
    {
      value: 100 - score * 100 || score * 100,
    },
  ];
}
