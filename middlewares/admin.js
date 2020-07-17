const isAdmin = (req, res, next) => {
  console.log("Admin area stuff", req.user.role);
  if (!req.user.role) {
    return res.status(401).json({
      status: 401,
      message: "You are not an admin",
    });
  }
  next();
};
module.exports = isAdmin;
