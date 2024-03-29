import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      prefix: ['i-', ''],
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,500',
        mono: 'Fira Code',
      },
    }),
    presetTypography(),
  ],
  rules: [
    ['shadow', { 'box-shadow': 'rgba(0, 0, 0, 0.2) 0 0 0 1px, rgba(0, 0, 0, 0.45) 0 3px 10px' }],
    ['green-shadow', { 'text-shadow': 'rgba(57, 123, 4,1) 0 0 2px, rgba(57, 123, 4,1) 0 0 5px, rgba(57, 123, 4,1) 0 0 10px, rgba(57, 123, 4,1) 0 0 10px, rgba(57, 123, 4,1) 0 0 20px, rgba(57, 123, 4,1) 0 0 20px, black 0 0 1px' }],
    ['red-shadow', { 'text-shadow': 'rgba(128, 59, 2,1) 0 0 2px, rgba(128, 59, 2,1) 0 0 2px, rgba(128, 59, 2,1) 0 0 2px, rgba(128, 59, 2,1) 0 0 2px, black 0 0 1px' }],
    ['blue-shadow', { 'text-shadow': 'rgba(78, 117, 140,1) 0 0 2px, rgba(78, 117, 140,1) 0 0 2px, rgba(78, 117, 140,1) 0 0 2px, rgba(78, 117, 140,1) 0 0 2px, black 0 0 1px' }],
    ['ac-shadow', { 'box-shadow': 'rgba(0, 0, 0, 0.2) 0 0 0 1px, rgb(255, 0, 0) 0 0 5px, rgba(255, 0, 0, 1) 0 0 10px' }],
  ],
})
