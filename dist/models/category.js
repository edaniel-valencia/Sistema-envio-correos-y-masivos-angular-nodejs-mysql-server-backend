"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const sequelize_1 = require("sequelize");
const conexion_1 = __importDefault(require("../database/conexion"));
exports.Category = conexion_1.default.define("category", {
    Cid: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Cname: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    Cstatus: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    Ccreated: { type: sequelize_1.DataTypes.DATE, field: 'Ccreated', defaultValue: sequelize_1.DataTypes.NOW, allowNull: false }
}, {
    timestamps: false,
    paranoid: false
});