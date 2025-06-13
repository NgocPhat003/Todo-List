// Module to store data using localStorage

const STORAGE_KEY = 'todoAppProjects';

const storage = {
    saveData: function (data) {
        try {
            const serializedData =JSON.stringify(data);
            localStorage.setItem(STORAGE_KEY, serializedData);
        }catch(error) {
            console.error('Error when trying to save data to localStorage');
        }
    },

    loadData: function () {
        try {
            const serializedData = localStorage.getItem(STORAGE_KEY);
            if (serializedData === null) {
                return undefined;
            }
            return JSON.parse(serializedData);
        } catch (error) {
            console.error('Error when trying to load data from localStorage');
            return undefined;
        }
    },

    clearData: function () {
        try{
            localStorage.removeItem(STORAGE_KEY);
        }catch (error) {
            console.error('Error when trying to clear data from localStorage');
        }
    },
};

export default storage;