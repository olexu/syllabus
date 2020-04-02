# Syllabus
Application allows to add/edit/search syllabi

## Used technologies
- MySQL 8+
- ASP.NET Core 3.1+
- React 16+
- Material UI 4+
- Typescript 3.7+

## Development environment requirements
- MySQL 8
- Microsoft Visual Studio Community 2019
- Microsoft Visual Studio Code
- Node.js 12

## How to debug/modify code
1. Install **yarn** globally. Run next command in console: `npm install yarn -g`
2. Open Visual Studio and install 'GitHub Extension for Visual Studio'
3. Clone repository (using Visual Studio)
4. Open repository root folder and run next command in console: `yarn`
5. Open Source/Syllabus/ClientApp folder and run next command in console: `yarn`
6. Open solution in Visual Studio
7. Check appSetting.json for valid connectionString to database
8. Open ClientApp folder in Visual Studio Code
9. Install below extensions for VS Code (VS should promt to install recommendations)
   - ESLint 
   - Prettier - Code formatter
   - TypeScript Import Sorter
   - Material Icon Theme
10. Start debug mode in Visual Studio
11. Modify frontend code (Live reloading works)

## Possible issues
#### Problem with SSL
You tried to setup a development environment for a website that uses a self signed SSL cert. 
The problem occured right after the start - especially Chrome displayed those wonderful error messages:
- ERR_CONNECTION_RESET
- ERR_CERT_AUTHORITY_INVALID

**Solution**:
- Open elevated powershell
- Go to ```C:\Program Files (x86)\IIS Express```
- Run ```.\IisExpressAdminCmd.exe setupsslUrl -url:https://localhost:10001/ -UseSelfSigned```
- Enjoy


## How to create a Release
- Clone repository
- Open repository root folder. Run next command in console: `yarn`
- In the same folder run next command: `yarn build`
