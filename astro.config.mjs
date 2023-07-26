import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Flight Review',
      customCss: [
        './src/styles/custom.css',
      ],
      social: {
        github: 'https://github.com/ztbochanski',
      },
      sidebar: [
        {
          label: 'Pilot',
          items: [
            { label: 'IMSAFE ', link: '/pilot/imsafe/' },
            { label: 'PIM (61.3)', link: '/pilot/pim/' },
            { label: 'Aeromedical Factors', link: '/pilot/aeromedical-factors/' },
          ],
        },
        {
          label: 'Aircraft',
          items: [
            { label: 'ARROW', link: '/aircraft/arrow/' },
            { label: 'AV1ATES ', link: '/aircraft/aviates/' },
            { label: 'ATOMATOFLAMES (91.205b)', link: '/aircraft/atomatoflames/' },
            { label: 'FLAPS (91.205c)', link: '/aircraft/flaps/' },
            { label: 'Airworthiness Considerations', link: '/aircraft/airworthiness-considerations/' },
          ],
        },
        {
          label: 'enVironment',
          items: [
            { label: 'NWKRAFT (91.103)', link: '/environment/nwkraft/' },
          ],
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
