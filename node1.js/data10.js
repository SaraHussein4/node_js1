const fs = require("fs")
const allData = require("./allData.js")

  const addPerson = (fname , lname , city , age , id) => {
       const allData = loadData()
        allData.push ({
            id : id,
            fname : fname,
            lname: lname,
            city : city,
            age : age
        })
        saveAllData(allData)
  }
  const loadData = () => {
        try {
            const dataJson = fs.readFileSync ("data10.json").toString()
            return JSON.parse (dataJson)
        } catch {
                return []
        }
}
const saveAllData = (allData) => {
    const saveAllDataJson = JSON.stringify(allData) 
    fs.writeFileSync("data10.json" , saveAllDataJson)
}
const deleteData = () => {
    const allData = loadData()
    const dataKeep = allData.filter((obj) => {
      return (obj.id != 4 && obj.id != 6)
    }) 
    saveAllData(dataKeep)
    console.log("delete") 
  }
  /////////////////////////////////////////////////////////////////// 
  const delData = (id) => {
    const allData = loadData()
    const dataKeepp = allData.filter((obj) => {
      return obj.id!=id
    }) 
    saveAllData(dataKeepp)
    console.log("delete")
  
  }
//////////////////////////////////////////////////////////////////
  
    const readData = () => {
        const allData = loadData()
        const itemNeeded = allData.find((obj) => {
             return obj.id === 5 
        })
        console.log(itemNeeded)
    }
//////////////////////////////////////////////////////////////////

const listData = () => {
    const allData = loadData()

    allData.forEach ((obj) => {
        console.log(obj.fname , obj.lname)
    })
}
 

module.exports = {
addPerson,
deleteData, 
delData,
readData,
listData
}