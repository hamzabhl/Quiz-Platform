const logout = (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            sameSite: "lax",
            secure: false, // set true in production (HTTPS)
        });

        return res.json({ message: "Logged out successfully" });

    } catch (err) {
        return res.status(500).json({ error: "Logout failed" });
    }
};

module.exports = { logout };