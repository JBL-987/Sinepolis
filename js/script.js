const MOVIES_DATA = {
  now_playing: [
    {
      id: 201,
      title: "Parasite (2019)",
      poster_path: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
      backdrop_path: "https://m.media-amazon.com/images/M/MV5BNDgxNjQ4MzY5N15BMl5BanBnXkFtZTgwNzU4NTkyODE@._V1_.jpg",
      overview: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      rating: "8.5/10",
      trailer: "https://www.youtube.com/embed/SEUXfv87Wpk",
      duration: "2h 12m",
      genre: "Drama, Thriller"
    },
    {
      id: 202,
      title: "Joker (2019)",
      poster_path: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      backdrop_path: "https://m.media-amazon.com/images/M/MV5BMGQ1ZGZmNTAtM2MyYi00NmZhLTkwYmYtNTNlZDRhMzU2ZTgwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      overview: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
      rating: "8.4/10",
      trailer: "https://www.youtube.com/embed/zAGVQLHvwOY",
      duration: "2h 2m",
      genre: "Crime, Drama, Thriller"
    },
    {
      id: 203,
      title: "1917 (2019)",
      poster_path: "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_FMjpg_UX1000_.jpg",
      backdrop_path: "https://m.media-amazon.com/images/M/MV5BZjEzOGRhNzctNGMzNi00OWQzLWI3YTEtMTQ4YzUzZTRmMWZlXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
      overview: "Two young British soldiers during the First World War are given an impossible mission: deliver a message deep in enemy territory.",
      rating: "8.2/10",
      trailer: "https://www.youtube.com/embed/YqNYrYUiMfg",
      duration: "1h 59m",
      genre: "Drama, War"
    },
    {
      id: 204,
      title: "Knives Out (2019)",
      poster_path: "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_FMjpg_UX1000_.jpg",
      backdrop_path: "https://m.media-amazon.com/images/M/MV5BNGNlM2VlOTctZDIxOC00ZWY5LTg1ZjEtOTNmODdmYWZiZGU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      overview: "A detective investigates the death of a patriarch of an eccentric, combative family.",
      rating: "7.9/10",
      trailer: "https://www.youtube.com/embed/qGqiHJTsRkQ",
      duration: "2h 10m",
      genre: "Comedy, Crime, Drama"
    },
    {
      id: 205,
      title: "Tenet (2020)",
      poster_path: "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_FMjpg_UX1000_.jpg",
      backdrop_path: "https://m.media-amazon.com/images/M/MV5BOTU0OWJlYzMtNWY5OC00NjM0LThmNDItYTMyMDRmZTY5NDdmXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg",
      overview: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage.",
      rating: "7.3/10",
      trailer: "https://www.youtube.com/embed/L3pk_TBkihU",
      duration: "2h 30m",
      genre: "Action, Sci-Fi"
    },
  ],
  upcoming: [
    {
      id: 1,
      title: "The Matrix Resurrections (2021)",
      poster_path: "https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
      backdrop_path: "https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDktZjYwNi00NzZlLWI2MTgtZGRhNDA0YjgwM2I5XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      overview: "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more.",
      rating: "5.7/10",
      trailer: "https://www.youtube.com/embed/9ix7TUGVYIo",
      duration: "2h 28m",
      genre: "Sci-Fi, Action"
    },
    {
      id: 2,
      title: "No Time to Die (2021)",
      poster_path: "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg",
      backdrop_path: "https://m.media-amazon.com/images/M/MV5BNGEyYjU3N2QtYzE5YS00YWI3LTkzNDYtYzM3Y2VlYjY0ZGRhXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
      overview: "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
      rating: "7.3/10",
      trailer: "https://www.youtube.com/embed/BIhNsAtPbPI",
      duration: "2h 43m",
      genre: "Action, Adventure, Thriller"
    },
    {
      id: 3,
      title: "The Suicide Squad (2021)",
      poster_path: "https://m.media-amazon.com/images/M/MV5BNGM3YzdlOWYtNjViZS00MTE2LWE1MWUtZmE2ZTcxZjcyMmU3XkEyXkFqcGdeQXVyODEyMTI1MjA@._V1_FMjpg_UX1000_.jpg",
      backdrop_path: "https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
      overview: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
      rating: "7.2/10",
      trailer: "https://www.youtube.com/embed/jz1FrtMIh5c",
      duration: "2h 12m",
      genre: "Action, Adventure, Comedy"
    },
    {
      id: 4,
      title: "Shang-Chi and the Legend of the Ten Rings (2021)",
      poster_path: "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      backdrop_path: "https://m.media-amazon.com/images/M/MV5BMzIwNDQzNTEtYmY0MS00NTQyLWJhY2UtYzAwY2U1ZTNhNzEwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
      overview: "Martial-arts master Shang-Chi confronts the past he thought he left behind when he's drawn into the web of the mysterious Ten Rings organization.",
      rating: "7.4/10",
      trailer: "https://www.youtube.com/embed/8YjFbMbfXaQ",
      duration: "2h 12m",
      genre: "Action, Adventure, Fantasy"
    },
    {
      id: 5,
      title: "Black Widow (2021)",
      poster_path: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      backdrop_path: "https://m.media-amazon.com/images/M/MV5BOWVmZGQ0MGYtMDI1Yy00MDkxLWJiYjQtMmZjZmQ0NDFmMDRhXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg",
      overview: "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
      rating: "6.7/10",
      trailer: "https://www.youtube.com/embed/RxAtuMu_ph4",
      duration: "2h 14m",
      genre: "Action, Adventure, Sci-Fi"
    },
    {
      id: 6,
      title: "Eternals (2021)",
      poster_path: "https://m.media-amazon.com/images/M/MV5BMTExZmVjY2ItYTAzYi00MDdlLWFlOWItNTJhMDRjMzQ5ZGY0XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_FMjpg_UX1000_.jpg",
      backdrop_path: "https://m.media-amazon.com/images/M/MV5BOTYzMTlhNTAtYjE1ZS00ZjQwLWJjMWMtNzUwYzI0YzgyOWNiXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg",
      overview: "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.",
      rating: "6.3/10",
      trailer: "https://www.youtube.com/embed/x_me3xsvDgk",
      duration: "2h 37m",
      genre: "Action, Adventure, Fantasy"
    },
    {
      id: 7,
      title: "Dune (2021)",
      poster_path: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      backdrop_path: "https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      overview: "Feature adaptation of Frank Herbert's science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
      rating: "8.0/10",
      trailer: "https://www.youtube.com/embed/n9xhJrPXop4",
      duration: "2h 35m",
      genre: "Sci-Fi, Adventure"
    },
    {
      id: 8,
      title: "The French Dispatch (2021)",
      poster_path: "https://m.media-amazon.com/images/M/MV5BNmQxZTNiODYtNzBhYy00MzVlLWJlN2UtNTc4YWZjMDIwMmEzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      backdrop_path: "https://m.media-amazon.com/images/M/MV5BZTFhMDdmODEtN2UwOS00ZjQwLTgxMGYtM2JlMGM3YTUyM2FjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
      overview: "A love letter to journalists set in an outpost of an American newspaper in a fictional 20th-century French city that brings to life a collection of stories published in 'The French Dispatch' magazine.",
      rating: "7.2/10",
      trailer: "https://www.youtube.com/embed/TcPk2p0Zaw4",
      duration: "1h 48m",
      genre: "Comedy, Drama, Romance"
    },
    {
      id: 9,
      title: "Last Night in Soho (2021)",
      poster_path: "https://m.media-amazon.com/images/M/MV5BZjgwZDIwY2MtNGZlNy00NGRlLWFmNTgtOTBkZThjMDUwMGJhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
      backdrop_path: "https://m.media-amazon.com/images/M/MV5BNDVhYjE1YzktZTk2Ny00MGY1LWIzOWQtOWFkM2M1OTI3YzVkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
      overview: "An aspiring fashion designer is mysteriously able to enter the 1960s where she encounters a dazzling wannabe singer. But the glamour is not all it appears to be and the dreams of the past start to crack and splinter into something darker.",
      rating: "7.1/10",
      trailer: "https://www.youtube.com/embed/AcVnFrxjPjI",
      duration: "1h 56m",
      genre: "Horror, Mystery, Thriller"
    },
    {
      id: 10,
      title: "Free Guy (2021)",
      poster_path: "https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
      backdrop_path: "https://m.media-amazon.com/images/M/MV5BOWVmZGQ0MGYtMDI1Yy00MDkxLWJiYjQtMmZjZmQ0NDFmMDRhXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg",
      overview: "A bank teller discovers he is actually a background player in an open-world video game, and decides to become the hero of his own story.",
      rating: "7.1/10",
      trailer: "https://www.youtube.com/embed/X2m-08cOAbc",
      duration: "1h 55m",
      genre: "Action, Adventure, Comedy"
    },
  ]
};

