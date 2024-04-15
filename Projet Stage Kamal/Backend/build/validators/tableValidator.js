"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class TableValidator {
    static check_GetTableCongeAcceptUser = () => {
        return [(0, express_validator_1.body)("userId").notEmpty().withMessage("The id value should not be empty").isUUID(4).withMessage("The id value should be UUID v4")];
    };
    static check_GetTableCongeRefuseUser = () => {
        return [(0, express_validator_1.body)("userId").notEmpty().withMessage("The id value should not be empty").isUUID(4).withMessage("The id value should be UUID v4")];
    };
    static check_GetTableCongeWaitingUser = () => {
        return [(0, express_validator_1.body)("userId").notEmpty().withMessage("The id value should not be empty").isUUID(4).withMessage("The id value should be UUID v4")];
    };
}
exports.default = TableValidator;
