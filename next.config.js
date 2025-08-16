const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = (phase) => {
    if(phase === PHASE_DEVELOPMENT_SERVER){
        return{
    env: {
        momgodb_username: 'sudha_db',
        mongodb_password: 'sudha123',
        mongodb_clustername: 'clusteer0',
        mongodb_database: 'my-site-dev',
    },
};
}
      return{
         env: {
        momgodb_username: 'sudha_db',
        mongodb_password: 'sudha123',
        mongodb_clustername: 'clusteer0',
        mongodb_database: 'my-site-dev',
    },
      }
}