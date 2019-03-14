'use strict';

import Hapi from 'hapi';

const server = new Hapi.Server({
    port: 3030,
    host: 'localhost'
});

const init = async () => {
    await server.start();
    console.log(`Server is running at: ${server.info.uri}`);
}

init();

export default server;