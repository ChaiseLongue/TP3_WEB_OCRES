
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .getThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      
      // Modifier le DOM des 3 jours suivants
      for(i=0;i<4;++i){
        document.getElementById('day'+i+'-forecast-main').innerHTML = data.list[i].weather[0].main;
        document.getElementById('day'+i+'-forecast-more-info').innerHTML = data.list[i].weather[0].description;
        document.getElementById('day'+i+'-icon-weather-container').innerHTML = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);
        document.getElementById('day'+i+'-forecast-temp').innerHTML = `${data.list[i].temp.day}°C`;
      }
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
