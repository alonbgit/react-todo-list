import data from './data';

const getTasks = () => {

    return data.tasks;

}

const urls = {
    '/tasks': getTasks
}

export default urls;