import React from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import MoviesList from './components/MoviesList'
import Preferences from './components/Preferences'
import "./index.css"


export default function App() {
return (
<div>
<Header />
<main>
<Intro />
<MoviesList />
<Preferences />
</main>
<footer className="site-footer container">
<p>Built with Vite — Favorite Movies Showcase</p>
</footer>
</div>
)
}