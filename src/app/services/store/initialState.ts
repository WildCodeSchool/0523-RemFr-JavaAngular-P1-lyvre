import { IUserState } from "./user.reducer";

export const initialState: IUserState = {
  user: {
      id: 0,
      name: "test",
      email: "",
      password: "",
      reading_in_progress: [],
      reading_finished: [],
      badges: [{
        name : "La tête dans les étoiles",
        description : "Lire 5 livres de Science-Fiction",
        isFinished : false,
        progress : 0,
        totalRequired: 5,
        condition: "Science Fiction"
        },
        {
        name : "Romantique",
        description : "Lire 5 livres de Romance",
        isFinished : false,
        progress : 0,
        totalRequired: 5,
        condition: "Roman"
        },
        {
        name : "Fantaisiste",
        description : "Lire 5 livres de Fantasy",
        isFinished : false,
        progress : 0,
        totalRequired: 5,
        condition: "Fantasy"
        },
        {
        name : "Biographe",
        description : "Lire 5 Biographies",
        isFinished : false,
        progress : 0,
        totalRequired: 5,
        condition: "Biography"
        },
        {
        name : "Accro à l'adrénaline",
        description : "Lire 5 Thrillers",
        isFinished : false,
        progress : 0,
        totalRequired: 5,
        condition: "Thriller"
        },
        {
        name : "Amateur de frisson",
        description : "Lire 5 livres d'Horreur",
        isFinished : false,
        progress : 0,
        totalRequired: 5,
        condition: "Horreur"
        },
        {
        name : "Mon premier fan",
        description : "Lire 5 livres d'un même auteur",
        isFinished : false,
        progress : 0,
        totalRequired: 5
        },
        {
        name : "Lecteur en herbe",
        description : "Lire 3 livres dans le même mois",
        isFinished : false,
        progress : 0,
        totalRequired: 3
        },
        {
        name : "Lecteur avancé",
        description : "Lire 5 livres dans le même mois",
        isFinished : false,
        progress : 0,
        totalRequired: 5
        },
        {
        name : "Expert en lecture",
        description : "Lire 10 livres dans le même mois",
        isFinished : false,
        progress : 0,
        totalRequired: 10
        }],
      challenges: [],
      points: 0,
      image: ""
  },
};
