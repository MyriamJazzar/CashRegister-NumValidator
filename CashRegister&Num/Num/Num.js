function telephoneCheck(str) {
    const RegEx = /^(1\s?)?(\d{3}|\(\d{3}\))(\s|\-)?\d{3}(\s|\-)?\d{4}$/
    return RegEx.test(str)
  }
  
  console.log(telephoneCheck("1 555-555-5555")); 


// L fazet li staamalthom: 
//   ^:  beginning of the string
//   $ end of the string
//   (1\s?)? "1" or "1 " / ? => 0|1
//   \d{n} number of digits

