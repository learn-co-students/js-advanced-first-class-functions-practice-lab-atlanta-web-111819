function logDriverNames(drivers){
    const callback = function(el, i, arr){
        console.log(el.name);
    };
    drivers.forEach(callback);
}

function logDriversByHometown(drivers, hometown){
    const callback = function(el){
        console.log(el.name)
    };

    const driverFilter = drivers.filter(driver => driver.hometown === hometown);
    driverFilter.forEach(callback);
}

function driversByRevenue(drivers){
    const compare = function(a,b){
        return a.revenue - b.revenue;
    };

    const driverSort = drivers.slice().sort(compare);
    return driverSort;
}

function driversByName(drivers){
    const compare = function(a,b){
        return a.name.localeCompare(b.name);
    }

    const driverSort = drivers.slice().sort(compare);
    return driverSort;
}

function totalRevenue(drivers){
    const reduceDriver = function(agg, el){
        return agg + el.revenue;
    }

    return drivers.reduce(reduceDriver, 0);
}

function averageRevenue(drivers){
    return totalRevenue(drivers) / drivers.length;
}
