"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class CongeValidator {
    static check_GereConge = () => {
        return [
            (0, express_validator_1.body)("id_conge").notEmpty().withMessage("The id value should not be empty").isUUID(4).withMessage("The id value should be UUID v4"),
            (0, express_validator_1.body)("statue_conge").isString().notEmpty().withMessage("The conge statue value should not be empty"),
        ];
    };
    static check_CreeConge = () => {
        return [
            (0, express_validator_1.body)("id_conge").optional().isUUID(4).withMessage("The id value should be UUID v4"),
            (0, express_validator_1.body)("userId").isUUID(4).notEmpty().withMessage("The id value should be UUID v4"),
            (0, express_validator_1.body)("dateDebut").isDate().notEmpty().withMessage("The dateDebut value should not be empty"),
            (0, express_validator_1.body)("dateFin").isDate().notEmpty().withMessage("The dateFin value should not be empty"),
        ];
    };
    static check_userId = () => {
        return [(0, express_validator_1.body)("userId").isUUID(4).notEmpty().withMessage("The id value should be UUID v4")];
    };
}
exports.default = CongeValidator;
