const DEFAULT_CITY = 'Warsaw';

const store = {
    getCity: () => {
        const city = localStorage.getItem('city');
        return city ? city : DEFAULT_CITY;
    },

    setCity: city => {
        localStorage.setItem('city', city);
    }
}

export default store;