const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmYzZGJkZWM5NmY5MDg1NDEwN2IyM2ZmMTRhMGQ3ZSIsInN1YiI6IjY1ODhjMmI0NGRhM2Q0NjRjYTQxODhkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CLtVHt8DtHtNC_v2wKKAxtJOZMP6GZ-NlE7ed3sk2gY'
    }
}

export const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

// Movies Pages Lists

export async function fetchMoviesLists(listType, pageNum) {

    const response = await fetch(`https://api.themoviedb.org/3/movie/${listType}?page=${pageNum}`, options, {
        next: {
            revalidate: 300
        }
    })

    const result = await response.json()

    return result;
}

export async function fetchTrendMovies(pageNum) {

    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?page=${pageNum}`, options, {
        next: {
            revalidate: 300
        }
    })

    const result = await response.json()

    return result;
}

export async function fetchAllMovies(pageNum) {

    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${pageNum}`, options, {
        next: {
            revalidate: 300
        }
    })
    const result = await response.json()

    return result;
}

// Shows Pages Lists

export async function fetchShowsLists(listType, pageNum) {

    const response = await fetch(`https://api.themoviedb.org/3/tv/${listType}?page=${pageNum}`, options, {
        next: {
            revalidate: 300
        }
    })

    const result = await response.json()

    return result;
}

export async function fetchAllShows(pageNum) {

    const response = await fetch(`https://api.themoviedb.org/3/discover/tv?page=${pageNum}`, options, {
        next: {
            revalidate: 300
        }
    })

    const result = await response.json()

    return result;
}

export async function fetchTrendShows(pageNum) {
    const response = await fetch(`https://api.themoviedb.org/3/trending/tv/day?page=${pageNum}`, options, {
        next: {
            revalidate: 300
        }
    })
    const result = await response.json()
    return result;
}

// Movies Details

export async function fetchMovieDetails(MovieID) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${MovieID}`, options, {
        next: {
            revalidate: 300
        }
    })
    const result = await response.json()
    return result;
}

export async function fetchMovieCast(MovieID) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${MovieID}/credits`, options, {
        next: {
            revalidate: 300
        }
    })
    const result = await response.json()
    return result;
}

export async function fetchMovieRecommend(MovieID) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${MovieID}/recommendations `, options, {
        next: {
            revalidate: 300
        }
    })
    const result = await response.json()
    return result;
}

export async function fetchMovieSimilar(MovieID) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${MovieID}/similar `, options, {
        next: {
            revalidate: 300
        }
    })
    const result = await response.json()
    return result;
}

// Shows Details

export async function fetchShowDetails(ShowId) {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${ShowId}`, options, {
        next: {
            revalidate: 300
        }
    })
    const result = await response.json()
    return result;
}

export async function fetchShowCast(ShowId) {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${ShowId}/credits`, options, {
        next: {
            revalidate: 300
        }
    })
    const result = await response.json()
    return result;
}

export async function fetchShowRecommend(ShowId) {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${ShowId}/similar `, options, {
        next: {
            revalidate: 300
        }
    })
    const result = await response.json()
    return result;
}

// Season Details

export async function fetchShowSimilar(ShowId) {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${ShowId}/recommendations `, options, {
        next: {
            revalidate: 300
        }
    })
    const result = await response.json()
    return result;
}


export async function fetchSeasonDetails(ShowId, seasonNum) {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${ShowId}/season/${seasonNum}`, options, {
        next: {
            revalidate: 300
        }
    })
    const result = await response.json()
    return result;
}

export async function fetchSeasonCast(ShowId, seasonNum) {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${ShowId}/season/${seasonNum}/credits`, options, {
        next: {
            revalidate: 300
        }
    })
    const result = await response.json()
    return result;
}

// Episode Details

export async function fetchEpisodeDetails(ShowId, seasonNum, episodeNum) {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${ShowId}/season/${seasonNum}/episode/${episodeNum}`, options, {
        next: {
            revalidate: 300
        }
    })
    const result = await response.json()
    return result;
}

export async function fetchEpisodeCast(ShowId, seasonNum, episodeNum) {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${ShowId}/season/${seasonNum}/episode/${episodeNum}/credits`, options, {
        next: {
            revalidate: 300
        }
    })
    const result = await response.json()
    return result;
}

// export async function searchResults(value, pageNum) {
//     const newValue = value.split(' ').join('%20')
//     const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${newValue}&page=${pageNum}`, options, {
//         next: {
//             revalidate: 300
//         }
//     })
//     const Results = await response.json()

//     return Results
// }