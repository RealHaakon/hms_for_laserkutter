---
title: Modul 1 — Introduksjon og maskinoversikt
description: HMS-opplæring for Gweike LC1390N CO2-laserkutter. Oversikt over maskin, spesifikasjoner og viktige komponenter.
---

import { Aside, Card, CardGrid, TabItem, Tabs } from '@astrojs/starlight/components';

Dette kurset dekker helse-, miljø- og sikkerhetsaspekter ved bruk av **Gweike LC1390N CO2-laserkutter**. Maskinen brukes til kutting og gravering av ikke-metalliske materialer.

<Aside type="tip">
Dette er en **CO2-laser** med bølgelengde 10.6 µm (infrarødt). Strålen er **usynlig** for det menneskelige øyet. Du kan ikke se når laseren er på.
</Aside>

## Maskinspesifikasjoner

| Parameter | Verdi |
|---|---|
| Modell | Gweike LC1390N |
| Lasertype | Forseglet CO2-glassrør (Yongli/RECI) |
| Bølgelengde | 10.6 µm (infrarødt, usynlig) |
| Kuttareal | 1300 × 900 mm |
| Driftsspenning | AC 110–220 V ±10 %, 50–60 Hz |
| Brutto effekt | < 1500 W |
| Kontrollsystem | Ruida 644xs |
| Filtrering | 3-trinns: partikkelfilter → HEPA → aktivt kull |
| Driftstemperatur | 0–45 °C, luftfuktighet 5–95 % |
| Vekt | ca. 590–650 kg |

## Viktige komponenter

<CardGrid>
  <Card title="Laserrør" icon="warning">
    Forseglet CO2-rør med giftig gassblanding. Skadet rør må aldri åpnes eller håndteres uten opplæring.
  </Card>
  <Card title="Ruida-kontrollpanel" icon="setting">
    Betjeningspanel på maskinens høyre side. Herfra styres jobber, hastighet og effekt.
  </Card>
  <Card title="Vannkjøler" icon="approve">
    Ekstern enhet som kjøler laserrøret. Må kjøre under all laserdift.
  </Card>
  <Card title="Avtrekksystem" icon="open-book">
    3-trinns filtreringssystem som fjerner røyk og farlige gasser. Må alltid være aktivt.
  </Card>
</CardGrid>

## Forskjellen mellom brytere og laserkilden

Det er viktig å forstå at maskinen har flere på-/av-systemer som utfører forskjellige oppgaver:

1. **Hovedstrømbryter** — Slår på hele maskinens strømforsyning. Ingen komponenter får strøm uten denne.
2. **Nødstopp** — Rød bryter på panelet. Kutter strømmen til laseren umiddelbart, men vannkjøleren kan fortsette å kjøre.
3. **Laseralbryter** — Sender kun strøm til selve laserrøret. Brukes for å aktivere/deaktivere laserstrålen uten å slå av hele maskinen.
4. **Vannkjøler** — Egen strømbryter. Må alltid stå **på** når laseren er i bruk.

<Aside type="danger">
Nødstopp-knappen stopper laseren, men **slukker ikke brann**. Se Modul 8 for riktig nødprosedyre.
</Aside>

## Neste steg

Etter at du kjenner maskinen, går vi videre til laserfare og klassifisering i [Modul 2](/modul-02-laserfare/).
