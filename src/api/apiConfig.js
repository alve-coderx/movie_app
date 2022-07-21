const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'cd2528cf8667e1bc231b1b89c30d3a09',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;