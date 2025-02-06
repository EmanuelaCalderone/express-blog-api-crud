//importo i post
const posts = require('../data/posts');


//funzioni relative alle rotte

//funzione index - restituisce tutti i post
function index(req, res) {
    //res.send('Mostro tutti i post');

    //inizializzo il psot filtrato associandolo a quello originale
    let filteredPosts = posts;

    if (req.query.tags) {
        filteredPosts = filteredPosts.filter(
            post => post.tags.includes(req.query.tags)
        );
    }
    //restituisco l'array in json
    res.json(filteredPosts);
}

//funzione show
function show(req, res) {
    //res.send('Mostro un singolo elemento')

    //recupero l'id dal parametro della rotta e lo parso in numero
    const postId = parseInt(req.params.id)
    //cerco il post per id e con find restituisco il primo
    const singlePost = posts.find(post => post.id === postId);

    //bonus
    //se il post non esiste
    if (!singlePost) {
        
        //ritorno errore 404
        res.status(404);

        //ritorno messaggio di errore
        return res.json({
            error: "Not found",
            message: "Post non trovato"
        });
    }

    //altrimenti restituisco il post in json
    res.json(singlePost);
}

//funzione store
function store(req, res) {
    res.send('Creazione nuovo post');
}

//funzione update
function update(req, res) {
    res.send(`Modifica totale del post con ID: ${req.params.id}`);
}

//funzione modify
function modify(req, res) {
    res.send(`Modifica parziale del post con ID: ${req.params.id}`);
}

//funzione destroy per eliminare un singolo post
function destroy(req, res) {
    //res.send(`Rimozione post con ID: ${req.params.id}`);

    //estraggo l'id dal parametro della rotta e lo parso in numero
    const postId = parseInt(req.params.id);

    //cerco il post per indice il post da eliminare
    const post = posts.find(post => post.id === postId);

    //bonus
    //se il post non esiste
    if (!post) {
        
        //ritorno errore 404
        res.status(404);

        //e ritorno messaggio di errore
        return res.json({
            error: "Not found",
            message: "Post non trovato"
        });
    }

    //rimuovo il post eliminato dalla lista
    posts.splice(posts.indexOf(post), 1);

    //stampo in console la lista aggiornata senza il file eliminato
    console.log("Lista aggiornata dei post:" , posts);

    //ritorno lo stato 204 per avviso eliminazione avvenuta
    res.sendStatus(204);
}


//esporto tutto
module.exports = {index, show, store, update, modify, destroy}
