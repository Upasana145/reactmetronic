const logout = (req, res) => {
    res.clearCookie('token'); // Clear the cookie named 'token'
    return res.json({ Status: "Success" });
  };
  
  module.exports = {
    logout,
  };
  