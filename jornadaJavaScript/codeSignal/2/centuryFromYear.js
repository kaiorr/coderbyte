function centuryFromYear(year) {
  if(year % 100 == 0) {
      return parseInt(year/100)
  } else {
      return parseInt((year/100) + 1)
  }
}
centuryFromYear(1950)
