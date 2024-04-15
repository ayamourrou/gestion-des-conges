"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthProvider_1 = __importDefault(require("../../config/auth/AuthProvider"));
const authConfig_1 = require("../../config/authConfig");
class MicrosoftAuthController {
    static Login = async (req, res, next) => {
        return AuthProvider_1.default.login({
            scopes: [],
            redirectUri: authConfig_1.REDIRECT_URI,
            successRedirect: "/",
        })(req, res, next);
    };
    static AcquireToken = async (req, res, next) => {
        return AuthProvider_1.default.acquireToken({
            scopes: ["User.Read"],
            redirectUri: authConfig_1.REDIRECT_URI,
            successRedirect: "/",
        })(req, res, next);
    };
    static RedirectHandle = async (req, res, next) => {
        return AuthProvider_1.default.handleRedirect()(req, res, next);
    };
    static Logout = async (req, res, next) => {
        return AuthProvider_1.default.logout({
            postLogoutRedirectUri: authConfig_1.POST_LOGOUT_REDIRECT_URI,
        })(req, res, next);
    };
}
exports.default = MicrosoftAuthController;
