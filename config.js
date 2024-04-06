const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs="+234 704 418 9740"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="mathara,colombo,sri lanka."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sennin:ero@cluster0.nruhk72.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null"+234 704 418 9740;
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+234 704 418 9740";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "9231844744176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_36_04_06_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaUVSWDY5blJsZ3ZFNXBMZ09Oazg0UXRSTjZzM1BNM3daRXduK2J1cnpuOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImEyZzUvYm1ldXA5aFRhajF1ZmpON0xpalQwajN6S2hWVEFUQ2NmZUdiMlk9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiOEg4TzNLK21kdTA5UXlET01lWkZJSnh0ODJQSi9qTHRmQ2VDQ3JvNjVGQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInpsNFhZVTVnUEZScVBjeEVkQjJQd1diKzNaYzlKalJGNnJwUklQQU8wWHc9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSUxQNEN3dFZFRjlqcDlBSkhPWVdxTk9FUmhrRTBwbWRjaTMxVUV4bjFsYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlhFWC9WMVRjRHJYeVdRVmJhaXcrcWZqV1RqYlQwV0gyTnNnYTEvajNEaXc9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIrUFhaR3F2NXJISnFuMVdXRVdqMFhIVUNwZ002amFTY0dWVzFwYzE5YzFjPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYU1HdFVYV1loUDRLb1ZSTFNpaXFHbkNvU1p4MWVzampucTJoeUtSUXgxQT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJlWjA0VVJWMExTN2dPaC8yb1RaTktpMWFKUHJ4YXkwTlVGWUtMN0x6SlVoWUZIQ2s0c1pzUElGT0l4bjlQOTJBQk9tOC9wYjdmcmNlSjUvTllHR1pDUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NzAsXCJhZHZTZWNyZXRLZXlcIjpcIlRUMThpWDZjajV3b3NzTmFwMXpPVXBWdktaUkFtcWtOR09oSU9TSGhrdEk9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyMzQ3MDQ0MTg5NzQwQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjU2ODVBMzNBMTMyNkNCOTYyM0IzQzI0NDI1QjlBNTM5XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTI0MTA1NzV9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjM0NzA0NDE4OTc0MEBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCJDQTkzMTFDNEUxMEZGRkZFNkY4NUYwRDJDREE0RTk5M1wifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzEyNDEwNTc2fV0sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjoxLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiTk45UUZPTUZUVFdUSkJ1MXV5dFpYd1wiLFwicGhvbmVJZFwiOlwiZTgwMzE0OTUtZDcwNy00NTA5LThjODItZmM5MWQ4YWRlMGJhXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJnOTdRUU5JVjE5QzVWbW1MM3lpNnhTTjY1WEU9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidUtHMjRUNmFDcnJKdnpjNUc5dE9EZDVoNVV3PVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIjdNNTUzV1ROXCIsXCJtZVwiOntcImlkXCI6XCIyMzQ3MDQ0MTg5NzQwOjExQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjE2ODUzMDY1Nzk5NjkyOToxMUBsaWRcIixcIm5hbWVcIjpcIuKYg++4j0NpZXPDpSBMw6ggTm/Dr3LDq1wifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTXk2L2R3SEVNZWZ4YkFHR0FFZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIjRQUWVjLy9PdDF5bWR6S2swTXJDVE43eTV5a3F0L29ocDl5cU5nckJFVHM9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJXcVhwR3Vpc0srL2FWNkEwNWJQUjMza3AxVzQ1d2FYZ1RoVjlhRGNRVG16dlcvdmNQQ3BXeEp3QkRwVS95NzMvWVJuZ3ZTNmFNdEV5QkJkMzVjVGVCQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcInIxb3lwdXZpcDlZcFlEWmI4dmNTdVZKUnZuWW5GS1JaWlRMMzJ6UVpSN2wzbk55dC9ka3FOaktwcXBzMlVPOEJzSHc3V1FjNjBiai9oYi81cjJEZEJnPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyMzQ3MDQ0MTg5NzQwOjExQHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQmVEMEhuUC96cmRjcG5jeXBOREt3a3plOHVjcEtyZjZJYWZjcWpZS3dSRTdcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzEyNDEwNTcwLFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUFSZVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFSZS5qc29uIjogIntcImtleURhdGFcIjpcInp6Nk1kVkFpRlZXdTdTbEV5ZkQ1TUpTQkVaNXduSXlxWG5pRTVmdGU1TXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA3NDA0MTY3MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "suhail",
  ownername:process.env.OWNER_NAME|| "Cieså",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
