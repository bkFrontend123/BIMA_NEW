// export const RestURL = "http://localhost:12001/rest" //My URL
export const RestURL = "http://3.109.201.114:12001/rest" //DEV URL

export let BlogService = {
    async getAllCategories() {
        const response = await fetch(`${RestURL}/blog/category`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        return await response.json();
    },
    async getAllBlog() {
        const response = await fetch(`${RestURL}/blog/info-detail`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        return await response.json();
    },
    async getAllBlogByCategory(categoryId) {
        const response = await fetch(`${RestURL}/blog/info/category/${categoryId}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        return await response.json();
    },
    async getAllBlogByTopic(topicId) {
        const response = await fetch(`${RestURL}/blog/info/topic/${topicId}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        return await response.json();
    },
    async getBlogDetails(blogId) {
        const response = await fetch(`${RestURL}/blog/info/get-one/${blogId}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        return await response.json();
    },
    async searchBlog(searchText) {
        const response = await fetch(`${RestURL}/blog/info/search/${searchText}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        return await response.json();
    }
} 


// async function createUser(data) {
//     const response = await fetch(`/api/user`, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({user: data})
//       })
//     return await response.json();
// }