const renderMovies = (movies, containerId) => {
    const container = document.querySelector(`#${containerId} .slider-track`);
    if (!container) return;
    container.innerHTML = "";
    movies.forEach((movie) => {
        if (!movie.poster_path) return;
        const movieSlide = document.createElement("div");
        movieSlide.classList.add("slider-slide");
        movieSlide.dataset.backdrop = movie.backdrop_path || '';
        movieSlide.innerHTML = `
            <div class="movie-card">
                <button onclick="showMovieDetail(${movie.id})">
                    <img src="${movie.poster_path}" alt="${movie.title}">
                    <div class="movie-info">
                        <h4>${movie.title}</h4>
                        <span class="rating">${movie.rating}</span>
                    </div>
                </button>
            </div>
        `;
        container.appendChild(movieSlide);
    });
    if (movies.length > 0 && movies[0].backdrop_path) {
        updateBackgroundImage(movies[0].backdrop_path);
    }
};

const updateBackgroundImage = (backdropPath) => {
    if (!backdropPath) return;
    const backgroundElement = document.querySelector('.background-poster');
    if (backgroundElement) {
        backgroundElement.style.backgroundImage = `url(${backdropPath})`;
    }
};

const renderMovieGrid = (movies, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    container.style.display = "flex";
    container.style.flexDirection = "row";
    container.style.overflowX = "auto";
    container.style.gap = "32px";
    movies.forEach((movie) => {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.style.minWidth = "220px";
        card.style.maxWidth = "220px";
        card.style.flex = "0 0 auto";
        card.innerHTML = `
            <div class="movie-poster-preview" style="cursor:pointer;">
                <img src="${movie.poster_path}" alt="${movie.title}" style="width:100%;border-radius:12px;height:320px;object-fit:cover;">
            </div>
            <div class="movie-info" style="padding:10px 0;">
                <h2 style="font-size:1.1rem;color:#b2070f;margin:0 0 6px 0;">${movie.title}</h2>
                <div class="genre" style="color:#444;font-size:0.98rem;margin-bottom:4px;">${movie.genre}</div>
                <div class="rating" style="color:#e50914;font-weight:bold;font-size:1rem;margin-bottom:4px;">${movie.rating}</div>
            </div>
        `;
        card.querySelector('.movie-poster-preview').onclick = () => showMovieDetail(movie.id);
        container.appendChild(card);
    });
};

