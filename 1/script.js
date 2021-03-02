import data from './data.json'
import {addOptionInSelect, getSelectValue, changeSelect} from './utillits'

const formOne = document.querySelector('#form-1')
const selectCity = document.querySelector('#city')
const selectEmployee = document.querySelector('#employee')
const selectGuild = document.querySelector('#guilds')
const selectBrigade = document.querySelector('#brigade')
const selectShift = document.querySelector('#shift')

addOptionInSelect(data.city, selectCity)
addOptionInSelect(data.guilds.Moscow, selectGuild)
addOptionInSelect(data.employees["guild-1"], selectEmployee)

selectCity.addEventListener('change', function () {
    changeSelect(this, selectGuild, data.guilds)
    changeSelect(selectGuild, selectEmployee, data.employees)
})

selectGuild.addEventListener('change', function () {
    changeSelect(selectGuild, selectEmployee, data.employees)
})


formOne.addEventListener('submit', (e) => {
    e.preventDefault()
    const result = {
        city: getSelectValue(selectCity),
        guild: getSelectValue(selectGuild),
        employee: getSelectValue(selectEmployee),
        brigade: getSelectValue(selectBrigade),
        shift: getSelectValue(selectShift)
    }
    document.cookie = `result=${JSON.stringify(result)}`
    console.log(document.cookie)
})