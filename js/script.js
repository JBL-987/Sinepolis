const API_KEY = "cd5f64d3510476839238b8c920f35494"; // free api key feel free to use
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const BACKDROP_URL = "https://image.tmdb.org/t/p/original"; 
const YOUTUBE_BASE_URL = "https://www.youtube.com/embed/";

const renderMovies = (movies, containerId) => {
    const container = document.querySelector(`#${containerId} .swiper-wrapper`);
    if (!container) return;
    container.innerHTML = "";
    movies.forEach((movie) => {
        if (!movie.poster_path) return;
        const movieSlide = document.createElement("div");
        movieSlide.classList.add("swiper-slide");
        movieSlide.dataset.backdrop = movie.backdrop_path || '';
        movieSlide.innerHTML = `
            <div class="movie-card">
                <button onclick="window.location.href = 'movie.html?id=${movie.id}'">
                <img src="${IMAGE_URL}${movie.poster_path}" alt="${movie.title}">
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
        backgroundElement.style.backgroundImage = `url(${BACKDROP_URL}${backdropPath})`;
        console.log("Background updated to:", backdropPath);
    } else {
        console.error("Element .background-poster tidak ditemukan");
    }
};

const fetchMovies = async (category, containerId) => {
    try {
        const movieurl = `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US`;
        const response = await fetch(movieurl);
        const data = await response.json();
        if (data.results) {
            renderMovies(data.results, containerId);
        }
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
};

const fetchMoviesDetails = async (movieId) => {
    try {
        const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
        const data = await response.json();
        document.getElementById("movie-title").textContent = data.title;
        document.getElementById("movie-poster").src = IMAGE_URL + data.poster_path;
        document.getElementById("movie-overview").textContent = data.overview;
        document.getElementById("movie-rating").textContent = data.vote_average;
        fetchMovieTrailer(movieId);
    } catch (error) {
        console.error("Error fetching movie details:", error);
    }
};

const fetchMovieTrailer = async (movieId) => {
    try {
        const response = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`);
        const data = await response.json();
        const trailer = data.results.find(video => video.type === "Trailer" && video.site === "YouTube");
        if (trailer) {
            document.getElementById("movie-trailer").src = YOUTUBE_BASE_URL + trailer.key;
        }
    } catch (error) {
        console.error("Error fetching movie trailer:", error);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get("id");
    if (movieId) {
        fetchMoviesDetails(movieId);
    } else {
        fetchMovies("now_playing", "in-theaters");
        setTimeout(() => {
            if (window.swiper) {
                window.swiper.on('slideChange', function() {
                    const activeSlide = this.slides[this.activeIndex];
                    if (activeSlide) {
                        const backdropPath = activeSlide.dataset.backdrop;
                        if (backdropPath) {
                            updateBackgroundImage(backdropPath);
                        }
                    }
                });
                console.log("Swiper event listener terpasang");
            } else {
                console.error("Swiper tidak ditemukan");
            }
        }, 1000);
    }
});