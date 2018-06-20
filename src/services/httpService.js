import server from '../server';

const INTERVAL = 1000;

const get = (url) => {

    return new Promise((resolve, reject) => {

        try {

            setTimeout(() => {

                const result = server[url]();
                const response = {
                    data: result
                }
                resolve(response);

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