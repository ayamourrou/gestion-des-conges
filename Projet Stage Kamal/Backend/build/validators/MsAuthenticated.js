"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class isAuthenticatedClass {
    static isAuthenticated = async (req, res, next) => {
        if (!req.session.isAuthenticated) {
            return res.redirect("/auth/signin"); // redirect to sign-in route
        }
        next();
    };
}
exports.default = isAuthenticatedClass;
