const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ]

  const arr = arrCities2.filter( pais =>  pais.capital !== true);

  const obj  = arr.map( pais => {
    city = pais.city;
    isSpain = pais.country == 'Spain'
    return {city, isSpain}
  })
  console.log(obj);