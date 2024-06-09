import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // el enterno donde vamos a ejecutar los test es happy-dom
    environment: 'happy-dom' // -> edge-runtime, happy-dom, jsdom, node
  }
})
