const {Package} = require("../../../db");

const getPackages = async ()=>{
    const packages = await Package.findAll()
    return packages
}

module.exports = getPackages;