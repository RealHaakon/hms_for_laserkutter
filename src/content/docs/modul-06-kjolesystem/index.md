---
title: Modul 6 — Kjølesystem
description: Vannkjøling av laserrøret, sjekk av vannnivå/temperatur og håndtering av kjølesvikt.
---

import { Aside, Steps, Card, CardGrid } from '@astrojs/starlight/components';

## Hvorfor laserrøret trenger kjøling

CO2-laserrøret produserer betydelig varme under drift. Uten aktiv kjøling overoppheter røret, mister effekt, og kan i verste fall sprekke eller forårsake brann.

<Aside type="danger">
Kjølesvikt kan forårsake permanent skade på laserrøret (verdt titusener av kroner) og økt brannrisiko. Sjekk alltid kjølesystemet før bruk.
</Aside>

## Sjekkliste før hver sesjon

<Steps>

1. **Sjekk vannivået** i kjøletankens glassrør — det skal være synlig og over minimumsgrensen
2. **Sjekk vanntemperaturen** — Skal være mellom 15–25 °C (vises på kjølerens display)
3. **Sjekk at pumpen kjører** — Det skal høres en svak Summing og vann skal sirkulere i slangen
4. **Sjekk slanger for lekkasjer** — Ingen vanndråper under maskinen eller ved koblinger
5. **Start kjøleren før laserstrømmen** — Kjøleren må ha stabil sirkulasjon før laseren aktiveres

</Steps>

![Vannkjøling-cartoon](/img/vannkjoling-cartoon.png)

## Plassering av vannkjøleren

Vannkjøleren står ved siden av maskinen. Den skal stå plant og ikke blokkere ventilasjonen.

![Vannkjøling-plassering](/img/vannkjoling-plassering.jpeg)

![Vannkjøling-zoom](/img/vannkjoling-zoom.jpeg)

## Temperaturvarsel

Maskinen har en innebygd temperaturvarsling som utløses når:

- Vannet i kjølesystemet blir for varmt (> 28 °C)
- Kjølepumpen svikter og vannet ikke sirkulerer
- Vannivået faller under minimumsgrensen

<Aside type="warning">
Hvis temperaturvarselet utløses: **Stop maskinen umiddelbart.** Vent til temperaturen faller under 25 °C før gjenopptakelse.
</Aside>

## Hva skjer ved kjølesvikt?

| Feil | Konsekvens | Umiddelig tiltak |
|---|---|---|
| Lekkasje i slange | Vann på gulv, utilstrekkelig kjøling | Stop maskinen, tørk opp, skift slange |
| Pumpe sviktet | Ingen sirkulasjon, røret overoppheter | Stop umiddelbart, la systemet kjøle seg ned |
| Vann for varmt | Redusert kjøleeffekt | Stop, vent, fyll på kaldt vann om nødvendig |
| Vannnivå for lavt | Luftpumper i systemet, ujevn kjøling | Fyll på destillert vann |

## Relaterte moduler

- [Modul 1 — Maskinoversikt](/modul-01-introduksjon/) for generell forståelse
- [Modul 7 — Praktisk drift](/modul-07-drift/) for oppstarts- og nedstengingsrekkefølge
