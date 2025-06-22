import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";
// Memperbaiki konfigurasi subsets
const inter = Inter({ subsets: ["latin"] }); // 'latin' sebagai array dengan satu elemen
const lusitana = Lusitana({ subsets: ["latin"], weight: ["400", "700"] }); // 'latin' sebagai array dengan satu elemen

export { inter, lusitana };
