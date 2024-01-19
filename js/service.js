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

// export const getSingleSearch = async (id) => {
//     try {
//         // Replace the URL with the actual endpoint for fetching a single category
//         const response = await fetch(`${mainUrl}/${id}`);

//         if (!response.ok) {
//             throw new Error('Failed to fetch category');
//         }

//         const data = await response.json();
//         console.log(data);
//         return data;
//     } catch (error) {
//         console.error('Error fetching category:', error.message);
//         // You can handle the error as needed, e.g., show an error message to the user
//         throw error;
//     }
// };


