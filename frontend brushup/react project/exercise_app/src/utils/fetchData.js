export const exerciseOptions = {
    method: 'GET',
  params: {limit: '10'},
  headers: {
    'X-RapidAPI-Key': 'a7fad1af0bmsh9bad29b77e44744p190203jsn2afb9997da4a',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a7fad1af0bmsh9bad29b77e44744p190203jsn2afb9997da4a',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };