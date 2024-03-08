/* eslint-disable no-unused-vars */

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD3oBV521G1z-tqo31PPtjIRP91tJQwZB4",
    authDomain: "react01-4606f.firebaseapp.com",
    projectId: "react01-4606f",
    storageBucket: "react01-4606f.appspot.com",
    messagingSenderId: "303586536466",
    appId: "1:303586536466:web:3df59fb1c02bdb85a1fccb"
};

const app = initializeApp(firebaseConfig);

const bdd = getFirestore()

const prods = [
    {
        "title": "Pc Armada Gamer Amd Ryzen 7 5700g Ram 32gb 960g Ssd Wifi",
        "price": 890000,
        "stock": 23,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc1.jpg?alt=media&token=6697606a-4bc2-4ff1-9809-2c1c92a2befe",
        "category": "Pc",
        "description": "MICRO AMD RYZEN 7 5700G 3.8GHZ, VIDEO AMD RADEON VEGA INTEGRADO, MOTHER A520M, DISCO SOLIDO SSD 1TB.",
        "valoracion": "Sin palabras, muy buena, valio la pena la compra, la recomiendo... 10 de 10",
        "detalle": [
            {
                "procesador": "MICRO AMD RYZEN 7 5700G 3.8GHZ.",
                "ram": "MEMORIA RAM: 32GB DDR4 2X16",
                "ssd": "DISCO SOLIDO SSD 1TB",
                "fuente": "FUENTE ATX 550W."
            }
        ]
    },
    {
        "title": "Pc Armada Gamer Cpu Amd Ryzen 5 4600g 16gb Vega 7 Ver2.0",
        "price": 466799,
        "stock": 47,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc2.jpg?alt=media&token=2b289360-2be9-41cd-8671-664f68cbea2c",
        "category": "Pc",
        "description": "AMD RYZEN 5 4600G 6C/12T, Motherboard: A320M-K ASUS AM4 VGA/HDMI, Memoria RAM: DDR4 8GB 3200MHZ HIKVISION NEO U-DIMM (Cant: 2).",
        "valoracion": "Sin palabras, muy buena, valio la pena la compra, la recomiendo... 10 de 10",
        "detalle": [
            {
                "procesador": "AMD RYZEN 5 4600G 6C/12T",
                "ram": "Memoria RAM: DDR4 8GB 3200MHZ HIKVISION NEO U-DIMM (Cant: 2)",
                "ssd": "Disco Solido (SSD): 240G WD GREEN 545 M/S (Cant: 1)",
                "fuente": "FUENTE ATX 550W."
            }
        ]
    },
    {
        "title": "Pc Ar Intel Core I5 6 Generacion 8 G Ddr4 Ssd 240",
        "price": 359999,
        "stock": 23,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc3.jpg?alt=media&token=5c485079-2798-4666-899d-a59861bdf0d0",
        "category": "Pc",
        "description": "CORE I5 6400,MEMORIA 8 GIGAS DE RAM ddr4, ssd 240, GAB ATX 500W, SISTEMA OPERATIVO INSTALADO",
        "valoracion": "Sin palabras, muy buena, valio la pena la compra, la recomiendo... 10 de 10",
        "detalle": [
            {
                "procesador": "CORE I5 6400",
                "ram": "MEMORIA 8 GIGAS DE RAM ddr4",
                "ssd": "ssd 240",
                "fuente": "FUENTE ATX 550W."
            }
        ]
    },
    {
        "title": "Pc Gamer Ryzen 7 5700g 16gb A520m 240gb",
        "price": 505882,
        "stock": 19,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc4.jpg?alt=media&token=efba4cdc-e40c-4715-9ae2-f74987f37b50",
        "category": "Pc",
        "description": "Ryzen 7 5700G con graficos integrados, Motherboard: A520m-h, Memoria ram: 16gb DDR4.",
        "valoracion": "Sin palabras, muy buena, valio la pena la compra, la recomiendo... 10 de 10",
        "detalle": [
            {
                "procesador": "Ryzen 7 5700G con graficos integrados.",
                "ram": "Memoria ram: 16gb DDR4.",
                "ssd": "Disco SSD 240GB",
                "fuente": "FUENTE ATX 550W."
            }
        ]
    },
    {
        "title": "Pc Armada Gamer Amd Athlon 3000g 16 Gb + Ssd 480",
        "price": 499999,
        "stock": 29,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc5.jpg?alt=media&token=99486f38-61e7-4130-afbc-a3cec62d7eb8",
        "category": "Pc",
        "description": "Microprocesador AMD Athlon 3000G 5MB 3.5GHz Socket AM4, Mother Gigabyte A520M K V2, Memoria Ddr4 16 Gb (2 x 8Gb).",
        "valoracion": "Sin palabras, muy buena, valio la pena la compra, la recomiendo... 10 de 10",
        "detalle": [
            {
                "procesador": "Microprocesador AMD Athlon 3000G 5MB 3.5GHz Socket AM4.",
                "ram": "Memoria Ddr4 16 Gb (2 x 8Gb).",
                "ssd": "Disco Solido Ssd 480",
                "fuente": "FUENTE ATX 550W."
            }
        ]
    },
    {
        "title": "Pc Armada Gamer Amd Athlon 3000g 16 Gb + Ssd 480",
        "price": 353899,
        "stock": 22,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc6.jpg?alt=media&token=e2309ad0-a0ca-4655-a928-3ce2cc8c562f",
        "category": "Pc",
        "description": "Microprocesador AMD Athlon 3000G 5MB 3.5GHz Socket AM4, Mother Gigabyte A520M K V2, Memoria Ddr4 16 Gb (2 x 8Gb).",
        "valoracion": "Sin palabras, muy buena, valio la pena la compra, la recomiendo... 10 de 10",
        "detalle": [
            {
                "procesador": "Microprocesador AMD Athlon 3000G 5MB 3.5GHz Socket AM4.",
                "ram": "Memoria Ddr4 16 Gb (2 x 8Gb).",
                "ssd": "Disco Solido Ssd 480",
                "fuente": "FUENTE ATX 550W."
            }
        ]
    },
    {
        "title": "Pc Hogar Oficina Amd Intel Quad Core 8gb Ddr4 240gb Ssd",
        "price": 339999,
        "stock": 24,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc7.jpg?alt=media&token=bf4d2cf3-79c4-4b15-b8e2-a8dc050249f6",
        "category": "Pc",
        "description": "MOTHERBOARD CON MICRO PROCESADOR INTEL / AMD QUAD CORE, DISCO 240GB SSD, GABINETE KIT CON FUENTE, MEMORIA RAM 8GB DDR4.",
        "valoracion": "Sin palabras, muy buena, valio la pena la compra, la recomiendo... 10 de 10",
        "detalle": [
            {
                "procesador": "PROCESADOR INTEL.",
                "ram": "MEMORIA RAM 8GB DDR4.",
                "ssd": "DISCO 240GB SSD",
                "fuente": "FUENTE ATX 550W."
            }
        ]
    },
    {
        "title": "Pc Armada Intel Core I5 7 G 8gb Ssd 240 W10",
        "price": 274739,
        "stock": 46,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc8.jpg?alt=media&token=f1499fa6-6a34-404c-a849-66e87043aa80",
        "category": "Pc",
        "description": "PC ARMADA CORE I5 7g, MEMORIA 8 GIGAS DE RAM, SSD 240, GAB ATX 500W, SISTEMA OPERATIVO INSTALDO, 6 MESES DE GARANTIA.",
        "valoracion": "Sin palabras, muy buena, valio la pena la compra, la recomiendo... 10 de 10",
        "detalle": [
            {
                "procesador": "CORE I5 7g.",
                "ram": "MEMORIA 8 GIGAS DE RAM.",
                "ssd": "SSD 240.",
                "fuente": "FUENTE ATX 550W."
            }
        ]
    },
    {
        "title": "Pc Armada Cpu Core I3 16 Gb Ram 240gb Hdmi",
        "price": 296690,
        "stock": 41,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc9.jpg?alt=media&token=fc06f519-778a-4a3e-9a2a-024309651d2f",
        "category": "Pc",
        "description": "Gabinete Kit Fuente 500W, Microprocesador AMD Athlon 3000G 5MB 3.5GHz Socket AM4.",
        "valoracion": "Sin palabras, muy buena, valio la pena la compra, la recomiendo... 10 de 10",
        "detalle": [
            {
                "procesador": "Microprocesador AMD Athlon 3000G 5MB 3.5GHz Socket AM4.",
                "ram": "MEMORIA 8 GIGAS DE RAM.",
                "ssd": "SSD 240.",
                "fuente": "Fuente 500W."
            }
        ]
    },
    {
        "title": "Pc Armada I7 16gb Solido 480 Hd W11",
        "price": 479999,
        "stock": 52,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc10.jpg?alt=media&token=6b771405-db47-425d-bf6b-da5d41e9aade",
        "category": "Pc",
        "description": "PC ARMADA I7, CORE I7 2600 3200 MHZ, 16 GIGAS MEMORIA RAM, DISCO SOLIDO 480, GAB ATX 500W.",
        "valoracion": "Sin palabras, muy buena, valio la pena la compra, la recomiendo... 10 de 10",
        "detalle": [
            {
                "procesador": "Microprocesador AMD Athlon 3000G 5MB 3.5GHz Socket AM4.",
                "ram": "MEMORIA 8 GIGAS DE RAM.",
                "ssd": "SSD 240.",
                "fuente": "Fuente 500W."
            }
        ]
    },
    {
        "title": "Pc Ar Intel Core I7 1t 16gb Ram",
        "price": 469759,
        "stock": 25,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc11.jpg?alt=media&token=ada8137f-418c-4dbc-8374-b45d55692d46",
        "category": "Pc",
        "description": "PC ARMADA I7 Intel 2600-3770, CORE I7, 16 GIGAS DDR 3 MEMORIA RAM, DISCO RIGIDO 1 TERA seagate, GAB ATX 500W.",
        "valoracion": "Sin palabras, muy buena, valio la pena la compra, la recomiendo... 10 de 10",
        "detalle": [
            {
                "procesador": "I7 Intel 2600-3770.",
                "ram": "16 GIGAS DDR 3 MEMORIA RAM.",
                "ssd": "DISCO RIGIDO 1 TERA.",
                "fuente": "Fuente 500W."
            }
        ]
    },
    {
        "title": "Pc Armada Core I7 Intel 6 Gen 1 Tera 16 Gigas Ram",
        "price": 519759,
        "stock": 26,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc12.jpg?alt=media&token=45b9f4ab-b06d-4ec1-a5f3-a2a8a8b44db6",
        "category": "Pc",
        "description": "Pc Armada Core I7 Intel 6 Gen 1 Tera 16 Gigas Ram.",
        "valoracion": "Sin palabras, muy buena, valio la pena la compra, la recomiendo... 10 de 10",
        "detalle": [
            {
                "procesador": "Core I7 Intel 6 Gen.",
                "ram": "16 Gigas Ram.",
                "ssd": "1 Tera.",
                "fuente": "Fuente 500W."
            }
        ]
    },
    {
        "title": "Pc Gamer Core I7 16gb Ram Ssd 480gb Rtx 2060 8gb",
        "price": 799998,
        "stock": 29,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc13.jpg?alt=media&token=99e011f4-493c-4e29-be91-e9a21080dccb",
        "category": "Pc",
        "description": "Memoria RAM: 16Gb DDR3 1600MHz, Gráficos: HD Intel® 2000/3000 1.1GHz, Salida de Video: VGA + HDMI",
        "valoracion": "Sin palabras, muy buena, valio la pena la compra, la recomiendo... 10 de 10",
        "detalle": [
            {
                "procesador": "Core I7 16gb.",
                "ram": "Memoria RAM: 16Gb DDR3 1600MHz",
                "ssd": "Ssd 480gb Rtx 2060 8gb.",
                "fuente": "Fuente 500W."
            }
        ]
    },
    {
        "title": "Pc Gamer Blanca Amd Ryzen 7 5700gb Ram 32gb Ssd 1tb Gtx 1660",
        "price": 999999,
        "stock": 26,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc14.jpg?alt=media&token=7662cc7a-9ac5-4cb7-acd3-3678c6ead37c",
        "category": "Pc",
        "description": "PROCESADOR AMD RYZEN 7 5700G, MOTHER AM4 A520M, MEMORIA RAM DDR4 32GB 2X16GB 3200MHZ, DISCO SSD SATA 1TB, PLACA DE VIDEO NVIDIA GTX 1660 SUPER 6GB",
        "valoracion": "Sin palabras, muy buena, valio la pena la compra, la recomiendo... 10 de 10",
        "detalle": [
            {
                "procesador": "PROCESADOR AMD RYZEN 7 5700G.",
                "ram": "MEMORIA RAM DDR4 32GB 2X16GB 3200MHZ",
                "ssd": "DISCO SSD SATA 1TB.",
                "fuente": "Fuente 500W."
            }
        ]
    },
    {
        "title": "Auriculares gamer blancos",
        "price": 101999,
        "stock": 41,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri17.jpg?alt=media&token=4c53cc99-5e31-42b6-83fb-bb1d19d41dd2",
        "category": "accesorios",
        "description": "Ideado para los gamers más exigentes",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "no",
                "cancelacion de ruido": "si"
            }
        ]
    },
    {
        "title": "Auriculares gamer inalámbricos",
        "price": 101999,
        "stock": 46,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri1.jpg?alt=media&token=c66c5303-bda4-4f8c-8951-2e055c1fd9b3",
        "category": "accesorios",
        "description": "Ideado para los gamers más exigentes",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "si",
                "duracion de la bateria": "hasta 44 horas"
            }
        ]
    },
    {
        "title": "Auriculares Gamer Redragon H260 Hylas Negro Con Luz Led",
        "price": 38636,
        "stock": 55,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri2.jpg?alt=media&token=d28a02e9-dfc2-4709-a270-e4401265ca7c",
        "category": "accesorios",
        "description": "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! con estos auriculares gamer!.",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "no",
                "compatibilidad": "pc, consolas y dispositivos moviles"
            }
        ]
    },
    {
        "title": "Auriculares Gamer Jbl Quantum 100 Negro",
        "price": 75999,
        "stock": 25,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri3.jpg?alt=media&token=193895e4-82a5-4742-b65b-3491eec4d9ab",
        "category": "accesorios",
        "description": "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! con estos auriculares gamer!.",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "no",
                "compatibilidad": "pc, consolas y dispositivos moviles"
            }
        ]
    },
    {
        "title": "Auriculares gamer Noga Stormer ST-ONIX negro con luz rojo LED",
        "price": 21155,
        "stock": 28,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri4.jpg?alt=media&token=31ff1279-ffe8-4980-9903-cfdb332d19c5",
        "category": "accesorios",
        "description": "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! con estos auriculares gamer!.",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "no",
                "plegables": "si"
            }
        ]
    },
    {
        "title": "Auriculares gamer Nubwo N1 Pro negro con luz LED",
        "price": 19738,
        "stock": 46,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri5.jpg?alt=media&token=d39f692a-f30f-42ee-82bc-b389738bbc15",
        "category": "accesorios",
        "description": "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! con estos auriculares gamer!.",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "no",
                "compatibilidad": "pc, consolas y dispositivos moviles"
            }
        ]
    },
    {
        "title": "Auricular Vincha Bluetooth Inalambrico/cable Netmak Nm-volt",
        "price": 10999,
        "stock": 41,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri6.jpg?alt=media&token=abcca109-eadc-404b-8fc7-b25c7fba5da0",
        "category": "accesorios",
        "description": "Ideado para los gamers más exigentes",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "si",
                "duracion de la beteria": "hasta 44 horas"
            }
        ]
    },
    {
        "title": "Auriculares gamer inalámbricos HyperX Cloud Stinger Core HHSS1C-KB blanco",
        "price": 104500,
        "stock": 61,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri7.jpg?alt=media&token=7da9d5f2-6d07-4e24-a5b3-cf05f6eb9ff2",
        "category": "accesorios",
        "description": "Ideado para los gamers más exigentes",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "si",
                "duracion de la beteria": "hasta 44 horas"
            }
        ]
    },
    {
        "title": "Auriculares Gamer Redragon Pandora 7.1 Blanco Con Luz Rgb Led Usb",
        "price": 49999,
        "stock": 48,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri8.jpg?alt=media&token=e2f3aefc-6cf6-421b-8e1d-48c7169ac879",
        "category": "accesorios",
        "description": "Ideado para los gamers más exigentes",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "no",
                "compatibilidad": "pc, consolas y dispositivos moviles"
            }
        ]
    },
    {
        "title": "Auriculares gamer inalámbricos Logitech G Series G435 negro y amarillo fluorescente",
        "price": 108290,
        "stock": 83,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri9.jpg?alt=media&token=04cc95a4-14fd-436c-a3b1-f233569657f6",
        "category": "accesorios",
        "description": "Su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "si",
                "duracion de la beteria": "hasta 44 horas"
            }
        ]
    },
    {
        "title": "Auriculares gamer Redragon Ares H120 negro y rojo",
        "price": 26998,
        "stock": 42,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri10.jpg?alt=media&token=0fc8797b-83d3-4bb8-aa9b-8f70629c4d6b",
        "category": "accesorios",
        "description": "Su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "no",
                "compatibilidad": "pc, consolas y dispositivos moviles"
            }
        ]
    },
    {
        "title": "Disco sólido interno Kingston SA400S37/960G SATA 960GB negro",
        "price": 68901,
        "stock": 45,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo1.jpg?alt=media&token=c48f929f-a9fd-46d4-af92-c0b415f1cceb",
        "category": "Componente",
        "description": "Considerado un dispositivo de alto rendimiento, la unidad en estado sólido A400 de Kingston está diseñada para las personas más exigentes..",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "capacidad": "1TB",
                "velocidad de lectura": "hasta 3500 MB/s"
            }
        ]
    },
    {
        "title": "Motherboard Am4 B450m Ds3h Tarjeta Madre Gigabyte Amd Ddr4 Color Negro",
        "price": 109999,
        "stock": 51,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo2.jpg?alt=media&token=87c5a2c3-16a2-48bc-8f13-254bdfa437f4",
        "category": "Componente",
        "description": "Soporta hasta 128gb de memoria RAM",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "formato": "ATX",
                "ranuras de memoria RAM": "DDR4, hasta 128GB"
            }
        ]
    },
    {
        "title": "Placa de video Nvidia Colorful Colorful GeForce 700 Series GT 710 GT710-2GD3-V 2GB",
        "price": 87193,
        "stock": 45,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo3.jpg?alt=media&token=24b78db7-a121-4da1-a18a-fda235a99f88",
        "category": "Componente",
        "description": "Mejora tu experiencia visual con la Placa de video Nvidia Colorful GeForce 700 Series GT 710 GT710-2GD3-V 2GB",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "memoria de video": "16GB GDDR6",
                "nucleos de proceso": "4608"
            }
        ]
    },
    {
        "title": "Memoria RAM Fury Beast DDR4 gamer color negro 8GB 1 Kingston KF432C16BB/8",
        "price": 31383,
        "stock": 31,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo4.jpg?alt=media&token=6a47a705-799c-4cda-9aac-18476b4223a5",
        "category": "Componente",
        "description": "Potenciá tu PC, Con su tecnología DDR4, mejorará el desempeño de tu equipo.",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "tipo de memoria": "DDR4",
                "velocidad": "3200MHz",
                "voltaje": "1.35V"
            }
        ]
    },
    {
        "title": "Procesador AMD Ryzen 5 5600G AM4 DDR4 100-100000252BOX",
        "price": 191627,
        "stock": 44,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo5.jpg?alt=media&token=22ee9bce-a3e7-40d8-8f24-9916c06725fb",
        "category": "Componente",
        "description": "Mejora tu experiencia de juego con el Procesador gamer AMD Ryzen 5 5600G.",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "arquitectura": "Zen 3",
                "nucleos/Threads": "12 nucleos / 24 hilos",
            }
        ]
    },
    {
        "title": "Placa Madre Asus Tuf Gaming B450m Plus 2 Ryzen M.2 Usb 3.2",
        "price": 145999,
        "stock": 66,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo6.jpg?alt=media&token=9d60461d-d59f-43b9-b1b0-0388ff395392",
        "category": "Componente",
        "description": "Modelo B45M-Plus.",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "formato": "ATX",
                "socket de CPU": "AM4",
                "ranuras de memoria RAM": "DDR4, hasta 128GB"
            }
        ]
    },
    {
        "title": "Gabinete Gamer Xigmatek Atx Vortex Rgb Vidrio Templado Negro",
        "price": 55000,
        "stock": 57,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo7.jpg?alt=media&token=ec261a0e-3e76-4ed1-826e-4bbbfabbba01",
        "category": "Componente",
        "description": "Incluye Fan x1 - 120 mm ARGB varios colores y modos cambiables desde boton del gabinete.",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "material": "acero, vidrio templado",
                "ranuras de expansion": 7,
                "ventiladores incluidos": "2 x 120 mm (parte frontal y trasera)"
            }
        ]
    },
    {
        "title": "Disco duro externo Seagate Expansion STKM2000400 2TB negro",
        "price": 114999,
        "stock": 47,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo8.jpg?alt=media&token=f6fdbdc2-ae87-486c-a6f4-08857c24a968",
        "category": "Componente",
        "description": "Irrompible, Además de su funcionalidad y soporte, la importancia de los discos de almacenamiento también radica en su calidad y resistencia.",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "capacidad": "2TB",
                "velocidad de rotacion": "7200RPM",
                "cache": "256MB"
            }
        ]
    },
    {
        "title": "Gabinete Gamer Andromeda Atx Vidrio Templado X3 Fan Rgb",
        "price": 98499,
        "stock": 30,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo9.jpg?alt=media&token=3e436185-478c-4e2f-8bcd-423da8788ea4",
        "category": "Componente",
        "description": "Cuenta con 3 puertos.",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "material": "acero, vidrio templado",
                "ranuras de expansion": 7,
                "ventiladores incluidos": "2 x 120 mm (parte frontal y trasera)"
            }
        ]
    },
    {
        "title": "Microprocesador Pc Amd Ryzen 5 4600g 8mb 3.7ghz Socket Am4 100-100000147box 6 Nucleos 12 Hilos",
        "price": 215599,
        "stock": 60,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo10.jpg?alt=media&token=dfddde86-682a-40a7-8292-dd33e7107906",
        "category": "Componente",
        "description": "Clave en el rendimiento de tu computadora de escritorio.",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Fuente De Alimentación Para Pc Sentey Snp650-gs 650w 80 Plus Color Negro",
        "price": 65000,
        "stock": 27,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo11.jpg?alt=media&token=d1bf2578-d6d8-4bc5-adde-1e3a34905548",
        "category": "Componente",
        "description": "Control de temperatura A través de su sistema de refrigeración.",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "arquitectura": "Zen 3",
                "nucleos / threads": "12 nucleos / 24 hilos",
                "TDP": "105W"
            }
        ]
    },
    {
        "title": "Motherboard Msi H510m-b 1200 1 Color Negro",
        "price": 107990,
        "stock": 35,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo12.jpg?alt=media&token=59454fe4-341f-4ab5-bbce-f62aad9886bf",
        "category": "Componente",
        "description": "Tipo de memoria RAM - DDR4.",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "tipo de memoria RAM": "DDR4",
                "scoket": 1200,
                "chipsets": "H470"
            }
        ]
    },
    {
        "title": "Apple iPhone 15 Pro (256 GB) - Titanio Negro",
        "price": 999999,
        "stock": 53,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu1.jpg?alt=media&token=6d2a33cd-0961-45d3-bd85-592fe423fdfc",
        "category": "Celular",
        "description": "iPhone 15 Pro. Forjado en titanio.",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "pantalla": "6.7 pulgadas",
                "procesador": "Apple A16 bionic",
                "sistema operativo": "!OS 16"
            }
        ]
    },
    {
        "title": "Realme C55 Dual SIM 256 GB rainy night 8 GB RAM",
        "price": 337720,
        "stock": 61,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu2.jpg?alt=media&token=341503e6-b75d-49e3-be41-2a917eec87b5",
        "category": "Celular",
        "description": "Sus 2 cámaras traseras de 64 Mpx/8 Mpx/2 Mpx te permitirán tomar imágenes con más detalles",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "pantalla": "6.6 pulgadas",
                "bateria": "5000 mAh",
                "sistema operativo": "Realme UI 3.0 basado en Android 12"
            }
        ]
    },
    {
        "title": "Celular Samsung Galaxy S22 5g 128gb + 8gb 120 Hz Negro",
        "price": 999999,
        "stock": 27,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu3.jpg?alt=media&token=a7bfe78d-ea93-491d-9fd2-10433d25e786",
        "category": "Celular",
        "description": "ALTA RESOLUCIÓN, Cada detalle, ahora es tuyo para que lo capturés",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "bateria": "4500 mAh",
                "sistema operativo": "One UI 5.0 basado en Android 13"
            }
        ]
    },
    {
        "title": "Xiaomi Redmi Note 12 Pro+ 5G Dual SIM 256 GB iceberg blue 8 GB RAM",
        "price": 725998,
        "stock": 44,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu4.jpg?alt=media&token=55b47f7a-aa74-430a-8791-8c2cc1720754",
        "category": "Celular",
        "description": "Capacidad y eficiencia, Con su potente procesador y memoria RAM de 8 GB tu equipo alcanzará un alto rendimiento con gran velocidad",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "pantalla": "6.67 pulgadas",
                "procesador": "Qualcomm Snapdragon 695",
                "bateria": "5000 mAh"
            }
        ]
    },
    {
        "title": "Blackview BV7100 Dual SIM 128 GB negro 6 GB RAM",
        "price": 490000,
        "stock": 28,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu5.jpg?alt=media&token=df65f4d1-920f-4e51-bd8a-4d96597edb7a",
        "category": "Celular",
        "description": "Experiencia visual increíble, Mirá tus series y películas favoritas con la mejor definición a través de su pantalla AMOLED de 6.67 pulgadas",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "pantalla": "6.5 pulgadas",
                "procesador": "MediaTek Helio P70",
                "bateria": "5580 mAh"
            }
        ]
    },
    {
        "title": "Redmi 10 Carbon Gray 4gb Ram 128gb Rom",
        "price": 288500,
        "stock": 33,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu6.jpg?alt=media&token=5ae2eaf7-3268-4d25-8284-28c81e678fa2",
        "category": "Celular",
        "description": "Desbloqueo facial y dactila",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "pantalla": "6.5 pulgadas",
                "procesador": "Qualcomm Snapdragon 680",
                "bateria": "5000 mAh"
            }
        ]
    },
    {
        "title": "Xiaomi Poco C65 Dual SIM 128 GB azul 6 GB RAM",
        "price": 281488,
        "stock": 63,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu7.jpg?alt=media&token=7a734b94-2310-4358-a681-4c0e2a401928",
        "category": "Celular",
        "description": "Capacidad y eficiencia, Con su potente procesador y memoria RAM de 6 GB tu equipo alcanzará un alto rendimiento",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "pantalla": "6.5 pulgadas",
                "procesador": "MediaTek Dimensity 700",
                "bateria": "6000 mAh"
            }
        ]
    },
    {
        "title": "Xiaomi Redmi Note 11 4gb Ram 128gb Rom Color Gris grafito",
        "price": 339999,
        "stock": 31,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu8.jpg?alt=media&token=393b6c5a-5882-4dfc-b6bd-9bb367998ccf",
        "category": "Celular",
        "description": "Fotografía profesional en tu bolsillo",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "pantalla": "6.43 pulgadas",
                "procesador": "MediaTek Helio G88",
            }
        ]
    },
    {
        "title": "Xiaomi Redmi 12 Dual SIM 256 GB midnight black 8 GB RAM",
        "price": 285414,
        "stock": 26,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu9.jpg?alt=media&token=7996d362-b829-4f3a-9100-bc3d17654f3c",
        "category": "Celular",
        "description": "Batería de duración superior",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "pantalla": "6.5 pulgadas",
                "procesador": "MediaTek Helio G96",
                "bateria": "5000 mAh"
            }
        ]
    },
    {
        "title": "Xiaomi Redmi 10c Dual Sim 128gb 4gb Ram Ocean Blue",
        "price": 214999,
        "stock": 25,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu10.jpg?alt=media&token=6900146f-43e1-47eb-9720-060ccba60cb0",
        "category": "Celular",
        "description": "Doble cámara y más detalles",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "pantalla": "6.53 pulgadas",
                "procesador": "MediaTek Helio G85",
                "bateria": "5000 mAh"
            }
        ]
    },
    {
        "title": "TCL 40 SE 128 GB twilight purple 4 GB RAM",
        "price": 244999,
        "stock": 29,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu12.jpg?alt=media&token=613c0743-95dc-4dd7-b1cd-4e9fe14102bc",
        "category": "Celular",
        "description": "Mayor rendimiento, Su memoria RAM de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "pantalla": "6.78 pulgadas",
                "procesador": "MediaTek Helio P22",
                "bateria": "4500 mAh"
            }
        ]
    },
    {
        "title": "Notebook Lenovo LOQ LOQ 15IRH8 storm grey Intel Core i5 12450H 8GB de RAM 512GB SSD, Windows 11 Home",
        "price": 999999,
        "stock": 28,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/lap1.jpg?alt=media&token=05a85190-07df-4a0c-8043-a1b233fe9129",
        "category": "Netbook",
        "description": "Eficiencia a tu alcance",
        "valoracion": "es lo mejor de lo mejor, rapida, practica para llevar a todos lados, la uso tanto para el trabajo como para tarear del hogar y me funciona de diez",
        "detalle": [
            {
                "pantalla": "15.6 pulgadas",
                "procesador": "Intel Core ¡5 12350H",
                "almacenamiento": "512GB SSD"
            }
        ]
    },
    {
        "title": "Notebook Asus Vivobook Go 14 Windows 11 128gb Ssd 4gb Ram Color Dreamy white",
        "price": 419999,
        "stock": 24,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/lap2.jpg?alt=media&token=b3228d1f-a733-4f92-be82-03a3137448e6",
        "category": "Netbook",
        "description": "Con un procesador Intel Celeron de 2 núcleos y 4 GB de memoria RAM DDR4, este portátil ofrece un rendimiento eficiente para realizar tus tareas diarias.",
        "valoracion": "es lo mejor de lo mejor, rapida, practica para llevar a todos lados, la uso tanto para el trabajo como para tarear del hogar y me funciona de diez",
        "detalle": [
            {
                "pantalla": "14 pulgadas",
                "procesador": "Intel Celeron de 2 núcleos",
                "RAM": "4GB DDR4"
            }
        ]
    },
    {
        "title": "Notebook Core I3 Aiwa 15.6 256gb 8gb Ram Win 11 + Funda Color Gris",
        "price": 539902,
        "stock": 27,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/lap3.jpg?alt=media&token=711b08a3-7b25-462a-a4cf-6af7145caed0",
        "category": "Netbook",
        "description": "Pantalla con gran impacto visual",
        "valoracion": "es lo mejor de lo mejor, rapida, practica para llevar a todos lados, la uso tanto para el trabajo como para tarear del hogar y me funciona de diez",
        "detalle": [
            {
                "pantalla": "15.6 pulgadas",
                "procesador": "Intel Core i3",
                "RAM": "8GB"
            }
        ]
    },
    {
        "title": "Notebook 15,6 Fhd Hp 255 G9 Ryzen 3 5425u 8gb 256gb W11 Prm Color Gris ceniza",
        "price": 662399,
        "stock": 45,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/lap4.jpg?alt=media&token=107e49aa-74e3-4f4e-97b9-a8d32b6fd828",
        "category": "Netbook",
        "description": "NOTEBOOK DE 15,6 pulgadas FULL HD HP PAVILION 255 G9 WINDOWS 11 HOME, AMD Ryzen 3 / 8 GB RAM / 256 GB SSD 74L44LT",
        "valoracion": "es lo mejor de lo mejor, rapida, practica para llevar a todos lados, la uso tanto para el trabajo como para tarear del hogar y me funciona de diez",
        "detalle": [
            {
                "pantalla": "15.6 pulgadas",
                "procesador": "AMD Ryzen 3 5425u",
                "RAM": "8GB"
            }
        ]
    },
    {
        "title": "Notebook Samsung Galaxy Book3 15.6 I5 8gb 512gb Color Silver",
        "price": 999999,
        "stock": 51,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/lap5.jpg?alt=media&token=b6cf09c0-febf-44a6-bec5-8e41bd6e7875",
        "category": "Netbook",
        "description": "La notebook Samsung Premium Galaxy Book3 es una solución tanto para trabajar y estudiar como para entretenerte.",
        "valoracion": "es lo mejor de lo mejor, rapida, practica para llevar a todos lados, la uso tanto para el trabajo como para tarear del hogar y me funciona de diez",
        "detalle": [
            {
                "pantalla": "15.6 pulgadas",
                "procesador": "Intel Core i5",
                "almacenamiento": "512GB"
            }
        ]
    },
    {
        "title": "Notebook Lenovo IdeaPad 14ADA7 gris AMD Ryzen 5 3500U 16GB de RAM 512GB SSD",
        "price": 697999,
        "stock": 81,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/lap6.jpg?alt=media&token=300a6fae-2b43-4083-b3ed-5a2be27dfec2",
        "category": "Netbook",
        "description": "Potente disco sólido.",
        "valoracion": "es lo mejor de lo mejor, rapida, practica para llevar a todos lados, la uso tanto para el trabajo como para tarear del hogar y me funciona de diez",
        "detalle": [
            {
                "pantalla": "14 pulgadas",
                "RAM": "16GB DDR4",
                "GPU": "Integrated AMD Radeon Graphics"
            }
        ]
    },
    {
        "title": "Notebook Gamer ROG Strix G15 G513RM-HQ084W 15.6 Ryzen 7 6800h 16GB 512GB SSD Nvidia Rtx3060 165 Hz W11",
        "price": 999999,
        "stock": 48,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/lap7.jpg?alt=media&token=d390dd1e-ccdc-4898-9a33-2404ed7aadec",
        "category": "Netbook",
        "description": "Un procesador exclusivo para los gráficos.",
        "valoracion": "es lo mejor de lo mejor, rapida, practica para llevar a todos lados, la uso tanto para el trabajo como para tarear del hogar y me funciona de diez",
        "detalle": [
            {
                "pantalla": "15.6 pulgadas",
                "RAM": "16GB",
                "almacenamiento": "512GB SSD"
            }
        ]
    },
    {
        "title": "Notebook Hp Intel I5 1135g1 8gb Ram 256gb Ssd Windows 11 Home 15.6 Pulgadas Full Hd Plateada",
        "price": 759999,
        "stock": 37,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/lap8.jpg?alt=media&token=1d9a124d-fc4e-4c19-a301-1020426da15d",
        "category": "Netbook",
        "description": "La notebook HP 15-DY2795WM es una solución tanto para trabajar y estudiar como para entretenerte.",
        "valoracion": "es lo mejor de lo mejor, rapida, practica para llevar a todos lados, la uso tanto para el trabajo como para tarear del hogar y me funciona de diez",
        "detalle": [
            {
                "pantalla": "15.6 pulgadas",
                "procesador": "Intel Core i5 1135g1",
                "RAM": "8GB"
            }
        ]
    },
    {
        "title": "Notebook Lenovo L15 G3 Ryzen5 8g Ssd 256g 15.6 Fhd Free Dos Color Negro",
        "price": 882000,
        "stock": 36,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/lap9.jpg?alt=media&token=b820c7dd-955b-495d-9ff9-62f195a989f7",
        "category": "Netbook",
        "description": "La Notebook Lenovo L15 G3 Ryzen5 es una excelente opción para aquellos que buscan un rendimiento potente y una experiencia visual inmersiva.",
        "valoracion": "es lo mejor de lo mejor, rapida, practica para llevar a todos lados, la uso tanto para el trabajo como para tarear del hogar y me funciona de diez",
        "detalle": [
            {
                "pantalla": "15.6 pulgadas",
                "procesador": "Ryzen5",
                "RAM": "8GB"
            }
        ]
    },
    {
        "title": "Monitor Philips 221v8/77 21,5'' Full Hd 75 Hz Lcd 4 Ms Color Negro",
        "price": 102399,
        "stock": 65,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni1.jpg?alt=media&token=581732af-9539-48c2-8f6f-0981a75947aa",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "tamaño": "21.5 pulgadas",
                "resolucion": "Full HD",
                "tiempo de respuesta": "4 ms"
            }
        ]
    },
    {
        "title": "Monitor Led Samsung 22'' Con Diseño Sin Bordes - Lf22t35 Color Negro",
        "price": 144342,
        "stock": 32,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni2.jpg?alt=media&token=f3bb3064-30f8-41ed-afdb-35bb3a89ae7b",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "tamaño": "22 pulgadas",
                "resolucion": "Full HD"
            }
        ]
    },
    {
        "title": "Monitor Led 24 pulgadas Ips 75hz",
        "price": 178192,
        "stock": 37,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni4.jpg?alt=media&token=41dbde8d-6b69-4635-9b18-35062a63bba0",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "tamaño": "24 pulgadas",
                "resolucion": "Full HD",
                "tecnologia de panel": "IPS",
            }
        ]
    },
    {
        "title": "Monitor Hkc Antteq 23,8 Full Hd F238m 24 Ips 75 Hz Hdmi Color Negro",
        "price": 124499,
        "stock": 52,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni5.jpg?alt=media&token=66b92693-0e8f-4189-a256-684b2b379d2f",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "tamaño": "23.8 pulgadas",
                "resolucion": "Full HD",
                "conectividad": "HDMI"
            }
        ]
    },
    {
        "title": "Monitor Samsung Led 27'' Ips Full Hd 75 Hz 5ms Amd Freesync Color Negro",
        "price": 299999,
        "stock": 34,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni6.jpg?alt=media&token=b2bf2842-e456-40ba-9421-695469f6c637",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "tamaño": "27 pulgadas",
                "resolucion": "Full HD",
                "conectividad": "HDMI"
            }
        ]
    },
    {
        "title": "Monitor Led 4k 27 Pulgadas LG 27ul500-w Uhd Hdr Hdmi Ips Color Blanco",
        "price": 541000,
        "stock": 29,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni7.jpg?alt=media&token=bb2d163c-f3d9-463a-afaa-ed5930281fd1",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "tamaño": "27 pulgadas",
                "resolucion": "Full HD",
                "conectividad": "HDMI"
            }
        ]
    },
    {
        "title": "Monitor Asus 27 Va27ehey Hdmi Ips 75hz 1920x1080 Color Negro",
        "price": 226999,
        "stock": 25,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni8.jpg?alt=media&token=ddbc01fc-5a7c-48d8-87ef-bc1a933edd3b",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "tamaño": "27 pulgadas",
                "resolucion": "Full HD",
                "conectividad": "HDMI"
            }
        ]
    },
    {
        "title": "Monitor Gamer Aoc 24 Fhd G2490vx 144hz 1ms Amd Freesync Color Negro",
        "price": 289919,
        "stock": 27,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni9.jpg?alt=media&token=88de8969-61c3-4d80-b10f-09223982a605",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "tamaño": "24 pulgadas",
                "resolucion": "Full HD",
                "conectividad": "HDMI"
            }
        ]
    },
    {
        "title": "Monitor Gamer 23.8 Aoc G2490vx 144hz Free Sync Display Port Color Negro/Rojo",
        "price": 529999,
        "stock": 51,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni11.jpg?alt=media&token=de2c22ff-f84a-4e2d-9d15-6cbc720ba0ba",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "tamaño": "23.8 pulgadas",
                "resolucion": "Full HD",
                "conectividad": "HDMI"
            }
        ]
    },
    {
        "title": "Monitor gamer LG UltraGear 27GP850 LCD 27 pulgadas negro 100V/240V",
        "price": 839000,
        "stock": 48,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni12.jpg?alt=media&token=0cdaaf9c-f196-4e58-8061-60689958a1ff",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "tamaño": "27 pulgadas",
                "resolucion": "Full HD",
                "conectividad": "HDMI"
            }
        ]
    },
    {
        "title": "Monitor gamer curvo Samsung Odyssey G5 S32AG55 LCD 32 pulgadas negro 100V/240V",
        "price": 692129,
        "stock": 59,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni13.jpg?alt=media&token=e9c0d0d4-e9e4-45c2-a5a9-19cc7a37047a",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "tamaño": "32 pulgadas",
                "resolucion": "Full HD",
                "conectividad": "HDMI",
                "color": "negro",
            }
        ]
    },
    {
        "title": "Monitor gamer LG UltraGear 24GN60R LCD 23.8 pulgada negro 100V/240V",
        "price": 531989,
        "stock": 37,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni14.jpg?alt=media&token=45ea8200-beaa-41c8-b26b-ddfc11cc328c",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "tamaño": "23.8 pulgadas",
                "resolucion": "Full HD",
                "conectividad": "HDMI"
            }
        ]
    },
    {
        "title": "Monitor Gaming Samsung Ls27ag550 Odyssey G5 Curvo Negro 27 pulgada",
        "price": 566999,
        "stock": 53,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni15.jpg?alt=media&token=f6c916bc-ab06-4c45-b8a8-4fb1a6adc91f",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "tamaño": "27 pulgadas",
                "resolucion": "Full HD",
                "conectividad": "HDMI"
            }
        ]
    },
    {
        "title": "Monitor gamer Redragon Jade GM3CS27 led 27 pulgada negro 100V/240V",
        "price": 606519,
        "stock": 44,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni16.jpg?alt=media&token=17eb113d-1e15-447a-ad42-bc713fdc41c6",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "tamaño": "27 pulgadas",
                "resolucion": "Full HD",
                "conectividad": "HDMI"
            }
        ]
    }
]

export const createProducst = async () => {
    prods.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            title: prod.title,
            price: prod.price,
            stock: prod.stock,
            img: prod.img,
            category: prod.category,
            description: prod.description,
            valoracion: prod.valoracion,
            detalle: prod.detalle,
        })

    })
}

export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
    return items
}


export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}


export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)

}


export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}


export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}


export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    return item
}