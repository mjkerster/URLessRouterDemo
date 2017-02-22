const URLessRouter = require('URLessRouter');

/*********** WIZARD EXAMPLE **************/

// Configure Wizard Router
const router = new URLessRouter('wizardContent');

router.addRoute({
  path: '/step1',
  name: 'step1',
  templatePath: '/templates/wizard1.html'
});

router.addRoute({
  path: '/step2',
  name: 'step2',
  templatePath: '/templates/wizard2.html'
});

router.addRoute({
  path: '/step3',
  name: 'step3',
  template: '<div class="row"><div class="col-md-12 text-center"><h2>Registration Complete!</h3></div></div>'
});

// Call Step1 by default
router.goTo('step1');

// This is for demo purposes. Don't add to window scope.
window.goToStep2 = function goToStep2() {
  router.goTo('step2');
}
window.goToStep3 = function goToStep3() {
  router.goTo('step3');
}

/*********** PARAMETER AND ACTIONS EXAMPLE **************/

// Configure StarWars Router
const swRouter = new URLessRouter('starWarsContent');

swRouter.addRoute({
  path: '/characters',
  name: 'characters',
  templatePath: '/templates/starwars.html'
});

swRouter.addRoute({
  path: '/characters/{id}',
  name: 'characterDetails',
  templatePath: '/templates/starwarsDetails.html',
  actions: {
    characterInfo: function(params){
      $.ajax('http://swapi.co/api/people/'+params.id+'/')
      .done(function(res){
        $('#swname').html(res.name);
        $('#bYear').html(res.birth_year);
        $('#gender').html(res.gender);
        $('#height').html(res.height);
        $('#hair').html(res.hair_color);

      });
    }
  }
});

swRouter.goTo('characters');

window.getCharacterDetails = function getCharacterDetails(id){
  const params = {
    id: id
  };

  swRouter.goTo('characterDetails', params);
}

window.goBack = function back(){
  swRouter.goTo('characters');
}
