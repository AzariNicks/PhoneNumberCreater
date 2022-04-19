const cl = (TheThingYouWantToConsoleLog) => {console.log(TheThingYouWantToConsoleLog)}

const createPhoneNumber = (array) => {

    array.splice(0,0,'(')
    array.splice(4,0,')')
    array.splice(5,0,' ')
    array.splice(9,0,'-')
    

return array.join('')
}
cl(createPhoneNumber([9, 1, 8, 2, 3, 1, 9, 1, 1, 1]))