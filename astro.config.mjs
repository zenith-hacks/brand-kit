import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Zenith Hacks 2025 | Brand Kit',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Logo',
					autogenerate: { directory: 'logo' },
				},
				{
					label: 'Font',
					autogenerate: { directory: 'font' },
				},
				{
					label: 'Wording',
					autogenerate: { directory: 'wording' },
				},
				{
					label: 'Colours',
					autogenerate: { directory: 'colours' },
				},
			],
		}),
	],
});
