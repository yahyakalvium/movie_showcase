import React from 'react'
import MovieCard from './MovieCard'
import { movies } from '../data/movies'


export default function MoviesList() {
return (
<section className="movies container">
<h2>Movies List</h2>
<div className="movies-grid">
{movies.map(m => (
<MovieCard key={m.id} movie={m} />
))}
</div>
</section>
)
}