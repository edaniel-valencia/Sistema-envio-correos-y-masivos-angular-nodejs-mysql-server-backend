"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadCategoryAll = void 0;
const category_1 = require("../models/category");
const ReadCategoryAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listCategory = yield category_1.Category.findAll({});
        if (listCategory.length === 0) {
            return res.status(404).json({ msg: "No se han encontrado usuarios" });
        }
        res.json(listCategory);
    }
    catch (error) {
        return res.status(500).json({ msg: "Error al encontrado usuarios", error });
    }
});
exports.ReadCategoryAll = ReadCategoryAll;