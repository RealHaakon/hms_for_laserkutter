---
title: Modul 2 — Laserfare og klassifisering
description: Forstå lasertyper, fareområder og beskyttelsesutstyr for CO2-laseren.
---

import { Aside, Card, CardGrid } from '@astrojs/starlight/components';

## Hvorfor CO2-laseren er farlig

En CO2-laser som Gweike LC1390N er en **klasse 4-laser** når kapslingen er kompromittert. Dette betyr:

- **Direkte strålekontakt** forårsaker alvorlige forbrenninger på hud og øyne
- **Reflektert stråle** fra blanke overflater kan forårsake øyeskader uten at du ser strålen
- Strålen er **usynlig** (10.6 µm, infrarødt) — du ser ikke hvor den treffer

![Laserbruks-cartoon](/img/laser-bruk-cartoon.png)

<Aside type="danger">
Klasse 4-fare gjelder **kun** hvis kapsling/interlock er kompromittert. Normal drift med lokk lukket og alle interlocks intakt er trygt. Aldri_overvåk laseren med åpent lokk uten laserbriller.
</Aside>

## Usynlig stråle — ekstra fare

Fordi CO2-laserstrålen er infrarød, kan du ikke se den. Dette betyr:

- Du ser ikke hvor laseren treffer materialet under drift
- Reflektert lys fra metalliske deler eller blanke flater kan nå øynene uten varsel
- Du får **ingen visuell indikasjon** på at laseren er aktiv — kun instrumenter og display viser dette

<Aside type="note">
Klassifiseringen er **Klasse IV** ifølge brukermanualen. Dette er den høyeste laserklassen og krever strengeste sikkerhetstiltak.
</Aside>

## Laserbriller

**Påbudt** å bruke under all drift med åpent lokk:

- Briller som blokkerer **10.6 µm** (CO2-laserbølgelengden)
- Sjekk alltid at briller er merket for denne bølgelengden
- Vanlige solbriller eller sikkerhetsbriller **beskytter ikke** mot infrarød laserstråle
- Briller skal oppbevares i renn, ikke i lommer der de kan bli ripete

<CardGrid>
  <Card title="Riktig beskyttelse" icon="approve">
    Laserbriller merket for 10.6 µm CO2-laser. Sjekk at de ikke har riper eller skader.
  </Card>
  <Card title="Feil beskyttelse" icon="warning">
    Vanlige vernebriller, solbriller eller briller merket for andre bølgelengder (f.eks. 1064 nm fiberlaser).
  </Card>
</CardGrid>

## Når er det trygt?

Med riktig bruk er laserens fareområde begrenset til:

- Innsiden av den lukkede kabinettet
- Materialer som kuttes/graveres på arbeidsbordet
- Avgasser som fjernes via ventilasjonssystemet

Med lokk lukket og alle interlocks fungerende, er strålen fullstendig innelukket. Du kan trygt observere driften uten briller så lenge lokk og dører er lukket.

## Relaterte moduler

- [Modul 1 — Maskinoversikt](/modul-01-introduksjon/) for generell informasjon
- [Modul 5 — Ventilasjon](/modul-05-ventilasjon/) for forståelse av avgasshåndtering
