const structorConversionData = (data, fr, to, amount) => {
  const id = `${fr}_${to}`;
  const date = new Date();
  // direct rate: fr -> to
  const dc = data[id]['val'];
  // reverse rate: to -> fr
  const rc = data[`${to}_${fr}`]['val'];
  return {id, date, fr, to, dc, rc, amount};
}

export const getConversion = async (fr, to, amount) => {
  // Do something here
  const query = `${fr}_${to},${to}_${fr}`;
  const url   = `https://free.currencyconverterapi.com/api/v5/convert?q=${query}&apiKey=${process.env.REACT_APP_CC_API_KEY}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return structorConversionData(data.results, fr, to, amount);
  } catch(err) {
    // handle fetch fail batter
    console.log(err);
  }
}