
const flight = {
    id: '145c01af48dd00002715248e_0',
    dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
    aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
    duration: {
      departure: 8400,
      return: 0,
      total: 8400,
    },
    fly_duration: '2h 20m',
    flyFrom: 'PRG',
    cityFrom: 'Prague',
    cityCodeFrom: 'PRG',
    countryFrom: {
      code: 'CZ',
      name: 'Czechia',
    },
    flyTo: 'BCN',
    cityTo: 'Barcelona',
    cityCodeTo: 'BCN',
    countryTo: {
      code: 'ES',
      name: 'Spain',
    },
    distance: 1359.54,
    airline: 'FR',
    pnr_count: 1,
    technical_stops: 0,
    price: 36,
    bags_price: {
      1: 34.95,
      2: 69.91,
    },
    baglimit: {
      hand_width: 20,
      hand_height: 40,
      hand_length: 55,
      hand_weight: 10,
      hold_width: 81,
      hold_height: 119,
      hold_length: 119,
      hold_dimensions_sum: 319,
      hold_weight: 20,
    },
    availability: {
      seats: 2,
    },
    conversion: {
      EUR: 36,
    },
    quality: 66.66659,
   };
  
 
   const maxBagDimensions = {
    handLuggage: {
      handWidth: flight.baglimit.hand_width,
      handHeight: flight.baglimit.hand_height,
      handLenght: flight.baglimit.hand_length,
      handWeight: flight.baglimit.hand_weight,
    },
    holdLuggage: {
      holdWidth: flight.baglimit.hold_width,
      holdHeight: flight.baglimit.hold_height,
      holdLenght: flight.baglimit.hold_length,
      holdWeight: flight.baglimit.hold_weight,
    }
   }
    
  
    document.body.innerHTML += `<h1>
      Letenky z Prahy do Barcelony</h1>
      <h2>Název startovní země:</h2>
        <p>${flight.countryFrom.name} (${flight.countryFrom.code})</p>
      <h2>Název cílové země:</h2>
        <p>${flight.countryTo.name} (${flight.countryTo.code})</p>
      <h2>Maximální povolené rozměry příručního zavazadla:</h2>
        <p>${maxBagDimensions.handLuggage.handWidth} x ${maxBagDimensions.handLuggage.handHeight} x ${maxBagDimensions.handLuggage.handLenght} cm, váha ${maxBagDimensions.handLuggage.handWeight} kg</p>
      <h2>Cena za druhé zavazadlo:</h2>
        <p>${Math.ceil(flight.bags_price[2] * flight.conversion.EUR)} Kč
    </p>`;
   
  
     
 