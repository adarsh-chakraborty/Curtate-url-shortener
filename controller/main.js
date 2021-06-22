const Url = require('../models/url');
const { nanoid } = require('nanoid');

const toplinks = new Map();

exports.getIndex = (req,res,next) => {
   
    res.render('index',{result: false,surl: null});
};

exports.postNewLink = (req,res,next) => {
    const eurl = req.body.eurl;
    let surl = nanoid(4);
    Url.create({surl: surl,durl: eurl}).then(()=> {
        console.log(surl);
         res.render('index',{result: true,surl: surl});
    }).catch(err => console.log(err));
    
    
};

exports.getDestination = (req,res,next) => {
    const dlink = req.params.dlink;
    if(toplinks.has(dlink)){
        console.log('Found link in hashmap');
        res.redirect(toplinks.get(dlink));
        // Response sent
    }else{
        console.log('Looking in database');
        Url.findOne({where: {surl: dlink}}).then(destination => {
            console.log(destination);
            if(destination){
                if(toplinks.size < 100){
                    console.log('Found, Adding to hashmap.');
                    toplinks.set(dlink,destination.durl);
                }
                res.redirect(destination.durl);
            }else{
                res.send('<html><head><title>404</title><body><h2>Hey, Looks like you\'ve hit a 404 page :?</h2><p>This link doesn\'t exist in our database. </p></body></head></html>')
            }
        }).catch(err => console.log(err));
    }
    
};