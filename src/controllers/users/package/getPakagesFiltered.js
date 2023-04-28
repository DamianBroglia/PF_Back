const filterPackages = (packages, params) => {
    console.log(params)
    console.log (packages)
    if ( params.maxPrice ) {
        packages = packages.filter(pk=> pk.price <= params.maxPrice);
    }
    if (params.minPrice) {
        packages = packages.filter(pk=> pk.price >= params.minPrice);    
    }
    if (params.maxDuration) {
        packages = packages.filter(pk=> pk.duration <= params.maxDuration);    
    }
    if (params.minDuration) {
        packages = packages.filter(pk=> pk.duration >= params.minDuration);    
    }
    if (params.filterByDateInit) {
        packages = packages.filter(pk=> pk.date[0] == params.filterByDateInit);    
    }
    if (params.filterByDateFin) {
        packages = packages.filter(pk=> pk.date[1] == params.filterByDateFin);    
    }
    return packages;    
};

module.exports = { filterPackages };