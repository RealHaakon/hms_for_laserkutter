---
title: Modul 7 — Praktisk drift via Ruida/RDWorks
description: Oppstartssekvens, jobbinnstillinger og nedstengning for LC1390N.
---

## Oppstartssekvens

Følg denne rekkefølgen.

![Trinn-for-trinn oppstartssekvens for laserkutteren](/img/oppstarts-rutine.png)

1. **Slå på hovedstrømmen** til maskinen
2. **Sjekk kjølesystemet** — Vannivå, temperatur, pumpefunksjon (se [Modul 6](/modul-06-kjolesystem/))
3. **Sjekk avtrekket** — Er filteret reint? Er luftstrømmen i orden? (se [Modul 5](/modul-05-ventilasjon/))
4. **Slå på vannkjøleren** — Vent til pumpen stabiliserer seg (30 sekunder)
5. **Slå på avtrekket** — Sørg for at ventilasjonen kjører

6. **Start RDWorks** på datamaskinen.

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

1. Design filen i foretrukket programvare (Solidworks, Autodesk, eller tilsvarende)
2. Eksporter til **.svg**, **dxf**, **jpg/png** format
3. Overfør til maskin med mail eller bruk for eksempel https://www.file.io/ . (for tilgang, spør ansvarlig)
4. importer til RDWorks



## Nedstengningssekvens

**Følg baklengs rekkefølge** av oppstart:

1. **Slå av hovedstrømmen** til maskinen
2. **La avtrekket kjøre** i 2–3 minutter til røyk og partikkeler er fullstendig fjernet
3. **Slå av avtrekket**
4. **La vannkjøleren kjøre** i 5 minutter etter at laseren er av (for å kjøle ned røret)
5. **Slå av vannkjøleren**

> **Farlig:** Aldri slå av vannkjøleren umiddelbart etter laseren. Laserrøret trenger kjøling også etter at laserstrømmen er av.

## Vanlige feil

| Feil | Mulig årsak | Løsning |
|---|---|---|
| Laseren starter ikke | Kjøleren er ikke på | Slå på kjøleren og prøv igjen |
| Svakt kutt | Effekten er for lav | Øk effekten eller reduser hastigheten |
| Brennmerker | Hastigheten er for lav | Øk hastigheten eller reduser effekten |

## Relaterte moduler

- [Modul 8 — Nødprosedyrer](/modul-08-nodprosedyrer/) for håndtering av uforutsette situasjoner under drift
- [Modul 10 — Ruida 644xs](/modul-10-ruidia/) for detaljert bruk av kontrollpanelet
