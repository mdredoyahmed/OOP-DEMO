class Tbutton {
 static  createButton(color , text , size){
const button = `
       <button class = "bg-${color}-500 hover:bg-${text}-700 text-white font-bold py-${size} px-${size} rounded"> ${text}</button>

`

        return button ;
    }
}

