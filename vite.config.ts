import { AliasOptions, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: {
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@network': path.resolve(__dirname, 'src/network'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@redux': path.resolve(__dirname, 'src/redux')
    } as AliasOptions
  }
})
