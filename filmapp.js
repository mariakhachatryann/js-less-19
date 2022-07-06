"use strict";

//  filmapp-ի մեջ փոփոխություններ եք անում, ամբողջովին պետք ա ռեֆակտորինգ անեք էդ կոդը,
// ու դա նորմալ ա դուք պետք ա սովորեք ձեր կոդերը փոփոխել կամ ուրիշի կոդերի վրա աշխատանքներ տանել,
// հետևաբար բոլոր այն ֆունկցիաները, որոնք մենք ստեղծել եք օբջեքթից դուրս, դարձրեք օբջեքթի մեթոդներ

//  ստեղծեք նոր մեթոդ որի անունը պետք է  լինի isVisibleMyDB, ու ինքը պետք ա ստուգի, 
// եթե privat-ը եթե true ա, դարձնի false, եթե false ա, դարձնի true, թեստ անել showMyDB մեթոդի հետ

//   yourFavoriteGenres method-ում թույլ չտալ որպեսզի յուզեռը դատարկ տող ուղարկի, քենսլ անի,
// ու 20ից շատ սիմվոլ գրի, ու երբ որ յուզեռը էդ հարցերին պատասխանի, դուք console-ում forEach-ով
/// տպեք յուզեռի սիրած ժանրերը բայց թվերով ու որ սկսվի մեկից, այսինքն Ձեր սիրելի ժանրը։ ԺԱՆՐ 1․․․


function start (numberOfFilms) {
    numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
	  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms < -1) {
		if (numberOfFilms === 0) {
			break;
		}
		numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
	}
	return numberOfFilms;
}

const numberOfFilms = start();


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
  isVisibleMyDB (){
    personalMovieDB.privat === true ? personalMovieDB.privat = false : personalMovieDB.privat = true;
  },
  showMyDB() {
    if(personalMovieDB.privat === true){
      console.log(personalMovieDB);
    }
  },
  rememberMyFilms (){
    for (let i = 0; i < 2; i++) {
		const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
		const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");
	
		if (!isNaN(b) && a != null && b != null && a.trim() != "" && b.trim() != "" && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log("DONE");
		} else {
			console.log("ERROR");
			i--;
		}
	  }
  },
  detectUserPersonalLevel () {
    if (numberOfFilms < 10) {
		console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
	} else if (numberOfFilms < 30) {
		console.log("Դուք ֆիլմի սիրահար եք");
	} else if (numberOfFilms >= 30) {
		console.log("Դուք կինոման եք !!!");
	} else {
		console.log("Տեղի է ունեցել խնդիր, ըստ երևույթի դուք թիվ չեք նշել");
	}
  },
  yourFavoriteGenres(){
    for(let i = 1; i < 4; i++){
      const genre = prompt(`Ձեր նախընտրելի ժանրը ${i}`);
      if(genre !== "" && genre != null && genre.length < 20){
        personalMovieDB.genres[i-1] = genre;
      }else{
        console.log("ERROR");
        i--;
      }
    }
    personalMovieDB.genres.forEach(function (genre, i){
          console.log(`Ձեր սիրելի ժանրը ${i+1}: ${genre}`);
    });
  }
};

personalMovieDB.isVisibleMyDB();
personalMovieDB.detectUserPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.yourFavoriteGenres();
personalMovieDB.showMyDB();



  