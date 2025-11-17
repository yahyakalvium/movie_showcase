import React from 'react'


export default function MovieCard({ movie }) {
return (
<article className="movie-card">
<img src={movie.image} alt="poster" className="movie-poster" />
<div className="movie-info">
<h3 className="movie-title">{movie.title}</h3>
<p className="movie-genre">{movie.genre}</p>
<p className="movie-why">{movie.why}</p>
</div>
</article>
)
}