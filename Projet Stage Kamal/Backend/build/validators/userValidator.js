"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class UserValidator {
    static checkAddUser = () => {
        return [
            (0, express_validator_1.body)("id_user").optional().isUUID(4).withMessage("The id value should be UUID v4"),
            (0, express_validator_1.body)("statue_user").isString().notEmpty().withMessage("The user statue value should not be empty"),
            (0, express_validator_1.body)("nom").isString().notEmpty().withMessage("The Nom value should not be empty"),
            (0, express_validator_1.body)("prenom").isString().notEmpty().withMessage("The Prenom value should not be empty"),
            (0, express_validator_1.body)("cin").isString().notEmpty().withMessage("The Cin value should not be empty"),
        ];
    };
    static checkIdBody() {
        return [(0, express_validator_1.body)("id_user").notEmpty().withMessage("The id value should not be empty").isUUID(4).withMessage("The id value should be UUID v4")];
    }
    static checkCINBody() {
        return (0, express_validator_1.body)("cin").isString().notEmpty().withMessage("The Cin value should not be empty");
    }
    static checkCINPasswordBody() {
        return [(0, express_validator_1.body)("cin").isString().notEmpty().withMessage("The Cin value should not be empty"), (0, express_validator_1.body)("password").isString().notEmpty().withMessage("The Password value should not be empty")];
    }
}
exports.default = UserValidator;
