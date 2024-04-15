"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class AuthValidator {
    static check_auth_Login = () => {
        return [
            (0, express_validator_1.body)("username").isString().notEmpty().withMessage("The Username value should not be empty"),
            (0, express_validator_1.body)("password").isString().notEmpty().withMessage("The Password value should not be empty"),
        ];
    };
    static ckeck_auth_register = () => {
        return [
            (0, express_validator_1.body)("id_user").optional().isUUID(4).withMessage("The id value should be UUID v4"),
            (0, express_validator_1.body)("id_compte").optional().isUUID(4).withMessage("The id value should be UUID v4"),
            (0, express_validator_1.body)("nom").notEmpty().isString().withMessage("The Nom value should not be empty"),
            (0, express_validator_1.body)("prenom").notEmpty().isString().withMessage("The Prenom value should not be empty"),
            (0, express_validator_1.body)("cin").notEmpty().isString().withMessage("The Cin value should not be empty"),
            (0, express_validator_1.body)("username").notEmpty().isString().withMessage("The Username value should not be empty"),
            (0, express_validator_1.body)("password").notEmpty().isString().withMessage("The Password value should not be empty"),
            (0, express_validator_1.body)("email").notEmpty().isString().withMessage("The Email value should not be empty"),
        ];
    };
}
exports.default = AuthValidator;
