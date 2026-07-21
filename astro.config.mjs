// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'HMS-opplæring: Gweike LC1390N',
			components: {
				Hero: './src/components/Hero.astro',
			},
			sidebar: [
				{
					label: 'Introduksjon',
					items: [
						{ label: 'Modul 1 — Maskinoversikt', slug: 'modul-01-introduksjon' },
					],
				},
				{
					label: 'Sikkerhet',
					items: [
						{ label: 'Modul 2 — Laserfare', slug: 'modul-02-laserfare' },
						{ label: 'Modul 3 — Brannsikkerhet', slug: 'modul-03-brannsikkerhet' },
						{ label: 'Modul 4 — Materialer', slug: 'modul-04-materialer' },
					],
				},
				{
					label: 'Systemer',
					items: [
						{ label: 'Modul 5 — Ventilasjon', slug: 'modul-05-ventilasjon' },
						{ label: 'Modul 6 — Kjølesystem', slug: 'modul-06-kjolesystem' },
					],
				},
				{
					label: 'Drift',
					items: [
						{ label: 'Modul 7 — Praktisk drift', slug: 'modul-07-drift' },
						{ label: 'Modul 8 — Nødprosedyrer', slug: 'modul-08-nodprosedyrer' },
					],
				},
				{
					label: 'Godkjenning',
					items: [
						{ label: 'Modul 9 — Operatørgodkjenning', slug: 'modul-09-operatorgodkjenning' },
						{ label: 'Modul 10 — Ruida 644xs', slug: 'modul-10-ruidia' },
					],
				},
			],
		}),
	],
});
