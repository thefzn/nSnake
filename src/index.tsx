import React from 'react'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import ReactDOM from 'react-dom'
import Game from 'components/Game'
import './index.css'

// import RootActions from 'actions'
// import Providers from 'components/Providers'
// import configureStore from 'store/configureStore'
// import RootState from 'store/RootState'

const dependencyPath: string = './components/Game'

document.addEventListener('DOMContentLoaded', () => {
	render(true)
	if (process.env.NODE_ENV !== 'production' && module.hot) {
		module.hot.accept(dependencyPath, render)
	}
})

function render(hydrate = false) {
	ReactDOM[hydrate && !module.hot ? 'hydrate' : 'render'](
		<Game />,
		document.getElementById('root'),
	)
}
