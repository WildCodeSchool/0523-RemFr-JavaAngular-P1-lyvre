import { IBadge, IBook, IUser } from "src/app/utils/interface";

export const isBadgeCompleted = (book: IBook, user: IUser, init: boolean) => {

  const newBadges : IBadge[]= [];
  const cloneBadges = user.badges.map((badge) => ({ ...badge }));
  const badgeByNbOfBooks = cloneBadges.slice(0,6);

  badgeByNbOfBooks.map((badge) => {
    book.genre.map((genre) => {
      if(genre === badge.condition) {
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

  if(!cloneBadges[6].isFinished) {
    const author = user.reading_finished.map((book) => book.author)
    author.reduce((acc: any, currentValue: any) => {
      if(!acc[currentValue]) {
        acc = {...acc, [currentValue]: 1}
      } else {
        acc = {...acc, [currentValue] : acc[currentValue]+1}
        if(acc[currentValue] === 3) {
          cloneBadges[6].isFinished = true;
          newBadges.push(cloneBadges[6]);
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
    if(!cloneBadges[7].isFinished){
      cloneBadges[7].isFinished = true;
      newBadges.push(cloneBadges[7])
    }
  } else if (booksFinished >=5 ) {
    if(!cloneBadges[8].isFinished){
      cloneBadges[8].isFinished = true;
      newBadges.push(cloneBadges[8])
    }
  } else if(booksFinished >= 10) {
    if(!cloneBadges[8].isFinished){
      cloneBadges[8].isFinished = true;
      newBadges.push(cloneBadges[8])
    }
  }

  if(init) {
    return {badges: cloneBadges, newBadges: []}
  } else {
    console.log(newBadges)
    return {badges: cloneBadges, newBadges: newBadges}
  }
}
