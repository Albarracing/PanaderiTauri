// // const { app, BrowserWindow } = require("electron");
// // const path = require("path");

// // function createWindow() {
// //   const win = new BrowserWindow({
// //     width: 1200,
// //     height: 800,
// //     webPreferences: {
// //       preload: path.join(__dirname, "preload.js"),
// //       contextIsolation: true,
// //       enableRemoteModule: false,
// //       nodeIntegration: false,
// //       // Asegúrate de que la ruta base es correcta para el frontend
// //       // Puede que necesites ajustar esto según tu estructura
// //     },
// //   });

// //   // Ajusta la ruta del archivo HTML a la carpeta dist generada por Vite
// //   // win.loadFile(path.join(__dirname, "frontend/AdminPanaderia/dist/index.html"));
// //   mainWindow.loadURL("http://localhost:5173");
// //   // Abre las herramientas de desarrollo (opcional)
// //   // win.webContents.openDevTools();
// // }

// // app.whenReady().then(() => {
// //   createWindow();

// //   app.on("activate", () => {
// //     if (BrowserWindow.getAllWindows().length === 0) {
// //       createWindow();
// //     }
// //   });
// // });

// // app.on("window-all-closed", () => {
// //   if (process.platform !== "darwin") {
// //     app.quit();
// //   }
// // });

// /////////acc

// const { app, BrowserWindow } = require("electron");
// const path = require("path");

// function createWindow() {
//   // Crea una ventana de navegador
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, "preload.js"), // Ajusta la ruta si es necesario
//       nodeIntegration: true,
//       contextIsolation: false,
//     },
//   });

//   // Carga el archivo index.html en la ventana
//   mainWindow.loadURL("http://localhost:5173"); // Cambia esta URL si tu frontend está en otro lugar
// }

// // Este método será llamado cuando Electron haya terminado de inicializarse
// app.whenReady().then(() => {
//   createWindow();

//   // En macOS es común re-crear una ventana cuando el icono del dock es clicado
//   app.on("activate", () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//       createWindow();
//     }
//   });
// });

// // Salir de la aplicación cuando todas las ventanas estén cerradas, excepto en macOS
// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// });
