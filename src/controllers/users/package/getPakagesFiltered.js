const { promRating } = require("../promRating")

const filterPackages = (packages, params) => {

    if ( params.maxPrice ) {
        packages = packages.filter(pk=> pk.price <= params.maxPrice).sort((a, b) => a.price - b.price)
        packages.reverse()
    }
    if (params.minPrice) {
        packages = packages.filter(pk=> pk.price >= params.minPrice).sort((a, b) => a.price - b.price)    
    }
    if (params.maxDuration) {
        packages = packages.filter(pk=> pk.duration <= params.maxDuration).sort((a, b) => a.duration - b.duration)   
        packages.reverse() 
    }
    if (params.minDuration) {
        packages = packages.filter(pk=> pk.duration >= params.minDuration).sort((a, b) => a.duration - b.duration)   
    }
    if (params.filterByDateInit) {
        packages = packages.filter(pk=> pk.dateInit == params.filterByDateInit);    
    }
    if (params.filterByDateFin) {
        packages = packages.filter(pk=> pk.dateEnd == params.filterByDateFin);    
    }

    return packages;    
};

module.exports = { filterPackages };