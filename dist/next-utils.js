"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextHandler = exports.nextApp = void 0;
var next_1 = __importDefault(require("next"));
var PORT = Number(process.env.PORT) || 3000;
// Menentukan port yang akan digunakan oleh aplikasi, mengambil nilai dari environment variable PORT jika tersedia, jika tidak, defaultnya adalah 3000
exports.nextApp = (0, next_1.default)({
    dev: process.env.NODE_ENV !== "production",
    port: PORT
});
// Membuat instance aplikasi Next.js dengan opsi pengembangan yang diaktifkan jika environment tidak dalam mode produksi, dan menentukan port yang akan digunakan
exports.nextHandler = exports.nextApp.getRequestHandler();
// Mendapatkan penangan permintaan (request handler) dari aplikasi Next.js yang telah dibuat sebelumnya
