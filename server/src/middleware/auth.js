const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token) {
        return res.status(401).json({ message: '沒有 token' })
    }

    jwt.verify(token, secretKey, (err, user) => {
        if(err) {
            return res.status(403).json({ message: 'token 無效' })
        }

        req.user = user
        next()
    })
}

module.exports = authenticateToken