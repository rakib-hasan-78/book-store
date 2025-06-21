// selecting name and type for ls !--===>
    const getToLS = (itemName)=>{
        const LS = localStorage.getItem(itemName);
        return LS ? JSON.parse(LS) : [];
    }

// save items to LS ==>

    const setItemsLS = (itemName, item) =>{
        localStorage.setItem(itemName, JSON.stringify(item));
    }

// add item to  LS ==>

    const addToLS = (itemName, id)=>{

        const LS = getToLS(itemName);

        // checking if the items in the data set
        
        if (!(LS.includes(id))) {
            
            LS.push(id);
            setItemsLS(itemName, LS)
        }
    }

// removing item from data set ==>

    const removeToLS =(itemName, id)=>{
        const LS = getToLS(itemName);
        const removedItem = LS.filter(idx=>idx!==id);
        setItemsLS(itemName, removedItem);
    }
    
    
    export{addToLS, removeToLS, getToLS, setItemsLS}; 