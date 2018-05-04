//cargamos la aplicacion de electron
const app = require('electron').app;
//Para crear ventanas del sistema operativo
const BrowserWindow =require('electron').BrowserWindow;
const path=require('path');
const url=require('url');
//let es una constante
let PantallaPrincipal;

function muestraPantallaPrincipal()
{
	//creamos una pantalla vacia
	PantallaPrincipal=new BrowserWindow({width:620,height:825});
	//Le damos contenido a esa pantalla
	PantallaPrincipal.loadURL(url.format({
		pathname:path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}));
	//click derecho, inspeccionar en choreme
	PantallaPrincipal.webContents.openDevTools();
	//mostramos la pantalla
	PantallaPrincipal.show();
}


app.on('ready',muestraPantallaPrincipal);