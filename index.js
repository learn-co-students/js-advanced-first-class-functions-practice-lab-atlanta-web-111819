// Code your solution in this file!
function logDriverNames(array) {
    array.forEach(function(driver) {
        console.log(driver.name)
    })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
      if(driver.hometown == location) {
          console.log(driver.name)
      }
  })
}

function driversByRevenue(drivers) {
    let sorted = drivers.slice(0)
    
    sorted.sort(function(a, b) {
        return a.revenue - b.revenue;
    })
    return sorted;
 }

 function driversByName(drivers) {
    let sorted = drivers.slice(0);
    sorted.sort(function(a, b) {
        return a.name.localeCompare(b.name)
    });
    return sorted;
 }

 function totalRevenue(drivers) {
    return drivers.reduce((sum, driver) => sum + driver.revenue, 0);
}

function averageRevenue(drivers) {
    return totalRevenue(drivers)/drivers.length;
}
