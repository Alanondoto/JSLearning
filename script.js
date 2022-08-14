// 'use strict';            "ПЕРВЫЙ ВАРИАНТ КОДА"

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// personalMovieDB.start = function() {
//     personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// };

// personalMovieDB.start();

// personalMovieDB.detectPersonalLevel = function() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count > 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка'); 
//     }
// };

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.rememberMyFilms = function() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// };

// personalMovieDB.rememberMyFilms();

// personalMovieDB.toggleVisibleMyDB = function() {
//     if (personalMovieDB.privat == false) {
//         personalMovieDB.privat = true;
//     } else {
//         personalMovieDB.privat = false;
//     }
// };

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB = function(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// };

// personalMovieDB.showMyDB(personalMovieDB.privat);

// personalMovieDB.writeYourGenres = function() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
//         if (personalMovieDB.genres[i-1] == null || personalMovieDB.genres[i-1] == '') {
//             i--;
//         }
//         if (i == 3) {
//             personalMovieDB.genres.forEach(function(genre, index) {
//                 console.log(`Любимый жанр #${index+1} - это ${genre}`);
//             });
//         }
//     }
// };

// personalMovieDB.writeYourGenres();

'use strict';   //"ВТОРОЙ ВАРИАНТ КОДА"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка'); 
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (personalMovieDB.genres[i-1] == null || personalMovieDB.genres[i-1] === '') {
                i--;
            }
            if (i == 3) {
                personalMovieDB.genres.forEach((item, i) => {
                    console.log(`Любимый жанр #${i + 1} - это ${item}`);
                });
            }
        }
    },
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();



