"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class MiddlewareValidator {
    // This is The call Back function of the UserValidator.checkAddUser that hanle Error
    static handleUserValidatorError = (req, res, next) => {
        const error = (0, express_validator_1.validationResult)(req);
        if (!error.isEmpty()) {
            return res.json({ error, status: 401 });
        }
        next();
    };
}
exports.default = MiddlewareValidator;
