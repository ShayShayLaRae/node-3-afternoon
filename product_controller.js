module.exports = {
    addProduct: (req, res) => {
        const db = req.app.get('db');
        const { name, description, price, image_url } = req.body;

        db.add_product([name, description, price, image_url])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Oops! Something went wrong.'})
        console.log(err);
        });
    },

    getOne: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.get_one(id)
        .then( product => res.status(200).send( product ) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong."});
          console.log(err)
        } );
    },

    getAll: (req, res) => {
        const db= req.app.get('db');

        db.get_all()
        .then( products => res.status(200).send( products ) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong."});
          console.log(err)
        } );
    },

    updateProduct: (req, res) => {
        const db= req.app.get('db');
        const {params, query} = req;

        db.update_product([params.id, query.desc])
        .then( () => res.sendStatus(200) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong."});
          console.log(err)
        } );
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.delete_product(id)
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong."});
            console.log(err)
          } );
    }
}