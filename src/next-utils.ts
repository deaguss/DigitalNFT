import next from "next"

const PORT = Number(process.env.PORT) || 3000

// Menentukan port yang akan digunakan oleh aplikasi, mengambil nilai dari environment variable PORT jika tersedia, jika tidak, defaultnya adalah 3000

export const nextApp =  next({
    dev: process.env.NODE_ENV !== "production",
    port: PORT
})

// Membuat instance aplikasi Next.js dengan opsi pengembangan yang diaktifkan jika environment tidak dalam mode produksi, dan menentukan port yang akan digunakan

export const nextHandler = nextApp.getRequestHandler()

// Mendapatkan penangan permintaan (request handler) dari aplikasi Next.js yang telah dibuat sebelumnya
