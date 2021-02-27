# Projektipohja Node.js -projektille

Tämä projektipohja sisältää Node.js:llä toteutetun backendin, joka käyttää PostgreSQL-tietokantaa. Sovelluksessa on JWT:llä toteutetetut API-routet käyttäjien rekisteröitymiselle ja kirjautumiselle. Käyttäjän pääsyä eri routeille voi hallita auth- ja admin-middlewareilla (ks. esimerkkitapaukset [userRoutes-tiedostosta](https://github.com/samjok/postgres-typeorm-example/blob/main/src/routes/userRoutes.ts)).

Projektissa on käytetty tietokannan hallintaan TypeORM:ia, jonka dokumentaatio löytyy [täältä](https://typeorm.io/#/).

## Projektin kehittäminen
Voit forkata projektin ja kloonata sen omalle koneellesi. Asenna sitten tarvittavat riippuvuudet. Tee .env-tiedosto, joka sisältää tarvittavat ympäristömuuttujat (projektissa on valmiina .env-template, josta voit muokata .env-tiedoston). 

Sovelluksen voi käynnistää nodemonin kanssa komennolla "yarn run watch".
```
yarn install
yarn run watch
```


