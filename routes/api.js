import express from 'express'

const router = express.Router()

const api = [
    {
        nama: "Muhammad Soleh",
        jenisKelamin: "Laki - laki",
        umur: 17
    },
    {
        nama: "Abdul",
        jenisKelamin: "Laki - laki",
        umur: 50
    }
]

router.use((req, res, next) => {
    const headers = req.headers
    headers["user-id"];
    headers["scope"];
    next();
});

router.get('/', (req, res) => {
    if (req.get("user-id") === "ifabula" && req.get("scope") === "user") {
        res.send(api)
    } else {
        res.status(401);
        res.send('UNAUTHORIZED');
    }
})

router.post('/', (req, res) => {

    if (req.get("user-id") === "ifabula" && req.get("scope") === "user") {
        const addApi = req.body
        api.push(addApi)
        res.send('BERHASIL TAMBAH DATA')
    } else {
        res.status(401);
        res.send('UNAUTHORIZED');
    }

})

export default router