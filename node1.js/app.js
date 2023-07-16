 const  fs = require ("fs")
 const yargs = require("yargs")
const data10 = require ("./data10")
yargs.command({
    command : "add",
    describe: "to add an item",
    builder: {
        fname : {
            describe: "adding the first name ",
            demandOption: true,
            type: "string"
        },
        lname : {
            describe: "adding the last name ",
            demandOption: true,
            type: "string"
        },
        id : {
            describe: "adding the id ",
            demandOption: true,
            type: "string"
        },
        age : {
            describe: "adding the age ",
            demandOption: true,
            type: "string"
        },
        city : {
            describe: "adding the city ",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x)=> {
        data10.addPerson(x.fname , x.lname , x.city , x.age , x.id )
    }
 })
 yargs.command ({
    command : "read",
    describe : "to read data",
    handler : ()=> {
        data10.readData ()
    }
 })
 yargs.command ({
    command : "Delete",
    describe : "to delete person data",
    handler : ()=> {
        data10.deleteData ()
    }
 })
 yargs.command ({
    command : "delete",
    describe : "to delete person by id",
    builder:{
        id:{
            describe:"this is id",
            demandOption:true,
            type:"string"
        }
    },
    handler : ()=> {
        data10.delData ()
    }
 })
 yargs.command ({
    command :"list",
    describe : "list data",
    handler : ()=>{
        data10.listData()
    }
 })
 yargs.parse()