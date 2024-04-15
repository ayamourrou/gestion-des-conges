"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * Attaches a given access token to a MS Graph API call
 * @param endpoint: REST API endpoint to call
 * @param accessToken: raw access token string
 */
const fetch = async (endpoint, accessToken) => {
    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };
    console.log(`request made to ${endpoint} at: ` + new Date().toString());
    try {
        const response = await axios_1.default.get(endpoint, options);
        return await response.data;
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.fetch = fetch;
