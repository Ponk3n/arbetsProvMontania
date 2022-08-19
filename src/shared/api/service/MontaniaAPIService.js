import http from '../MontaniaAPI'

const getProduct = () => {
    return http.get(`films`)
}

export default {
    getProduct
}