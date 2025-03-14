
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();
var cluster = require('cluster');

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.logger());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);
// Proyecto
app.get('/proyecto', routes.proyecto);
app.get('/proyecto/antecedentes', routes.antecedentes);
app.get('/proyecto/lota2', routes.lota2);
app.get('/proyecto/quienes', routes.quienes);
// Prensa
app.get('/prensa', routes.prensa);
app.get('/prensa/boletines_prensa', routes.boletines_prensa);
app.get('/prensa/boletines_externos', routes.boletines_externos);
// Participación
app.get('/participacion', routes.participacion);
app.get('/participacion/componente', routes.componente);
app.get('/participacion/talleres', routes.talleres);
app.get('/participacion/talleres2012', routes.talleres2012);
// Lineamientos
app.get('/lineamientos', routes.lineamientos);
app.get('/lineamientos/:linea', routes.linea);
// Galería
app.get('/galeria', routes.galeria);
app.get('/galeria/fotos', routes.fotos);
app.get('/galeria/mapas', routes.mapas);
// Contacto
app.get('/contacto', routes.contacto);

cluster(app)
    .use(cluster.logger('logs'))
    .use(cluster.stats())
    .use(cluster.pidfiles('pids'))
    .use(cluster.cli())
    .use(cluster.repl(8886))
    .listen(8080);
