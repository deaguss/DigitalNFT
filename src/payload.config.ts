import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";
import { buildConfig } from "payload/config";
import { Users } from "./collections/Users";
import dotenv from "dotenv"
import { Products } from "./collections/Products/Products";
import { Media } from "./collections/Media";
import { ProductFiles } from "./collections/ProductFile";
import { Orders } from "./collections/Orders";


dotenv.config({
    path: path.resolve(__dirname, "../.env")
})

// Ekspor fungsi buildConfig yang digunakan untuk mengkonfigurasi Payload CMS
export default buildConfig({

    // URL server diambil dari environment variable PAYLOAD_PUBLIC_SERVER_URL atau kosong jika tidak tersedia
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',

    // Daftar koleksi kosong pada awalnya
    collections: [
        Users,
        Products,
        Media,
        ProductFiles,
        Orders
    ],

    // Konfigurasi rute admin ke "/sell"
    routes: {
        admin: "/sell",
    },

    // Konfigurasi admin, menggunakan bundler webpack, dan meta data
    admin: {
        user: "users",
        bundler: webpackBundler(),
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
    editor: slateEditor({}),

    // Konfigurasi database menggunakan adapter mongoose dengan URL dari environment variable MONGODB_URI
    db: mongooseAdapter({
        url: process.env.MONGODB_URI!, // URL database MongoDB
    }),

    // Konfigurasi untuk TypeScript dengan output file payload-types.ts di direktori saat ini
    typescript: {
        outputFile: path.resolve(__dirname, "payload-types.ts"), // Output file TypeScript
    }
})
