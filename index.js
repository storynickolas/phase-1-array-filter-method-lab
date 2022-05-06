// Code your solution here
function findMatching(driverList, driverName) {
  let driverMatches = []
  const caps = driverName.toUpperCase()
  driverList.filter(function (driver) {
    if(driver.toUpperCase() === caps) {
      driverMatches.push(driver)
    };
  })
    return driverMatches
}

function fuzzyMatch(driverList, startLetter) {
  let fuzzyMatches = []
  const capLetter = startLetter.toUpperCase()
  driverList.filter(function (driver) {
    if(driver.toUpperCase().indexOf(capLetter) === 0) {
      fuzzyMatches.push(driver)
    };
  })
    return fuzzyMatches
}


function matchName(driverList, driverName) {
  let matchedNames = []
  driverList.filter(function (driver) {
    if(driver.name === driverName) {
      matchedNames.push(driver)
    };
  })
    return matchedNames
}