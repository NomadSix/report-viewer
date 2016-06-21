'use strict';

//You CAN use node modules, here, and inside the V8 instance
//this turns out being v useful for MySQL access, and potentially display bits
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
//Looks odd, but keeps JS from removing our window due to scope
let mainWindow;

function createWindow () {
  //Everything starts looking bad if the widow goes too small, so don't let that happen
  mainWindow = new BrowserWindow({width: 800, height: 600, 'minWidth': 800, 'minHeight': 600});
  mainWindow.loadURL('file://' + __dirname + '/app/app.html');

  //turn this on before sending it anywhere they don't need dev tools and it looks bad and is confusing
  //Note: This will disable the keyboard shortcuts for dev tools, reload, etc. So keep this off while we're debugging
  //mainWindow.setMenu(null);

  //To be perfectly honest, stuff past here shouldn't need configuring
  //(most of it's specifically designed for multi-window apps, but is still needed in some form)
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
