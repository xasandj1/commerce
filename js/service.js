const mainUrl = "http://localhost:3000/sports"
export const getAllCategory = async () => {
    try {
        const res = await fetch(mainUrl)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error);
    }
}


export const getSingleCategory = async (id) => {
    try {
        const res = await fetch(`${mainUrl}/${id}`);
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error);
    }
}

