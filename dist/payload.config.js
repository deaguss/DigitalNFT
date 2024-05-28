"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bundler_webpack_1 = require("@payloadcms/bundler-webpack");
var db_mongodb_1 = require("@payloadcms/db-mongodb");
var richtext_slate_1 = require("@payloadcms/richtext-slate");
var path_1 = __importDefault(require("path"));
var config_1 = require("payload/config");
var Users_1 = require("./collections/Users");
var dotenv_1 = __importDefault(require("dotenv"));
var Products_1 = require("./collections/Products/Products");
var Media_1 = require("./collections/Media");
var ProductFile_1 = require("./collections/ProductFile");
var Orders_1 = require("./collections/Orders");
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, "../.env")
});
// Ekspor fungsi buildConfig yang digunakan untuk mengkonfigurasi Payload CMS
exports.default = (0, config_1.buildConfig)({
    // URL server diambil dari environment variable PAYLOAD_PUBLIC_SERVER_URL atau kosong jika tidak tersedia
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
    // Daftar koleksi kosong pada awalnya
    collections: [
        Users_1.Users,
        Products_1.Products,
        Media_1.Media,
        ProductFile_1.ProductFiles,
        Orders_1.Orders
    ],
    // Konfigurasi rute admin ke "/sell"
    routes: {
        admin: "/sell",
    },
    // Konfigurasi admin, menggunakan bundler webpack, dan meta data
    admin: {
        user: "users",
        bundler: (0, bundler_webpack_1.webpackBundler)(),
        meta: {
            titleSuffix: "- DigitalNFT", // Suffix untuk judul halaman admin
            favicon: "/favicon.ico", // Lokasi favicon
            ogImage: "/thumbnail.jpg", // Lokasi gambar Open Graph
        }
    },
    // Konfigurasi pembatasan tingkat permintaan
    rateLimit: {
        max: 2000, // Maksimum 2000 permintaan
    },
    // Konfigurasi editor menggunakan editor slate
    editor: (0, richtext_slate_1.slateEditor)({}),
    // Konfigurasi database menggunakan adapter mongoose dengan URL dari environment variable MONGODB_URI
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: process.env.MONGODB_URI, // URL database MongoDB
    }),
    // Konfigurasi untuk TypeScript dengan output file payload-types.ts di direktori saat ini
    typescript: {
        outputFile: path_1.default.resolve(__dirname, "payload-types.ts"), // Output file TypeScript
    }
});
