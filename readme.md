# Syllabus
Application allows to add/edit/search syllabi

## Used technologies
- MySQL 8+
- ASP.NET Core 3.1+
- React 16+
- Bootstap 4+
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
9. Install below extensions for VS Code (VS should promt to install reccomendations)
   - ESLint 
   - Prettier - Code formatter
   - TypeScript Import Sorter
   - Material Icon Theme
10. Start debug mode in Visual Studio
11. Modify frontend code (Live reloading works)

## How to create a Release
- Clone repository
- Open repository root folder. Run next command in console: `yarn`
- In the same folder run next command: `yarn build`
