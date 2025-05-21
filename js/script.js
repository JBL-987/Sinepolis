const MOVIES_DATA = {
    now_playing: [
      {
        id: 1,
        title: "Dune: Part Two (2024)",
        poster_path: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
        backdrop_path: "https://m.media-amazon.com/images/M/MV5BZGFkNjQ0ZGItZTU5YS00N2I2LWIzNDEtNmM0NjI5NDM4NjU5XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
        overview: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
        rating: "8.5/10",
        trailer: "https://www.youtube.com/embed/U2Qp5pL3ovA",
        duration: "2h 46m",
        genre: "Sci-Fi, Adventure"
      },
      {
        id: 2,
        title: "The Batman (2022)",
        poster_path: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
        backdrop_path: "https://m.media-amazon.com/images/M/MV5BZmY2MzYzNTItMGEyOC00YjYyLTg5NDUtMTE1ODQ4ZDM1OTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        overview: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
        rating: "7.9/10",
        trailer: "https://www.youtube.com/embed/mqqft2x_Aa4",
        duration: "2h 56m",
        genre: "Action, Crime"
      },
      {
        id: 3,
        title: "Avatar: The Way of Water (2022)",
        poster_path: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        backdrop_path: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjY1MjkzMjE@._V1_.jpg",
        overview: "Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
        rating: "7.6/10",
        trailer: "https://www.youtube.com/embed/d9MyW72ELq0",
        duration: "3h 12m",
        genre: "Sci-Fi, Adventure"
      },
      {
        id: 4,
        title: "Top Gun: Maverick (2022)",
        poster_path: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
        backdrop_path: "https://m.media-amazon.com/images/M/MV5BODJlMzNlZWItYzc5OC00YzVlLThhZDMtM2FmNjE0ZTFmZWUyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
        overview: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
        rating: "8.3/10",
        trailer: "https://www.youtube.com/embed/giXco2jaZ_4",
        duration: "2h 11m",
        genre: "Action, Drama"
      },
      {
        id: 5,
        title: "Spider-Man: No Way Home (2021)",
        poster_path: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
        backdrop_path: "https://m.media-amazon.com/images/M/MV5BNzgwNTVjYWQtNTY3YS00NzIzLTgxZDAtN2FmZjI5ZjU3ZDViXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
        overview: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
        rating: "8.2/10",
        trailer: "https://www.youtube.com/embed/JfVOs4VSpmA",
        duration: "2h 28m",
        genre: "Action, Adventure"
      },
      {
        id: 6,
        title: "Godzilla x Kong: The New Empire (2024)",
        poster_path: "https://m.media-amazon.com/images/M/MV5BMjA1YjYwYjUtYjQxNC00YjYyLWIwYjktYjYwYjYwYjYwYjYwXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_FMjpg_UX1000_.jpg",
        backdrop_path: "https://m.media-amazon.com/images/M/MV5BMjA1YjYwYjUtYjQxNC00YjYyLWIwYjktYjYwYjYwYjYwYjYwXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
        overview: "Godzilla and Kong must unite against a colossal undiscovered threat hidden within the world, challenging their very existence and the survival of the human race.",
        rating: "7.8/10",
        trailer: "https://www.youtube.com/embed/odM92ap8_c0",
        duration: "1h 55m",
        genre: "Action, Sci-Fi"
      },
      {
        id: 7,
        title: "Ghostbusters: Frozen Empire (2024)",
        poster_path: "https://m.media-amazon.com/images/M/MV5BODJlMzNlZWItYzc5OC00YzVlLThhZDMtM2FmNjE0ZTFmZWUyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
        backdrop_path: "https://m.media-amazon.com/images/M/MV5BODJlMzNlZWItYzc5OC00YzVlLThhZDMtM2FmNjE0ZTFmZWUyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
        overview: "The Spengler family returns to New York to team up with the original Ghostbusters, who've developed a secret research lab to take their ghost-busting to the next level.",
        rating: "7.1/10",
        trailer: "https://www.youtube.com/embed/EQz-I1QkbIg",
        duration: "1h 55m",
        genre: "Comedy, Fantasy, Action"
      },
      {
        id: 8,
        title: "Oppenheimer (2023)",
        poster_path: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
        backdrop_path: "https://m.media-amazon.com/images/M/MV5BNTE2MDcwNTc0N15BMl5BanBnXkFtZTgwMTY0Mzk4NzE@._V1_.jpg",
        overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II, exploring the ethical challenges he faced in creating history's most destructive weapon.",
        rating: "8.4/10",
        trailer: "https://www.youtube.com/embed/uYPbbksJxIg",
        duration: "3h 00m",
        genre: "Biography, Drama, History"
      },
      {
        id: 9,
        title: "Barbie (2023)",
        poster_path: "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        backdrop_path: "https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        overview: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
        rating: "7.0/10",
        trailer: "https://www.youtube.com/embed/8zIf0XvoL9Y",
        duration: "1h 54m",
        genre: "Adventure, Comedy, Fantasy"
      },
      {
        id: 10,
        title: "Furiosa: A Mad Max Saga (2024)",
        poster_path: "https://m.media-amazon.com/images/M/MV5BNmFlMjY0YmUtMzg2MC00YjQ5LThhM2QtYmE5MDRiNmNlODRiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        backdrop_path: "https://m.media-amazon.com/images/M/MV5BNDQxZjhlZDEtMzE0OS00ZWUxLTk4YTMtNWY0MjUwMTQ5MDM5XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
        overview: "The origin story of renegade warrior Furiosa before her encounter with Mad Max. As the world falls, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus.",
        rating: "8.7/10",
        trailer: "https://www.youtube.com/embed/XdvDDVejVpU",
        duration: "2h 28m",
        genre: "Action, Adventure, Sci-Fi"
      },
      {
        id: 11,
        title: "The Fall Guy (2024)",
        poster_path: "https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtN2Y1ZC00MDgzLWJmZjgtNDg1ZDA3OGYwZWVlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        backdrop_path: "https://m.media-amazon.com/images/M/MV5BNzg5OTM5OTMzMV5BMl5BanBnXkFtZTgwMDQ4MzE0MjE@._V1_.jpg",
        overview: "Colt Seavers, a battle-scarred stuntman who, having left the business a year earlier to focus on both his physical and mental health, is drafted back into service when the star of a mega-budget studio film goes missing.",
        rating: "7.4/10",
        trailer: "https://www.youtube.com/embed/nM4iy0reaCA",
        duration: "2h 06m",
        genre: "Action, Comedy"
      },
      {
        id: 12,
        title: "Kingdom of the Planet of the Apes (2024)",
        poster_path: "https://m.media-amazon.com/images/M/MV5BNDkyOTkyMzctMzYwOC00ZDljLWE0MTktZDBmMGJlMmRlZjlmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        backdrop_path: "https://m.media-amazon.com/images/M/MV5BYmY5Y2Q3ZTEtZTJlNy00YmQ0LTk1NWEtNGI3YTJmYjVhZDU4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        overview: "Many years after the reign of Caesar, a young ape goes on a journey that will lead him to question everything he's been taught about the past and make choices that will define a future for apes and humans alike.",
        rating: "8.0/10",
        trailer: "https://www.youtube.com/embed/Sa83T-ZOeR4",
        duration: "2h 25m",
        genre: "Action, Adventure, Sci-Fi"
      }
    ],
    upcoming: [
      {
        id: 101,
        title: "Minecraft: The Movie (2025)",
        poster_path: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7e/Minecraft_movie_logo.png",
        backdrop_path: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7e/Minecraft_movie_logo.png",
        overview: "A teenage girl and her unlikely group of adventurers must save their blocky Overworld from the Ender Dragon.",
        rating: "-",
        trailer: "",
        duration: "-",
        genre: "Adventure, Family, Fantasy"
      },
      {
        id: 102,
        title: "Thunderbolts (2025)",
        poster_path: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/thunderbolts-movie-logo.jpg",
        backdrop_path: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/thunderbolts-movie-logo.jpg",
        overview: "A group of antiheroes and villains are recruited by the government for a dangerous mission.",
        rating: "-",
        trailer: "",
        duration: "-",
        genre: "Action, Adventure, Sci-Fi"
      },
      {
        id: 103,
        title: "Inside Out 2 (2024)",
        poster_path: "https://m.media-amazon.com/images/M/MV5BOTNjNWRjZDUtYjU1OC00NGFmLWE1ZjYtYzU5YjFlNjMyYzY1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        backdrop_path: "https://m.media-amazon.com/images/M/MV5BYWFiMGQwNmMtNjVhMS00ZWUwLTkzZTYtMDdmNzU1OWFmNTgwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        overview: "Riley, now a teenager, receives an unexpected visit from new emotions that shake things up in her mind Headquarters as she navigates the challenges of adolescence.",
        rating: "-",
        trailer: "https://www.youtube.com/embed/VKFoQFMS5ew",
        duration: "1h 36m",
        genre: "Animation, Adventure, Comedy"
      },
      {
        id: 104,
        title: "Deadpool & Wolverine (2024)",
        poster_path: "https://m.media-amazon.com/images/M/MV5BODllMGI5ODMtOGI3ZS00YTYzLWJjMzQtYjJiYjJmMmY5NjZjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        backdrop_path: "https://m.media-amazon.com/images/M/MV5BNmUzY2QyZjQtZGFmMy00MzgzLWJiODEtNDY0YjQ5NTRmZGYxXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
        overview: "Wolverine joins forces with the unconventional and loudmouthed Deadpool on a dangerous mission that will take them across the multiverse.",
        rating: "-",
        trailer: "https://www.youtube.com/embed/6YGYPSz02Y8",
        duration: "2h 07m",
        genre: "Action, Adventure, Comedy"
      },
      {
        id: 105,
        title: "A Quiet Place: Day One (2024)",
        poster_path: "https://m.media-amazon.com/images/M/MV5BMTMxYzNmODQtNmM5Yi00NjU1LTgyODctN2E1ZmNlZTQ5YWRlXkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_.jpg",
        backdrop_path: "https://m.media-amazon.com/images/M/MV5BNmE4MjkxNmUtNjFkMC00NDE2LTkzMmUtNjJiMTAxOTQyNGFjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        overview: "Experience the day the world went quiet, following a new character in New York City during the terrifying first days of the alien invasion.",
        rating: "-",
        trailer: "https://www.youtube.com/embed/S_1TU-6ng6o",
        duration: "1h 39m",
        genre: "Horror, Sci-Fi, Thriller"
      },
      {
        id: 106,
        title: "Venom: The Last Dance (2024)",
        poster_path: "https://m.media-amazon.com/images/M/MV5BOWVkOTQ1YmEtY2YzMC00OWI3LTkzNTQtZDI0ZTc5YWVmOTQxXkEyXkFqcGdeQXVyMTUzOTczNzYx._V1_.jpg",
        backdrop_path: "https://m.media-amazon.com/images/M/MV5BNTViNzUwMTgtOWQyZi00ZDY0LWFkZTktYzk5YjBjOThlZTgzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        overview: "Eddie Brock and Venom face their most dire challenge yet as they confront a terrifying new threat that may force them apart.",
        rating: "-",
        trailer: "https://www.youtube.com/embed/c7kXD3qrZ2A",
        duration: "2h 10m",
        genre: "Action, Adventure, Sci-Fi"
      }
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
        // Saat poster diklik, tampilkan modal detail (overview, trailer, dsb)
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