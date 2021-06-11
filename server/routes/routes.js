const PetController = require('../controllers/pets');
module.exports = app=>{
    app.post('/api/Pets', PetController.createPet);
    app.get('/api/Pets',PetController.getAllPet);
    app.get('/api/Pets/:id', PetController.getOnePet);
    app.delete('/api/Pets/:id', PetController.deletePet);
    app.put("/api/Pets/:id", PetController.updatePet);



}