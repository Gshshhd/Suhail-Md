const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "2348060677590"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="mathara,colombo,sri lanka."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sennin:ero@cluster0.nruhk72.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/E39qMdWBujOHGVgWBY3XW1";
global.website=process.env.GURL || "https://chat.whatsapp.com/E39qMdWBujOHGVgWBY3XW1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348060677590" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,2348060677590";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348060677590";




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
global.read_status = process.env.AUTO_READ_STATUS || "True"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_24_04_03_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUUFYU0ZXUHhnUmdRVWR5eGxBTmhsVlE0QXZzc3NzQlU3bjB1SFZ6TGJIRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImYwa2hWaVFIellGdVRYZTJRTkN6UlN6cUFYdVpreFBxd0I2dGZJTUlsRzQ9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiOEtKT2UrbVhlWDVJcFBDK3VTNmFNWjNtUkJrSm5IeEsyekhoR2o0RUVHYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInZVcGNjTVBFdFB6L2VaMDZBUDZKTlNub0YyMXVFS2UwUE1DcWlCUDhjSEU9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidU0zYWJtWHZvR2NmSjBNRnpLZDZRcGRNTVFycmdRU2ZNWHJEQVlmeDZGYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlFad0xOMGFaSDFOOWZXa1ExVEdzd09YTkNYWU1NSW0yYjJ4N3JqdXlRMG89XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJtTTNFS2dabllNOVFtN2tURzlTQ0k1ZXFia0ttY1M3dFAxdVd4L1FJNTJrPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQ2p2bUtKdjlhTjhJNDhQYTV3Wk1TbU85SUl0YmQ2S3F1djlaaEdSaVpRbz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI3bytnMkRjcFphaUZsV3VzSWZxdGc5Y2V5VFF1ekQ2Sm91dnFSVGxXcXVPN1BaTDBvVG9VRW9UWmhqMjNiNy90ZFk0ZTl1c29yQTZTcnJad1RYaHlBdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTA3LFwiYWR2U2VjcmV0S2V5XCI6XCJtZW1vUndHdG9IazFSL3VzMitINndpOFQ0b1JiNmozOUZCQWFHTkhXcDBRPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiYkkyOEhzUnpUTi14a2RacHd1TjNOUVwiLFwicGhvbmVJZFwiOlwiZTY4YzFiZTctOGRmOS00MWRlLTllYjMtOTk1N2VkY2U2ZjM2XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJMeDh1YnhxV24wTTF1R1drRjcyclMzNmZzSTg9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlZSZzdLK0hWV29wNmNCTEhSd0wzOGRRN0RiVT1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSjY3eXJFQkVNcjR0TEFHR0FFZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIlpiM1FVL2NRRTZhWlhDelNHdW1xMjAxL0xFMldqZ0tteWdIdDc5WEpMeDg9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJuQTRtZ0NybG5Ebnp6MTYrYmtHcjcxN0pYd1g3ZGd3bmtNVTVONU55UE5VSWgzc2tEUG9lODZRNmNybXR0dWZkUFRrWlhoOFZ1V0pzaFFEUXZzS1FCZz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcImx1WVpmb0pWa3EvejJIY2IxRDdwNGlwcVlJdW5EeWJQbHI3bFFjUWw0S1VaZ2FoRjBsUzU3NVpRNmRQNTF4cjFwdXdRTjZJaVV3NHltVkdGU0hsYkRRPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyMzQ4MDYwNjc3NTkwOjNAcy53aGF0c2FwcC5uZXRcIixcIm5hbWVcIjpcIlBSSU5aXyRcIixcImxpZFwiOlwiMTY0Nzg1MTk0ODMxOTc0OjNAbGlkXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjM0ODA2MDY3NzU5MDozQHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQldXOTBGUDNFQk9tbVZ3czBocnBxdHROZnl4TmxvNENwc29CN2UvVnlTOGZcIn19XSxcInBsYXRmb3JtXCI6XCJzbWJhXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzEyMTQzNDM4LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUQzclwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQzcS5qc29uIjogIntcImtleURhdGFcIjpcInFkRGljUDc2bXlWL2kwMW9RbEJGVUdmd3c0Sjh3UWN3UkZaYWFJdll0SEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzcyNDE1OTAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTIwOTkxMjAzMzRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEM3IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMdkhZRjEwVURxdXo4cDZHV2E3K1NDSzErZW5EZlRxSU45ZElPaUdJQjhRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM3MjQxNTkwMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjE0MjY0ODg4NVwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Ikechukwu",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "suhail-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Prinz",


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
