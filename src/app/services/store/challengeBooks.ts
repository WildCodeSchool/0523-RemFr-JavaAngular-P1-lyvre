import { IBook, IChallenge, IUser } from "src/app/utils/interface";

export const challengeBooks = (book: IBook, user: IUser, isFinished: boolean) => {
  const challenges : IChallenge[] = [];
  challenges.push({...user.challenges[0]}, {...user.challenges[1]})
  const nbOfChallengesMax = 2;
  const startingDate = new Date(challenges[0].start);
  const endingDate = new Date(challenges[0].end);
  let points = 0;
  const booksFinishedInThePeriod = user.reading_finished.filter((book) => new Date(book.lastUpdate) >= startingDate && new Date(book.lastUpdate) <= endingDate);
  const booksInProgressInThePeriod = user.reading_in_progress.filter((book) => new Date(book.lastUpdate) >= startingDate && new Date(book.lastUpdate) <= endingDate);

  if (isFinished){
    booksFinishedInThePeriod.push(book);
  } else {
    booksInProgressInThePeriod.push(book);
  }
  const allBooksInThePeriod = [...booksFinishedInThePeriod, ...booksInProgressInThePeriod];

  for (let i = 0; i < nbOfChallengesMax; i++) {
    if(!challenges[i].isFinished){
      if (challenges[i].name === "Lire deux livres d'auteurs différents") {
        const nbOfDifferentAuthor = booksFinishedInThePeriod.reduce((acc : string[], book: IBook) => {
            if(!acc.includes(book.author)) {
                acc.push(book.author);
            }
            return acc;
        }, [])
        if (nbOfDifferentAuthor.length >= 2) {
            challenges[i].isFinished = true;
            challenges[i].progress = nbOfDifferentAuthor.length;
            points += challenges[i].points;
        } else {
            challenges[i].isFinished = false;
            challenges[i].progress = nbOfDifferentAuthor.length;
        }
      }

      if (challenges[i].name === "Lire 3 jours de suite") {

        const checkDays = allBooksInThePeriod.reduce((acc : number[], book: IBook) => {
          if (!acc.includes(new Date(book.lastUpdate).getDate()) && acc.length === 0) {
              acc.push(new Date(book.lastUpdate).getDate());
          } else if (!acc.includes(new Date(book.lastUpdate).getDate()) && acc.length === 1 && acc[0] === new Date(book.lastUpdate).getDate() - 1) {
              acc.push(new Date(book.lastUpdate).getDate());
          } else if (!acc.includes(new Date(book.lastUpdate).getDate()) && acc.length === 2 && acc[1] === new Date(book.lastUpdate).getDate() - 1) {
              acc.push(new Date(book.lastUpdate).getDate());

          }
          return acc;
        }, [])

        if (checkDays.length >= 3) {
          challenges[i].isFinished = true;
          points += challenges[i].points;
          challenges[i].progress = checkDays.length;
        } else {
          challenges[i].progress = checkDays.length;
        }
      }
    }
  }

  return {challenges: challenges, pointsChallenges: points};

}
