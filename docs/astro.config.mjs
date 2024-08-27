import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// import starlightThemeRapide from 'starlight-theme-rapide'



// https://astro.build/config
export default defineConfig({
	site: 'https://lo.fish',
	// base: 'statics',
	integrations: [
		starlight({
			title: 'My Docs',

			// plugins: [starlightThemeRapide()],
			// social: {
			// 	github: 'https://github.com/withastro/starlight',
			// },
			customCss: ["./src/style.css"],
			expressiveCode: {
				// plugins: [pluginLineNumbers()],
				themes: ['dracula'],
				styleOverrides: {
					// You can also override styles
					borderRadius: '0.5rem',
					// frames: {
					//   shadowColor: '#124',
					// },
					codeFontSize: '0.76rem',
				},
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
