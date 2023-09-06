/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#3498db',
          // primary: '#7ebdc3',
          secondary: '#5CBBF6',
          error: '#e74c3c',
          info: '#9b59b6',
          success: '#2ecc71',
          warning: '#f1c40f',
        },
      },
    },
  },
})
