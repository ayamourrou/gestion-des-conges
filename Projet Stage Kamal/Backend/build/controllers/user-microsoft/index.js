"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authConfig_1 = require("../../config/authConfig");
const fetch_1 = require("../../utils/fetch");
class UserMSController {
    static GetID = async (req, res, next) => {
        res.render("id", { idTokenClaims: req.session.account.idTokenClaims });
    };
    static GetProfile = async (req, res, next) => {
        try {
            const graphResponse = await (0, fetch_1.fetch)(authConfig_1.GRAPH_ME_ENDPOINT, req.session.accessToken);
            res.render("profile", { profile: graphResponse });
        }
        catch (error) {
            next(error);
        }
    };
}
exports.default = UserMSController;
