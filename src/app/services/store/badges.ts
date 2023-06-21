import { IBadge, IBook, IUser } from "src/app/utils/interface";

export const isBadgeCompleted = (book: IBook, user: IUser, init: boolean) => {

  const newBadges : IBadge[]= [];
  const cloneBadges = user.badges.map((badge) => ({ ...badge }));
  const badgeByNbOfBooks = cloneBadges.slice(0,6);
  const badgeSameAuthor = cloneBadges[6]
  const badge3InaMonth = cloneBadges[7];
  const badge5InaMonth = cloneBadges[8];
  const badge10InaMonth = cloneBadges[9];

  badgeByNbOfBooks.map(( badge ) => {
    book.genre.map(( genre ) => {
      if( genre === badge.condition ) {
        badge.progress = badge.progress + 1;
        if(badge.progress === badge.totalRequired && !badge.isFinished) {
          badge.isFinished = true;
          newBadges.push(badge);
        }
      }
    })
      return badge
    }
  )

  if(!badgeSameAuthor.isFinished) {
    const author = user.reading_finished.map((book) => book.author)
    author.reduce((acc: any, currentValue: any) => {
      if(!acc[currentValue]) {
        acc = {...acc, [currentValue]: 1}
      } else {
        acc = {...acc, [currentValue] : acc[currentValue]+1}
        if(acc[currentValue] === 3) {
          badgeSameAuthor.isFinished = true;
          newBadges.push(badgeSameAuthor);
        }
      }
      return acc
    }, {});
  }

  const actualMonth = new Date().getMonth();
  const booksFinished = user.reading_finished.reduce((acc: any, currentValue: any) => {
    const getMonth = new Date(currentValue.lastUpdate).getMonth();
    if(getMonth === actualMonth) {
      acc += 1
    }
    return acc
  }, 0)



  if(booksFinished >=3 ) {
    if(!badge3InaMonth.isFinished){
      badge3InaMonth.isFinished = true;
      newBadges.push(badge3InaMonth)
    }
  } else if (booksFinished >=5 ) {
    if(!badge5InaMonth.isFinished){
      badge5InaMonth.isFinished = true;
      newBadges.push(badge5InaMonth)
    }
  } else if(booksFinished >= 10) {
    if(!badge10InaMonth.isFinished){
      badge10InaMonth.isFinished = true;
      newBadges.push(badge10InaMonth)
    }
  }

  if(init) {
    return {badges: cloneBadges, newBadges: []}
  } else {
    return {badges: cloneBadges, newBadges: newBadges}
  }
}
