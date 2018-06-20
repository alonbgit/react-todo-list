import server from '../server';

const INTERVAL = 1000;

const get = (url) => {

    return new Promise((resolve, reject) => {

        try {

            setTimeout(() => {

            return server[url];

            }, INTERVAL);

        }
        catch(ex) {
            reject(ex);
        }

    });

}

export default {
    get
}