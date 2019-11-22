//takes in an equation as an array and performs basic arithmetic in the order of operations
const basicMathOps = equationArray => {
    const equationArr = [...equationArray]
    
    while(equationArr.includes('*')) {
      for(let i = 0; i < equationArr.length; i++) {
        if(equationArr[i] === '*') {
          const newNum = equationArr[i - 1]*equationArr[i + 1]
          equationArr.splice(i-1, 3, newNum)
        }
      }
    }
  
    while(equationArr.includes('/')) {
      for(let i = 0; i < equationArr.length; i++) {
        if(equationArr[i] === '/') {
          const newNum = equationArr[i - 1]/equationArr[i + 1]
          equationArr.splice(i-1, 3, newNum)
        }
      }
    }
  
    while(equationArr.includes('+')) {
      for(let i = 0; i < equationArr.length; i++) {
        if(equationArr[i] === '+') {
          const newNum = equationArr[i - 1] + equationArr[i + 1]
          equationArr.splice(i-1, 3, newNum)
        }
      }
    }
  
    while(equationArr.includes('-')) {
      for(let i = 0; i < equationArr.length; i++) {
        if(equationArr[i] === '-') {
          const newNum = equationArr[i - 1] - equationArr[i + 1]
          equationArr.splice(i-1, 3, newNum)
        }
      }
    }

    const result = equationArr[0]

    return result
}

//takes in an equation as a string and outputs equation as an array
const arrayifyEquation = equationStr => {
    const equationArray = []

    for(let i = 0; i < equationStr.length; i++) {

        if(isNaN(equationStr[i]) && equationStr[i] !== '.') {
            equationArray.push(equationStr[i])
        } else {
            let num = equationStr[i]
            
            while(isNaN(equationStr[i + 1]) === false || equationStr[i+1] == '.') {
                num += equationStr[i + 1]
                i++
            }

            num = parseFloat(num)
            equationArray.push(num)
        }
    }

    return equationArray
}

//takes in an equation as a string (ex: '1+1', '2*3+1') and returns solution as an integer
const calculate = (equationStr) => {
    let equationArr = arrayifyEquation(equationStr)
    const solution = basicMathOps(equationArr)
    return solution
}

export default calculate