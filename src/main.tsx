import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import { App } from './App.tsx'
import VLibras from 'vlibras-nextjs'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
		<VLibras forceOnload />
	</StrictMode>
)
