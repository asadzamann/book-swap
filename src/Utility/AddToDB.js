const getStoredBook = () => {
    const storedBookStr = localStorage.getItem("readList");
    if(storedBookStr) {
        const storedBookData = JSON.parse(storedBookStr);
        return storedBookData;
    }
    else{
        return [];
    }
}

const addToStoredDb = (id) => {
    const storedBookData = getStoredBook();
    if(storedBookData.includes(id)){
    alert('vai thamen, it already exist')
    }
    else{
        storedBookData.push(id);
        const storeBookDataStr = JSON.stringify(storedBookData);
        localStorage.setItem("readList" , storeBookDataStr);

    }
}

export {addToStoredDb}