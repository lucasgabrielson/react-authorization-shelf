const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    for( let i = 900; i < 3000; i++) {
        console.log( 'here', i);
        if( i < 1000 ) {
            axios.get(`http://services.dnr.state.mn.us/api/sna/detail/v1?id=sna00${i}`)
                .then( results => {
                    if( results.data.status !== 'ERROR' ) {
                        if( results.data.result.species.tree_shrub[0].cname === '' && results.data.result.species.grass_sedge[0].cname === '' && results.data.result.species.wildflower[0].cname === '' ) {
                        } else {
                            console.log('in if endpoint exists');
                            let queryText = `INSERT INTO dnr_sna_endpoints ("endpoint") VALUES ('http://services.dnr.state.mn.us/api/sna/detail/v1?id=sna00${i}')`;
                                pool
                                    .query(queryText)
                                    .then(() => console.log(201))
                                    .catch((err) => {
                                    console.log('inserting api failed');
                                    })
                        }
                        
                    }            
                }).catch( err => {
                    console.log('error');
                })
        } else {
            axios.get(`http://services.dnr.state.mn.us/api/sna/detail/v1?id=sna0${i}`)
                .then( results => {
                    if( results.data.status !== 'ERROR' ) {
                        if( results.data.result.species.tree_shrub[0].cname === '' && results.data.result.species.grass_sedge[0].cname === '' && results.data.result.species.wildflower[0].cname === '' ) {
                        } else {
                            console.log('in if endpoint exists');
                            let queryText = `INSERT INTO dnr_sna_endpoints ("endpoint") VALUES ('http://services.dnr.state.mn.us/api/sna/detail/v1?id=sna0${i}')`;
                                pool
                                    .query(queryText)
                                    .then(() => console.log(201))
                                    .catch((err) => {
                                    console.log('inserting api failed');
                                    })
                        }
                        
                    }
                }).catch( err => {
                    console.log('error');
                })
        }
        
    }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;