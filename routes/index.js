
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'LOTA II' })
};

/*
 * GET Proyecto subsection.
 */

exports.proyecto = function(req, res){
  res.render('proyecto', { title: 'Descripción del proyecto' })
};

exports.antecedentes = function(req, res){
  res.render('antecedentes', { title: 'Antecedentes' })
};

exports.lota2 = function(req, res){
  res.render('lota2', { title: 'Presentación de LOTA II' })
};

exports.quienes = function(req, res){
  res.render('quienes', { title: 'Quienes somos' })
};

/*
 * GET Prensa subsection.
 */

exports.prensa = function(req, res){
  res.render('prensa', { title: 'Prensa' })
};

exports.boletines_prensa = function(req, res){
  res.render('boletines_prensa', { title: 'Boletines de prensa' })
};

exports.boletines_externos = function(req, res){
  res.render('boletines_externos', { title: 'Boletines externos' })
};

/*
 * GET Participacion subsection.
 */

exports.participacion = function(req, res){
  res.render('participacion', { title: 'Estrategia de participación' })
};

exports.componente = function(req, res){
  res.render('componente', { title: 'Concertación y comunicación' })
};

exports.talleres = function(req, res){
  res.render('talleres', { title: 'Talleres LOTA II' })
};

/*
 * GET Lineamientos subsection.
 */

exports.lineamientos = function(req, res){
  res.render('lineamientos', { title: 'Lineamientos' })
};

/*
 * GET Galeria subsection.
 */

exports.galeria = function(req, res){
  res.render('galeria', { title: 'Galería' })
};

exports.fotos = function(req, res){
  res.render('fotos', { title: 'Fotografías' })
};

exports.mapas = function(req, res){
  res.render('mapas', { title: 'Cartografía y análisis' })
};

/*
 * GET Contacto subsection.
 */

exports.contacto = function(req, res){
    console.log("contacto");
    res.render('contacto', { title: 'Información de contacto' })
};
