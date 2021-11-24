const Cinema = function (films) {
  this.films = films;
};

// Cinema.prototype.add = function (film){
//   this.films.push(film);
// };


Cinema.prototype.filmTitles = function ()  {
  const result = this.films.map((film) => {
    return film.title;
});
  return result;
}

Cinema.prototype.findByTitle = function(title) {
const result = this.films.find((film) => {
  return film.title === title;
});
return result;
};
Cinema.prototype.filterByGenre = function(genre){
  const result = this.films.filter((film) => {
    return film.genre === genre;
  });
  return result;
};

Cinema.prototype.filterByYear = function(year){
  const result = this.films.filter((film) => {
return film.year === year;
  });
  return result;
};

Cinema.prototype.filterByLength = function (length) {
  const result = this.films.filter((film) => {
    return film.length > length;
  });
  return result;
}

Cinema.prototype.totalRuntime = function (films) {
  const result = this.films.reduce((total, x) => {
    return total + x.length;
  }, 0);
  return result;
};

Cinema.prototype.filmsByProperty = function (property, value){
  const result = this.films.filter((film) => {
    return film[property] === value
  })
}
module.exports = Cinema;
