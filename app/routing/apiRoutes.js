// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var arrayOfObjects = require("../data/friends");
//========================================================================
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(arrayOfObjects);
    });

    app.post("/api/friends", function (req, res) {
        const newFriend = req.body;

        console.log(newFriend);

        // friends.push(newFriend);
        res.json(newFriend);



        arrayOfObjects.push(newFriend);
        res.json(newFriend);

        // res.json(true);
    });
};
