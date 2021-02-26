# Projektipohja Node.js -projektille

Tämä Typescriptilla kirjoitettu projektipohja sisältää Node.js:llä toteutetun backendin, joka käyttää PostgreSQL-tietokantaa. Sovelluksen tarkoitus on tomia pohjana omille projekteille ja se sisältää JsonWebTokeneilla toteutetun käyttäjienhallinnan. 

Projektissa on käytetty tietokannan hallintaan TypeORM:ia, jonka dokumentaatio löytyy [täältä](https://typeorm.io/#/).

## Projektin kehittäminen
Voit forkata projektin ja kloonata sen omalle koneellesi. Asenna sitten tarvittavat riippuvuudet. Tee .env-tiedosto, joka sisältää tarvittavat ympäristömuuttujat (projektissa on valmiina .env-template, josta voit muokata .env-tiedoston). 

Sovelluksen voi käynnistää nodemonin kanssa komennolla "yarn run watch".
```
yarn install
yarn run watch
```


