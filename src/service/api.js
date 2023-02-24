import axios from "axios";

const LINK = "https://shop-api-vert-zeta.vercel.app"


export class ApiHelper {
    constructor(type) {
        this.type = type;
    }

    getItems (owner, setList) {
        return axios.get(`${LINK}/shopping/item/getItems/${owner}`)
            .then(r => setList(r.data))
    }

    async getAllItems ()  {
        const data = await axios.get(`${LINK}/shopping/item/getAllItems`)
        return data;
    }

    getListOwner (id, setList) {
        return axios.get(`${LINK}/shopping/getOwnerLists/${id}`)
            .then(r => setList(r.data))
    }

    getAllLists () {
        return axios.get(`${LINK}/shopping/list/getAll`)
    }

    async editList (id, form) {
        return await axios.patch(`${LINK}/shopping/${this.type}/updateList/${id}`, form)
    }

    async getAllUsers () {
        return await axios.get(`${LINK}/shop/getAllUsers`)
    }

    async getUserSubscriptions (id) {
        return await axios.get(`${LINK}/shop/getUserSubscribes/${id}`)
    }

    async subscribeOn (form) {
        return await axios.post(`${LINK}/shop/subscribeOnUser`, form)
    }
    async removeSubscribe (id) {
        return await axios.delete(`${LINK}/shop/removeSubscribe/${id}`)
    }


    // getAllLists = (owner, setList) => {
    //     axios.get(`https://arcane-falls-56249.herokuapp.com/shopping/list/getAll`)
    //         .then(r => setList(r.data))
    //         .then(() => this.setRender(false))
    // }

    async addOverallItem (form) {
        return await axios.post(`${LINK}/shop/createOverallList`, form)
    }

    async removeOverallItem (id) {
        return await axios.delete(`${LINK}/shop/removeOverallList/${id}`)
    }

    async getOverall (id, setList) {
        return axios.get(`${LINK}/shop/getOverall/${id}`)
            .then(r => setList(r.data))
    }

    async addItem (form) {
        return await axios.post(`${LINK}/shopping/${this.type}/create`, form)
    }


    async editItem (id, form) {
        return await axios.patch(`${LINK}/shopping/${this.type}/updateItem/${id}`, form)
    }

    async removeItem (id) {
        return await axios.delete(`${LINK}/shopping/${this.type}/remove/${id}`)
    }

    async checkedDone (id) {
        return await axios.patch(`${LINK}/shopping/item/updateItem/${id}`, {done: true})
    }

    async cancelDone (id) {
        return await axios.patch(`${LINK}/shopping/item/updateItem/${id}`, {done: false})
    }

    async getUser (id) {
        return await axios.get(`${LINK}/shop/getUser/${id}`)
    }

    async register (values) {
        try {
            if (values) {
                values = JSON.stringify(values)
            }
            const response = await fetch(`${LINK}/shop/register`, {
                method: 'POST', body:values, headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Expose-Headers': 'Content-Length, X-JSON',
                    'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token'
                }
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Something wrong")
            }
            return await data

        } catch (e) {
            throw e
        }
    }
    async login(values) {
        try {
            if (values) {
                values = JSON.stringify(values)
            }
            const response = await fetch(`${LINK}/shop/login`, {
                method: 'POST', body: values, headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Expose-Headers': 'Content-Length, X-JSON',
                    'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token'
                }
            })
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.message || "Something wrong")
            }
            return await data

        } catch (e) {
            throw e
        }
    }
}