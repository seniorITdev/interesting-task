const firebase = require("../../config/firebase");
const auth = require('../../middleware');

let express = require("express"),
router = express.Router();
const db = firebase.firestore();

const profilesDb = db.collection('profiles'); 

// @route    POST api/profile/create
// @desc     Add profile
// @access   Public
router.post('/create', auth.decodeToken, async (req, res) => {
    try {
        const profile = {
            fullName: req.body.fullName,
            age: req.body.age,
            description: req.body.description,
            imageURL: req.body.imageURL,
            uid: req.body.userId
        };
        await profilesDb.add(profile);
        res.send(profile);
    } catch(error) {
        res.send(error);
    }
});

// @route    GET api/profile/read
// @desc     Get all profile
// @access   Public
router.get('/read', auth.decodeToken, async (req, res) => {
    let obj = {};
    try {
        const response = await profilesDb.get();
        
        response.forEach(doc => {
            if(doc.data().uid === req.user) {
                obj[doc.id] = doc.data();
            }
        });
        res.send(obj);
    } catch(error) {
        res.send(error);
    }
});

// @route    PUT api/profile/update/:id
// @desc     Update profile by ID
// @access   Public
router.put('/update/:id', auth.decodeToken, async(req, res) => {
    try {
        const profileRef = await profilesDb.doc(req.params.id)
        .update(req.body);
        res.send(profileRef);
    } catch(error) {
        res.send(error);
    }
});

module.exports = router;