const showMovieDetail = (movieId) => {
    let movie = null;
    for (const category in MOVIES_DATA) {
        movie = MOVIES_DATA[category].find(m => m.id == movieId);
        if (movie) break;
    }
    if (movie) {
        document.getElementById("movie-detail").innerHTML = `
            <div class="movie-detail-container">
                <div class="movie-poster">
                    <img src="${movie.poster_path}" alt="${movie.title}">
                </div>
                <div class="movie-info">
                    <h1>${movie.title}</h1>
                    <div class="meta-info">
                        <span class="rating">⭐ ${movie.rating}</span>
                        <span>${movie.duration}</span>
                        <span>${movie.genre}</span>
                    </div>
                    <p class="overview">${movie.overview}</p>
                    <div class="trailer-container">
                        ${movie.trailer ? `<iframe width="100%" height="400" src="${movie.trailer}" frameborder="0" allowfullscreen></iframe>` : `<em>No trailer available</em>`}
                    </div>
                    <button onclick="closeMovieDetail()" class="close-btn">Close</button>
                </div>
            </div>
        `;
        document.getElementById("movie-detail").style.display = "block";
        document.body.style.overflow = "hidden";
    }
};

const closeMovieDetail = () => {
    document.getElementById("movie-detail").style.display = "none";
    document.body.style.overflow = "auto";
};

document.addEventListener("DOMContentLoaded", () => {
    renderMovieGrid(MOVIES_DATA.now_playing, "now-showing-grid");
    renderMovieGrid(MOVIES_DATA.upcoming, "upcoming-grid");
    setBackgroundPoster(MOVIES_DATA.now_playing);
});

const fetchMovies = (category, containerId) => {
    if (MOVIES_DATA[category]) {
        renderMovies(MOVIES_DATA[category], containerId);
    }
};

const setBackgroundPoster = (movies) => {
    if (movies.length > 0 && movies[0].backdrop_path) {
        updateBackgroundImage(movies[0].backdrop_path);
    }
};