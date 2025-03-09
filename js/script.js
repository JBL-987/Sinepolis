const API_KEY = "cd5f64d3510476839238b8c920f35494"; //free api key feel free to use
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const YOUTUBE_BASE_URL = "https://www.youtube.com/embed/";

const renderCombinedResults = (results, containerId) => {
    const container = document.querySelector(`#${containerId} .swiper-wrapper`);
    if (!container) return;
    container.innerHTML = "";
    results.forEach((item) => {
        if (!item.poster_path) return;
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        const targetUrl = item.type === 'movie' ? 'movie.html' : 'tv.html';
        slide.innerHTML = `
            <div class="media-card">
                <button onclick="window.location.href = '${targetUrl}?id=${item.mediaId}'">
                    <img src="${IMAGE_URL}${item.poster_path}" alt="${item.title}">
                </button>
            </div>
        `;
        container.appendChild(slide);
    });
};

const fetchMovies = async (query, containerId = "search-results") => {
    try {
        let movieurl;
        if (containerId === "search-results") {
            movieurl = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`;
        } else {
            movieurl = `${BASE_URL}/movie/${query}?api_key=${API_KEY}&language=en-US`;
        }
        const response = await fetch(movieurl);
        const data = await response.json();
        if (data.results) {
            renderMovies(data.results, containerId);
            initializeSwiper(containerId);
        }
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
};

const renderMovies = (movies, containerId) => {
    const container = document.querySelector(`#${containerId} .swiper-wrapper`);
    if (!container) return;
    container.innerHTML = "";
    movies.forEach((movie) => {
        if (!movie.poster_path) return;
        const movieSlide = document.createElement("div");
        movieSlide.classList.add("swiper-slide");
        movieSlide.innerHTML = `
            <div class="movie-card">
                <button onclick="window.location.href = 'movie.html?id=${movie.id}'">
                <img src="${IMAGE_URL}${movie.poster_path}" alt="${movie.title}">
                </button>
            </div>
        `;
        container.appendChild(movieSlide);
    });
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

const initializeSwiper = (containerId) => {
    const swiperMapping = {
        'in-theaters': 'theatersSwiper'
    };
    const swiperClass = swiperMapping[containerId];
    if (!swiperClass) return;
    new Swiper(`.${swiperClass}`, {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
            el: `.${swiperClass} .swiper-pagination`,
            clickable: true,
        },
        breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 4, spaceBetween: 10 }
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("query");
    if (query) {
        searchMovie(query);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get("id");
    if (movieId) {
        fetchMoviesDetails(movieId);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    fetchMovies("now_playing", "in-theaters");
});
