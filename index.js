// Code your solution in this file!
function logDriverNames(array){
    array.filter(function(driver){
        console.log(driver.name)
    })
}


function logDriversByHometown(array, location){
    return array.map(function(driver){
        if(driver.hometown === location){
            console.log(driver.name)
        }
    })

}

function driversByRevenue(array){
    return array.slice().sort(function (a ,b){
        return a.revenue - b.revenue;
    })

}

const driversByName = function (drivers) {
    return drivers.slice().sort(function (driverOne, driverTwo) {
      return driverOne.name.localeCompare(driverTwo.name);
    });
  };
  
  const totalRevenue = function (drivers) {
    return drivers.reduce(function (total, currentDriver) {
      return currentDriver.revenue + total;
    }, 0);
  };
  
  const averageRevenue = function (drivers) {
    return totalRevenue(drivers) / drivers.length;
  };