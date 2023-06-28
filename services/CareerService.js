// export const RestURL = "http://localhost:12001/rest" //My URL
export const RestURL = "http://3.109.201.114:12001/rest" //DEV URL

export let CareerService = {
    async getAllCategories() {
        const response = await fetch(`${RestURL}/career/category`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        return await response.json();
    },
    async getAll() {
        const response = await fetch(`${RestURL}/career/all`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        return await response.json();
    },
    async getByCategory(category) {
        const response = await fetch(`${RestURL}/career/by-category`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(category)
        });
        return await response.json();
    },
    async searchCareer(searchText) {
        const response = await fetch(`${RestURL}/career/search/${searchText}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        return await response.json();
    }
} 
