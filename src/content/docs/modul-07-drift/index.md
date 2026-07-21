---
title: Modul 7 — Praktisk drift via Ruida/RDWorks
description: Oppstartssekvens, jobbinnstillinger og nedstengning for LC1390N.
---

## Oppstartssekvens

Følg alltid denne rekkefølgen. Feil rekkefølge kan skade utstyr eller skape farlige situasjoner.

![Trinn-for-trinn oppstartssekvens for laserkutteren](/img/oppstarts-rutine.png)

1. **Sjekk kjølesystemet** — Vannivå, temperatur, pumpefunksjon (se [Modul 6](/modul-06-kjolesystem/))
2. **Sjekk avtrekket** — Er filteret reint? Er luftstrømmen i orden? (se [Modul 5](/modul-05-ventilasjon/))
3. **Slå på vannkjøleren** — Vent til pumpen stabiliserer seg (30 sekunder)
4. **Slå på avtrekket** — Sørg for at ventilasjonen kjører
5. **Slå på hovedstrømmen** til maskinen
6. **Slå på laseren** via laseralbryteren på panelet
7. **Start RDWorks** på datamaskinen og koble til maskin via USB

> **Advarsel:** Vannkjøleren må **alltid** startes før selve laseren. Laserrøret skal aldri aktiveres uten aktiv kjøling.

## Jobbparametere i RDWorks

### Hastighet og effekt

Hastigheten og effekten bestemmer kuttedybden og kvaliteten:

| Mål | Effekt | Hastighet | Merknad |
|---|---|---|---|
| Tynt kutt (papir, tekstil) | 15–30 % | 200–400 mm/s | Lav effekt for å unngå brann |
| Standard kutt (akryl, tre) | 40–70 % | 100–200 mm/s | Tilpass etter tykkelse |
| Dypt kutt (tykk MDF) | 70–100 % | 50–100 mm/s | Krever god ventilasjon |
| Gravering | 20–50 % | 300–500 mm/s | Høy hastighet, lav effekt |

### Filoverføring

1. Design filen i programvaren din (Inkscape, CorelDRAW, eller tilsvarende)
2. Eksporter til **.RD** format eller importer til RDWorks
3. Plasser motivet på arbeidsområdet i programvaren
4. Sett riktige lag for kutt og gravering (forskjellige farger)
5. Overfør filen til maskinen via USB eller nettverk

## Nedstengningssekvens

**Følg alltid baklengs rekkefølge** av oppstart:

1. **Slå av laseren** via laseralbryteren
2. **Vent 10 sekunder** — La strømforsyningen stabilisere seg
3. **Slå av hovedstrømmen** til maskinen
4. **La avtrekket kjøre** i 2–3 minutter til røyken er fullstendig fjernet
5. **Slå av avtrekket**
6. **La vannkjøleren kjøre** i 5 minutter etter at laseren er av (for å kjøle ned røret)
7. **Slå av vannkjøleren**

> **Farlig:** Aldri slå av vannkjøleren umiddelbart etter laseren. Laserrøret trenger kjøling også etter at laserstrømmen er av.

## Vanlige feil

| Feil | Mulig årsak | Løsning |
|---|---|---|
| Laseren starter ikke | Kjøleren er ikke på | Slå på kjøleren og prøv igjen |
| Svakt kutt | Effekten er for lav | Øk effekten eller reduser hastigheten |
| Brennmerker | Hastigheten er for lav | Øk hastigheten eller reduser effekten |
| Filen overføres ikke | USB-kabel løs | Sjekk kabelforbindelse og restart RDWorks |

## Relaterte moduler

- [Modul 8 — Nødprosedyrer](/modul-08-nodprosedyrer/) for håndtering av uforutsette situasjoner under drift
- [Modul 10 — Ruida 644xs](/modul-10-ruidia/) for detaljert bruk av kontrollpanelet
