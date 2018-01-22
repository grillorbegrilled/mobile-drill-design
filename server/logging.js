if (Meteor.isServer) {
    // creating a global server logger
    // log = Winston;

    Winston.add(Winston_Papertrail, {
        levels: {
            debug: 0,
            info: 1,
            warn: 2,
            error: 3,
            auth: 4,
        },
        colors: {
            debug: 'blue',
            info: 'green',
            warn: 'red',
            error: 'red',
            auth: 'red',
        },

        host: 'logs.papertrailapp.com',
        port: 22145, // TODO: get this from settings
        handleExceptions: true,
        json: true,
        colorize: true,
        logFormat: function(level, message) {
            return level + ': ' + message;
        },
        program: 'precision',
    });

    Winston.info(' =====> Meteor App restarted ' + new Date(Date.now()) + ' <=====', { foo: 'bar' });
//    logger.info('testing logger');
}
