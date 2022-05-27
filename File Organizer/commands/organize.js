const fs = require("fs");
const path = require("path");
let types = {
    media: ["mp4", "mkv", "mp3", "jpg","png","jpeg"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
      "docx",
      "doc",
      "pdf",
      "xlsx",
      "xls",
      "odt",
      "ods",
      "odp",
      "odg",
      "odf",
      "txt",
      "ps",
      "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb","jar"],
  };
function organizeFn(dirpath){
    let destPath
    if(dirpath == undefined)
    {
        console.log('Please enter a valid Directory Path')
        return;
        //check whether folder path is given or not
    }
    else{//checking whether folder path exists or not
        let doesExist = fs.existsSync(dirpath)
        if(doesExist == true){
            destPath = path.join(dirpath, 'organizedFiles')
          //so first I will have to make a path for a folder
        
        if(fs.existsSync(destPath) == false){
            //if dont exist make a folder
            fs.mkdirSync(destPath)
        }
        else
        {//if already exist then dont make folder
            console.log('folder already exists')
        }
    }
    else{
        console.log('Please enter a valid path')
    }
}
organizeHelper(dirpath,destPath)
}

function organizeHelper(src,dest){
    let childNames = fs.readdirSync(src)
    //console.log(childNames)
    for(let i=0; i<childNames.length;i++)
    {
        let childAddress = path.join(src , childNames[i])//path is identified for all childern
        let CheckForFile = fs.lstatSync(childAddress).isFile()
       // console.log(childAddress + " " + CheckForFile)
       if(CheckForFile == true){
           let fileCategory = getCategory(childNames[i])//Abstraction
           console.log(childNames[i]+ " belongs to " + fileCategory)
           sendFiles(childAddress,dest,fileCategory)
       }
    }
}

function getCategory(filename){
    let ext = path.extname(filename)
    //console.log(ext)
    ext = ext.slice(1)
    //console.log(ext)
    for(let type in types){
      let cTypeArr = types[type];  
      for(let i=0;i<cTypeArr.length;i++)
      {
          if(ext == cTypeArr[i])
          {return type;
        }
      }
    }
    return "others";     
}

 function sendFiles(srcFilePath , dest , fileCategory)
 {
     let catPath = path.join(dest , fileCategory)//here we are making categoryPath to create folders
     if(fs.existsSync(catPath)==false){
         //check for is the category folder already exists
         fs.mkdirSync(catPath)
     }
     let fileName = path.basename(srcFilePath)
     let destPath = path.join(catPath , fileName)
     fs.copyFileSync(srcFilePath , destPath)
     fs.unlinkSync(srcFilePath)
     console.log(fileName + 'copied to ' + fileCategory)
 }


 module.exports={
     organizeFnKey : organizeFn
 }