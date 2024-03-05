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
        "title": "Monstera Deliciosa",
        "price": 1500,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/1.jpg?alt=media&token=55cd03d9-45d3-46c8-b924-6557483a8c3b",
        "category": "interior",
        "description": "Una planta de interior es perfecta para dar vida y color a tu hogar. Con su encanto natural, añade un toque de frescura y serenidad a cualquier espacio interior. Disfruta de la belleza de la naturaleza en la comodidad de tu casa.",
        "valoracion": "Muy buena, !Hermosa planta! Cumple con todas mis expectativas y más. Definitivamente la recomendaría a todos mis amigos y familiares.",
        "detalle": [
            {
                "luz": "Coloca las plantas cerca de ventanas con luz indirecta.",
                "riego": "Un poco todos los dias",
                "temperatura": "Mantén las plantas en un ambiente con temperaturas moderadas.",
                "podar": "Retira hojas muertas o marchitas y poda ramas enfermas."
            }
        ]
    },
    {
        "title": "Croton",
        "price": 2200,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/2.jpg?alt=media&token=ee2cdccc-9693-4d88-b611-d2f1eb9bfbcb",
        "category": "interior",
        "description": "Una planta de interior es perfecta para dar vida y color a tu hogar. Con su encanto natural, añade un toque de frescura y serenidad a cualquier espacio interior. Disfruta de la belleza de la naturaleza en la comodidad de tu casa.",
        "valoracion": "Muy buena, !Hermosa planta! Cumple con todas mis expectativas y más. Definitivamente la recomendaría a todos mis amigos y familiares.",
        "detalle": [
            {
                "luz": "Coloca las plantas cerca de ventanas con luz indirecta.",
                "riego": "Un poco todos los dias",
                "temperatura": "Mantén las plantas en un ambiente con temperaturas moderadas.",
                "podar": "Retira hojas muertas o marchitas y poda ramas enfermas."
            }
        ]
    },
    {
        "title": "Calathea",
        "price": 2100,
        "stock": 9,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/3.jpg?alt=media&token=c51501ed-47ec-4f76-8319-4c8e0b5dd7b5",
        "category": "interior",
        "description": "Una planta de interior es perfecta para dar vida y color a tu hogar. Con su encanto natural, añade un toque de frescura y serenidad a cualquier espacio interior. Disfruta de la belleza de la naturaleza en la comodidad de tu casa.",
        "valoracion": "Muy buena, !Hermosa planta! Cumple con todas mis expectativas y más. Definitivamente la recomendaría a todos mis amigos y familiares.",
        "detalle": [
            {
                "luz": "Coloca las plantas cerca de ventanas con luz indirecta.",
                "riego": "Un poco todos los dias",
                "temperatura": "Mantén las plantas en un ambiente con temperaturas moderadas.",
                "podar": "Retira hojas muertas o marchitas y poda ramas enfermas."
            }
        ]
    },
    {
        "title": "Anthurium Vitechii",
        "price": 1800,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/4.jpg?alt=media&token=aa32404c-e48e-498f-8bbb-ebe56632f954",
        "category": "interior",
        "description": "Una planta de interior es perfecta para dar vida y color a tu hogar. Con su encanto natural, añade un toque de frescura y serenidad a cualquier espacio interior. Disfruta de la belleza de la naturaleza en la comodidad de tu casa.",
        "valoracion": "Muy buena, !Hermosa planta! Cumple con todas mis expectativas y más. Definitivamente la recomendaría a todos mis amigos y familiares.",
        "detalle": [
            {
                "luz": "Coloca las plantas cerca de ventanas con luz indirecta.",
                "riego": "Un poco todos los dias",
                "temperatura": "Mantén las plantas en un ambiente con temperaturas moderadas.",
                "podar": "Retira hojas muertas o marchitas y poda ramas enfermas."
            }
        ]
    },
    {
        "title": "Syngonium Albo",
        "price": 2700,
        "stock": 24,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/5.jpg?alt=media&token=28226ed4-05ed-4aa6-8c66-e45108546a7a",
        "category": "interior",
        "description": "Una planta de interior es perfecta para dar vida y color a tu hogar. Con su encanto natural, añade un toque de frescura y serenidad a cualquier espacio interior. Disfruta de la belleza de la naturaleza en la comodidad de tu casa.",
        "valoracion": "Muy buena, !Hermosa planta! Cumple con todas mis expectativas y más. Definitivamente la recomendaría a todos mis amigos y familiares.",
        "detalle": [
            {
                "luz": "Coloca las plantas cerca de ventanas con luz indirecta.",
                "riego": "Un poco todos los dias",
                "temperatura": "Mantén las plantas en un ambiente con temperaturas moderadas.",
                "podar": "Retira hojas muertas o marchitas y poda ramas enfermas."
            }
        ]
    },
    {
        "title": "Aspargus Plumoso",
        "price": 1700,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/6.jpg?alt=media&token=16e8a23c-dfa6-4584-b6c9-32e677d6e43e",
        "category": "interior",
        "description": "Una planta de interior es perfecta para dar vida y color a tu hogar. Con su encanto natural, añade un toque de frescura y serenidad a cualquier espacio interior. Disfruta de la belleza de la naturaleza en la comodidad de tu casa.",
        "valoracion": "Muy buena, !Hermosa planta! Cumple con todas mis expectativas y más. Definitivamente la recomendaría a todos mis amigos y familiares.",
        "detalle": [
            {
                "luz": "Coloca las plantas cerca de ventanas con luz indirecta.",
                "riego": "Un poco todos los dias",
                "temperatura": "Mantén las plantas en un ambiente con temperaturas moderadas.",
                "podar": "Retira hojas muertas o marchitas y poda ramas enfermas."
            }
        ]
    },
    {
        "title": "Orquídea Phalaenopsis",
        "price": 1800,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/7.jpg?alt=media&token=e2b0869f-a3d1-4cfb-9b8b-a1aa7d0d82df",
        "category": "exterior",
        "description": "Una planta de exterior es ideal para decorar tu jardín o balcón. Con su belleza natural y resistencia al clima, añade frescura y vida a cualquier espacio al aire libre.",
        "valoracion": "Maso menos, La planta es aceptable, pero no impresionante. Es linda, aunque esperaba un poco más en términos de calidad y durabilidad.",
        "detalle": [
            {
                "Luz": "Coloca las plantas en lugares con un poco de sombra",
                "Riego": "Un poco todos los dias",
                "Temperatura": "Mantén las plantas en un ambiente con temperaturas moderadas.",
                "Podar": "Retira hojas muertas o marchitas y poda ramas enfermas."
            }
        ]
    },
    {
        "title": "Ficus elástica",
        "price": 2800,
        "stock": 12,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/8.jpg?alt=media&token=8fa1cf2f-eb69-4af7-a480-4f3cb8250d49",
        "category": "exterior",
        "description": "Una planta de exterior es ideal para decorar tu jardín o balcón. Con su belleza natural y resistencia al clima, añade frescura y vida a cualquier espacio al aire libre.",
        "valoracion": "Maso menos, La planta es aceptable, pero no impresionante. Es linda, aunque esperaba un poco más en términos de calidad y durabilidad.",
        "detalle": [
            {
                "luz": "Coloca las plantas en lugares con un poco de sombra",
                "riego": "Un poco todos los dias",
                "temperatura": "Mantén las plantas en un ambiente con temperaturas moderadas.",
                "podar": "Retira hojas muertas o marchitas y poda ramas enfermas."
            }
        ]
    },
    {
        "title": "Fitonia",
        "price": 1600,
        "stock": 17,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/9.jpg?alt=media&token=5fed3a1e-4c7b-4f9e-a34d-3d72ea9424ec",
        "category": "exterior",
        "description": "Una planta de exterior es ideal para decorar tu jardín o balcón. Con su belleza natural y resistencia al clima, añade frescura y vida a cualquier espacio al aire libre.",
        "valoracion": "Maso menos, La planta es aceptable, pero no impresionante. Es linda, aunque esperaba un poco más en términos de calidad y durabilidad.",
        "detalle": [
            {
                "luz": "Coloca las plantas en lugares con un poco de sombra",
                "riego": "Un poco todos los dias",
                "temperatura": "Mantén las plantas en un ambiente con temperaturas moderadas.",
                "podar": "Retira hojas muertas o marchitas y poda ramas enfermas."
            }
        ]
    },
    {
        "title": "Maranta Leuconeura",
        "price": 2500,
        "stock": 20,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/10.jpg?alt=media&token=7bc5cc7b-4bb1-4220-9773-f7030986a96a",
        "category": "exterior",
        "description": "Una planta de exterior es ideal para decorar tu jardín o balcón. Con su belleza natural y resistencia al clima, añade frescura y vida a cualquier espacio al aire libre.",
        "valoracion": "Maso menos, La planta es aceptable, pero no impresionante. Es linda, aunque esperaba un poco más en términos de calidad y durabilidad.",
        "detalle": [
            {
                "luz": "Coloca las plantas en lugares con un poco de sombra",
                "riego": "Un poco todos los dias",
                "temperatura": "Mantén las plantas en un ambiente con temperaturas moderadas.",
                "podar": "Retira hojas muertas o marchitas y poda ramas enfermas."
            }
        ]
    },
    {
        "title": "Begonia Maculata",
        "price": 15,
        "stock": 20,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/11.jpg?alt=media&token=c4bcbd1f-edcd-4d5e-8674-5024c8866c15",
        "category": "exterior",
        "description": "Una planta de exterior es ideal para decorar tu jardín o balcón. Con su belleza natural y resistencia al clima, añade frescura y vida a cualquier espacio al aire libre.",
        "valoracion": "Maso menos, La planta es aceptable, pero no impresionante. Es linda, aunque esperaba un poco más en términos de calidad y durabilidad.",
        "detalle": [
            {
                "luz": "Coloca las plantas en lugares con un poco de sombra",
                "riego": "Un poco todos los dias",
                "temperatura": "Mantén las plantas en un ambiente con temperaturas moderadas.",
                "podar": "Retira hojas muertas o marchitas y poda ramas enfermas."
            }
        ]
    },
    {
        "title": "maranta Light",
        "price": 1900,
        "stock": 6,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/12.jpg?alt=media&token=481b8aa6-608c-418c-8b27-00ddb18476a9",
        "category": "holamundo",
        "description": "Una planta de exterior es ideal para decorar tu jardín o balcón. Con su belleza natural y resistencia al clima, añade frescura y vida a cualquier espacio al aire libre.",
        "valoracion": "Maso menos, La planta es aceptable, pero no impresionante. Es linda, aunque esperaba un poco más en términos de calidad y durabilidad.",
        "detalle": [
            {
                "luz": "Coloca las plantas en lugares con un poco de sombra",
                "riego": "Un poco todos los dias",
                "temperatura": "Mantén las plantas en un ambiente con temperaturas moderadas.",
                "podar": "Retira hojas muertas o marchitas y poda ramas enfermas."
            }
        ]
    },
    {
        "title": "Pc Armada Gamer Amd Ryzen 7 5700g Ram 32gb 960g Ssd Wifi",
        "price": 890.000,
        "stock": 6,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc1.jpg?alt=media&token=ba5fe953-8e0f-4bdc-8900-2bc1cef6d79e",
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
        "price": 466.799,
        "stock": 4,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc2.jpg?alt=media&token=5f93d783-8dca-4885-b102-12cfe81df52d",
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
        "price": 359.999,
        "stock": 13,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc3.jpg?alt=media&token=00d8fb2e-ce8d-4e25-8360-047cf079fd8c",
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
        "price": 505.882,
        "stock": 9,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc4.jpg?alt=media&token=da09b194-a281-4f59-bef2-fdd4d8349b2f",
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
        "price": 499.999,
        "stock": 19,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc5.jpg?alt=media&token=f5af5ee2-b239-4d8f-83b7-0b672c33ed92",
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
        "price": 353.899,
        "stock": 12,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc6.jpg?alt=media&token=95f3af08-9eaa-47a7-be53-9119d56b3329",
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
        "price": 339.999,
        "stock": 4,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc7.jpg?alt=media&token=e20c78df-645c-493a-89bb-c6b1c3834b22",
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
        "price": 274.739,
        "stock": 6,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc8.jpg?alt=media&token=3722c940-61a3-43f4-8513-4c45a6e79f7f",
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
        "price": 296.690,
        "stock": 4,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc9.jpg?alt=media&token=a957784a-0490-4588-862b-39f16e706db0",
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
        "price": 479.999,
        "stock": 2,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc10.jpg?alt=media&token=50de2c04-1760-47d6-bad7-cf0fd5688e41",
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
        "price": 469.759,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc11.jpg?alt=media&token=f4fe5b6f-0af7-4f20-a1e3-94c00f4e74d1",
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
        "price": 519.759,
        "stock": 21,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc12.jpg?alt=media&token=095f62c9-10ef-4abb-952d-cc380c4d79e5",
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
        "price": 799.998,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc13.jpg?alt=media&token=7e549a1c-98b0-4f17-a892-c260b4466831",
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
        "price": 999.999,
        "stock": 2,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc14.jpg?alt=media&token=57526779-0564-448e-85ae-60f669446e7b",
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
        "title": "Auriculares gamer inalámbricos",
        "price": 101.999,
        "stock": 4,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/pc14.jpg?alt=media&token=57526779-0564-448e-85ae-60f669446e7b",
        "category": "Pc",
        "description": "Ideado para los gamers más exigentes",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "si"
            }
        ]
    },
    {
        "title": "Auriculares gamer inalámbricos",
        "price": 101.999,
        "stock": 4,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri1.jpg?alt=media&token=ba437d96-e2d8-4dfc-814a-8a9ab9eece4c",
        "category": "Auriculares",
        "description": "Ideado para los gamers más exigentes",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "si"
            }
        ]
    },
    {
        "title": "Auriculares Gamer Redragon H260 Hylas Negro Con Luz Led",
        "price": 38.636,
        "stock": 12,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri2.jpg?alt=media&token=11686e4b-5f3b-44be-9185-fabda409a99b",
        "category": "Auriculares",
        "description": "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! con estos auriculares gamer!.",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "si"
            }
        ]
    },
    {
        "title": "Auriculares Gamer Jbl Quantum 100 Negro",
        "price": 75.999,
        "stock": 25,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri3.jpg?alt=media&token=bd601bd9-26f2-4859-b0d9-627f323fbfe8",
        "category": "Auriculares",
        "description": "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! con estos auriculares gamer!.",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "si"
            }
        ]
    },
    {
        "title": "Auriculares gamer Noga Stormer ST-ONIX negro con luz rojo LED",
        "price": 21.155,
        "stock": 2,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri4.jpg?alt=media&token=603d4540-2134-4454-8c06-436dc0a15145",
        "category": "Auriculares",
        "description": "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! con estos auriculares gamer!.",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "si"
            }
        ]
    },
    {
        "title": "Auriculares gamer Nubwo N1 Pro negro con luz LED",
        "price": 19.738,
        "stock": 26,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri5.jpg?alt=media&token=81674c82-aa5c-4ad3-90ea-194072556e9a",
        "category": "Auriculares",
        "description": "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! con estos auriculares gamer!.",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "si"
            }
        ]
    },
    {
        "title": "Auricular Vincha Bluetooth Inalambrico/cable Netmak Nm-volt",
        "price": 10.999,
        "stock": 4,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri6.jpg?alt=media&token=64644fd2-7080-42b0-be1f-e13ce9cdda20",
        "category": "Auriculares",
        "description": "Ideado para los gamers más exigentes",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "si"
            }
        ]
    },
    {
        "title": "Auriculares gamer inalámbricos HyperX Cloud Stinger Core HHSS1C-KB blanco",
        "price": 104.500,
        "stock": 6,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri7.jpg?alt=media&token=0e12c27b-c3ae-44f8-be44-2e0f7819e73c",
        "category": "Auriculares",
        "description": "Ideado para los gamers más exigentes",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "si"
            }
        ]
    },
    {
        "title": "Auriculares Gamer Redragon Pandora 7.1 Blanco Con Luz Rgb Led Usb",
        "price": 49.999,
        "stock": 28,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri8.jpg?alt=media&token=2558bfde-652d-4965-9030-4cf8d453f123",
        "category": "Auriculares",
        "description": "Ideado para los gamers más exigentes",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "si"
            }
        ]
    },
    {
        "title": "Auriculares gamer inalámbricos Logitech G Series G435 negro y amarillo fluorescente",
        "price": 108.290,
        "stock": 8,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri9.jpg?alt=media&token=7bdf38a9-4c02-4814-a3fd-16a096924571",
        "category": "Auriculares",
        "description": "Su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "si"
            }
        ]
    },
    {
        "title": "Auriculares gamer Redragon Ares H120 negro y rojo",
        "price": 26.998,
        "stock": 4,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/auri10.jpg?alt=media&token=e0626452-0038-4897-90cb-bad0a738f7ea",
        "category": "Auriculares",
        "description": "Su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
        "valoracion": "son super comodos, lo recomiendo mucho 10 de 10",
        "detalle": [
            {
                "luz": "si",
                "inalámbricos": "si"
            }
        ]
    },
    {
        "title": "Disco sólido interno Kingston SA400S37/960G SATA 960GB negro",
        "price": 68.901,
        "stock": 45,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo1.jpg?alt=media&token=3266eefb-d1e1-49a2-afe2-e657853fbe36",
        "category": "Componente",
        "description": "Considerado un dispositivo de alto rendimiento, la unidad en estado sólido A400 de Kingston está diseñada para las personas más exigentes..",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Motherboard Am4 B450m Ds3h Tarjeta Madre Gigabyte Amd Ddr4 Color Negro",
        "price": 109.999,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo2.jpg?alt=media&token=4987343d-b61f-406a-b5cb-72c741be8ec0",
        "category": "Componente",
        "description": "Soporta hasta 128gb de memoria RAM",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Placa de video Nvidia Colorful Colorful GeForce 700 Series GT 710 GT710-2GD3-V 2GB",
        "price": 87.193,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo3.jpg?alt=media&token=e147b600-fae3-4233-b5f9-d7046c34901e",
        "category": "Componente",
        "description": "Mejora tu experiencia visual con la Placa de video Nvidia Colorful GeForce 700 Series GT 710 GT710-2GD3-V 2GB",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Memoria RAM Fury Beast DDR4 gamer color negro 8GB 1 Kingston KF432C16BB/8",
        "price": 31.383,
        "stock": 41,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo4.jpg?alt=media&token=c6a34681-95c2-4998-bba9-72aa08c66744",
        "category": "Componente",
        "description": "Potenciá tu PC, Con su tecnología DDR4, mejorará el desempeño de tu equipo.",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Procesador AMD Ryzen 5 5600G AM4 DDR4 100-100000252BOX",
        "price": 191.627,
        "stock": 4,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo5.jpg?alt=media&token=38b2a4eb-a047-45af-82e9-70b69b734e1e",
        "category": "Componente",
        "description": "Mejora tu experiencia de juego con el Procesador gamer AMD Ryzen 5 5600G.",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Placa Madre Asus Tuf Gaming B450m Plus 2 Ryzen M.2 Usb 3.2",
        "price": 145.999,
        "stock": 6,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo6.jpg?alt=media&token=ae4d4bf3-2719-4904-960a-f8b94a3d4b48",
        "category": "Componente",
        "description": "Modelo B45M-Plus.",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Gabinete Gamer Xigmatek Atx Vortex Rgb Vidrio Templado Negro",
        "price": 55.000,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo7.jpg?alt=media&token=b312c74c-9589-4bc5-a5c6-283a4ef096fd",
        "category": "Componente",
        "description": "Incluye Fan x1 - 120 mm ARGB varios colores y modos cambiables desde boton del gabinete.",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Disco duro externo Seagate Expansion STKM2000400 2TB negro",
        "price": 114.999,
        "stock": 47,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo8.jpg?alt=media&token=32597c83-3a90-4556-8fb3-39af45feacb4",
        "category": "Componente",
        "description": "Irrompible, Además de su funcionalidad y soporte, la importancia de los discos de almacenamiento también radica en su calidad y resistencia.",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Gabinete Gamer Andromeda Atx Vidrio Templado X3 Fan Rgb",
        "price": 98.499,
        "stock": 30,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo9.jpg?alt=media&token=6584d268-195b-49fd-b6bd-9798fe395c50",
        "category": "Componente",
        "description": "Cuenta con 3 puertos.",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Microprocesador Pc Amd Ryzen 5 4600g 8mb 3.7ghz Socket Am4 100-100000147box 6 Nucleos 12 Hilos",
        "price": 215.599,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo10.jpg?alt=media&token=041e001b-0441-4184-984f-796319583e84",
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
        "price": 65.000,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo11.jpg?alt=media&token=15f658f4-643a-4dac-982f-0f1e155a14dc",
        "category": "Componente",
        "description": "Control de temperatura A través de su sistema de refrigeración.",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Motherboard Msi H510m-b 1200 1 Color Negro",
        "price": 107.990,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/compo12.jpg?alt=media&token=38de8670-a600-4b65-981e-6ef95fb16ab7",
        "category": "Componente",
        "description": "Tipo de memoria RAM - DDR4.",
        "valoracion": "mejor de lo que pensaba",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Apple iPhone 15 Pro (256 GB) - Titanio Negro",
        "price": 999.999,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu1.jpg?alt=media&token=4eda374e-6a88-433b-a12d-d6be745ff6ca",
        "category": "Celular",
        "description": "iPhone 15 Pro. Forjado en titanio.",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Realme C55 Dual SIM 256 GB rainy night 8 GB RAM",
        "price": 337.720,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu2.jpg?alt=media&token=ca8e0249-c289-4944-ac77-1b82bbeb4d0e",
        "category": "Celular",
        "description": "Sus 2 cámaras traseras de 64 Mpx/8 Mpx/2 Mpx te permitirán tomar imágenes con más detalles",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Celular Samsung Galaxy S22 5g 128gb + 8gb 120 Hz Negro",
        "price": 999.999,
        "stock": 2,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu3.jpg?alt=media&token=1bc4f7fb-0e1a-4de4-a554-3af09d598aee",
        "category": "Celular",
        "description": "ALTA RESOLUCIÓN, Cada detalle, ahora es tuyo para que lo capturés",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Xiaomi Redmi Note 12 Pro+ 5G Dual SIM 256 GB iceberg blue 8 GB RAM",
        "price": 725.998,
        "stock": 44,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu4.jpg?alt=media&token=34fb420b-0f53-42a0-828b-7213cfaaa522",
        "category": "Celular",
        "description": "Capacidad y eficiencia, Con su potente procesador y memoria RAM de 8 GB tu equipo alcanzará un alto rendimiento con gran velocidad",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Blackview BV7100 Dual SIM 128 GB negro 6 GB RAM",
        "price": 490.000,
        "stock": 2,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu5.jpg?alt=media&token=5c23ac3c-5501-4347-8e97-e9db26c70a16",
        "category": "Celular",
        "description": "Experiencia visual increíble, Mirá tus series y películas favoritas con la mejor definición a través de su pantalla AMOLED de 6.67 pulgadas",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Redmi 10 Carbon Gray 4gb Ram 128gb Rom",
        "price": 288.500,
        "stock": 33,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu6.jpg?alt=media&token=59c4b36a-9f98-4e85-b46e-c5ab54c6b39f",
        "category": "Celular",
        "description": "Desbloqueo facial y dactila",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Xiaomi Poco C65 Dual SIM 128 GB azul 6 GB RAM",
        "price": 281.488,
        "stock": 13,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu7.jpg?alt=media&token=738fa604-1666-4df2-add3-2f3d37e78865",
        "category": "Celular",
        "description": "Capacidad y eficiencia, Con su potente procesador y memoria RAM de 6 GB tu equipo alcanzará un alto rendimiento",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Xiaomi Redmi Note 11 4gb Ram 128gb Rom Color Gris grafito",
        "price": 339.999,
        "stock": 51,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu8.jpg?alt=media&token=cb9cc575-c55b-4636-bd1e-c61257396724",
        "category": "Celular",
        "description": "Fotografía profesional en tu bolsillo",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Xiaomi Redmi 12 Dual SIM 256 GB midnight black 8 GB RAM",
        "price": 285.414,
        "stock": 1,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu9.jpg?alt=media&token=38e5e6ae-6670-4245-8680-d504ccc4aa05",
        "category": "Celular",
        "description": "Batería de duración superior",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Xiaomi Redmi 10c Dual Sim 128gb 4gb Ram Ocean Blue",
        "price": 214.999,
        "stock": 25,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu10.jpg?alt=media&token=3339e0cf-17e6-4cf2-a4e4-2063aa698d19",
        "category": "Celular",
        "description": "Doble cámara y más detalles",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "TCL 40 SE 128 GB twilight purple 4 GB RAM",
        "price": 244.999,
        "stock": 29,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/celu12.jpg?alt=media&token=00f4f252-ab6e-43ac-93e5-fb4590e0be93",
        "category": "Celular",
        "description": "Mayor rendimiento, Su memoria RAM de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras",
        "valoracion": "sin dudas es lo mejor que hay en cuanto a celulares",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Notebook Lenovo LOQ LOQ 15IRH8 storm grey Intel Core i5 12450H 8GB de RAM 512GB SSD, NVIDIA GeForce RTX 3050 144 Hz 1920x1080px Windows 11 Home",
        "price": 999.999,
        "stock": 8,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/lap1.jpg?alt=media&token=772e322c-fe97-4f8b-a9ea-2b3cbc4bd9dc",
        "category": "Netbook",
        "description": "Eficiencia a tu alcance",
        "valoracion": "es lo mejor de lo mejor, rapida, practica para llevar a todos lados, la uso tanto para el trabajo como para tarear del hogar y me funciona de diez",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Notebook Asus Vivobook Go 14 Windows 11 128gb Ssd 4gb Ram Color Dreamy white",
        "price": 419.999,
        "stock": 17,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/lap2.jpg?alt=media&token=bd6a5ed5-3b82-47d3-82f8-34932117cd70",
        "category": "Netbook",
        "description": "Con un procesador Intel Celeron de 2 núcleos y 4 GB de memoria RAM DDR4, este portátil ofrece un rendimiento eficiente para realizar tus tareas diarias.",
        "valoracion": "es lo mejor de lo mejor, rapida, practica para llevar a todos lados, la uso tanto para el trabajo como para tarear del hogar y me funciona de diez",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Notebook Core I3 Aiwa 15.6 256gb 8gb Ram Win 11 + Funda Color Gris",
        "price": 539.902,
        "stock": 2,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/lap3.jpg?alt=media&token=2561ee0c-1a98-4ced-91f2-186959132a51",
        "category": "Netbook",
        "description": "Pantalla con gran impacto visual",
        "valoracion": "es lo mejor de lo mejor, rapida, practica para llevar a todos lados, la uso tanto para el trabajo como para tarear del hogar y me funciona de diez",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Notebook 15,6 Fhd Hp 255 G9 Ryzen 3 5425u 8gb 256gb W11 Prm Color Gris ceniza",
        "price": 662.399,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/lap4.jpg?alt=media&token=1c07804f-9e5a-4812-9390-39c0a8c09543",
        "category": "Netbook",
        "description": "NOTEBOOK DE 15,6 pulgadas FULL HD HP PAVILION 255 G9 WINDOWS 11 HOME, AMD Ryzen 3 / 8 GB RAM / 256 GB SSD 74L44LT",
        "valoracion": "es lo mejor de lo mejor, rapida, practica para llevar a todos lados, la uso tanto para el trabajo como para tarear del hogar y me funciona de diez",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Notebook Samsung Galaxy Book3 15.6 I5 8gb 512gb Color Silver",
        "price": 999.999,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/lap5.jpg?alt=media&token=ab3cf1e3-5d2a-4beb-b25e-316ba7f16444",
        "category": "Netbook",
        "description": "La notebook Samsung Premium Galaxy Book3 es una solución tanto para trabajar y estudiar como para entretenerte.",
        "valoracion": "es lo mejor de lo mejor, rapida, practica para llevar a todos lados, la uso tanto para el trabajo como para tarear del hogar y me funciona de diez",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Notebook Lenovo IdeaPad 14ADA7 gris AMD Ryzen 5 3500U 16GB de RAM 512GB SSD, Integrated AMD Radeon Graphics 60 Hz 1366x768px",
        "price": 697.999,
        "stock": 8,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/lap6.jpg?alt=media&token=b4a2ffb7-1c5e-4078-b9fa-3bb48723c1ce",
        "category": "Netbook",
        "description": "Potente disco sólido.",
        "valoracion": "es lo mejor de lo mejor, rapida, practica para llevar a todos lados, la uso tanto para el trabajo como para tarear del hogar y me funciona de diez",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Notebook Gamer ROG Strix G15 G513RM-HQ084W 15.6 Ryzen 7 6800h 16GB 512GB SSD Nvidia Rtx3060 165 Hz W11",
        "price": 999.999,
        "stock": 18,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/lap7.jpg?alt=media&token=1cdd7546-10a4-4f6d-8018-383436b56369",
        "category": "Netbook",
        "description": "Un procesador exclusivo para los gráficos.",
        "valoracion": "es lo mejor de lo mejor, rapida, practica para llevar a todos lados, la uso tanto para el trabajo como para tarear del hogar y me funciona de diez",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Notebook Hp Intel I5 1135g1 8gb Ram 256gb Ssd Windows 11 Home 15.6 Pulgadas Full Hd Plateada",
        "price": 759.999,
        "stock": 1,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/lap8.jpg?alt=media&token=5af0ad77-d554-4a59-818c-1a8a3d6b6edb",
        "category": "Netbook",
        "description": "La notebook HP 15-DY2795WM es una solución tanto para trabajar y estudiar como para entretenerte.",
        "valoracion": "es lo mejor de lo mejor, rapida, practica para llevar a todos lados, la uso tanto para el trabajo como para tarear del hogar y me funciona de diez",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Notebook Lenovo L15 G3 Ryzen5 8g Ssd 256g 15.6 Fhd Free Dos Color Negro",
        "price": 882.000,
        "stock": 6,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/lap9.jpg?alt=media&token=d1874be6-2958-4466-b647-fc096a71f924",
        "category": "Netbook",
        "description": "La Notebook Lenovo L15 G3 Ryzen5 es una excelente opción para aquellos que buscan un rendimiento potente y una experiencia visual inmersiva.",
        "valoracion": "es lo mejor de lo mejor, rapida, practica para llevar a todos lados, la uso tanto para el trabajo como para tarear del hogar y me funciona de diez",
        "detalle": [
            {
                "detalles": "el vendedor no dejo detalles sobre este producto"
            }
        ]
    },
    {
        "title": "Monitor Philips 221v8/77 21,5'' Full Hd 75 Hz Lcd 4 Ms Color Negro",
        "price": 102.399,
        "stock": 65,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni1.jpg?alt=media&token=c87f3587-1b20-4a1c-a074-3fb30782df21",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "resolucion": "Full Hd"
            }
        ]
    },
    {
        "title": "Monitor Led Samsung 22'' Con Diseño Sin Bordes - Lf22t35 Color Negro",
        "price": 144.342,
        "stock": 12,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni2.jpg?alt=media&token=af770cb0-95a7-4a6e-922f-679355b13f73",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "resolucion": "Full Hd"
            }
        ]
    },
    {
        "title": "Monitor Led Samsung 24'' Ips 75hz - Lf24t350fhlczb",
        "price": 178.192,
        "stock": 17,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni3.jpg?alt=media&token=a0f807aa-88d0-4d04-9a34-2632dbfbd0fb",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "resolucion": "Full Hd"
            }
        ]
    },
    {
        "title": "Monitor Hkc Antteq 23,8 Full Hd F238m 24 Ips 75 Hz Hdmi Color Negro",
        "price": 124.499,
        "stock": 12,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni4.jpg?alt=media&token=9a95eced-d7ad-4066-85aa-608f99a69f00",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "resolucion": "Full Hd"
            }
        ]
    },
    {
        "title": "Monitor Hkc Antteq 21,45'' Full Hd F2145m 22 Va 75 Hz Hdmi Color Negro",
        "price": 115.559,
        "stock": 20,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni5.jpg?alt=media&token=7e9c4c93-e157-40f1-8ba5-3f4e16011104",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "resolucion": "Full Hd"
            }
        ]
    },
    {
        "title": "Monitor Samsung Led 27'' Ips Full Hd 75 Hz 5ms Amd Freesync Color Negro",
        "price": 299.999,
        "stock": 23,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni6.jpg?alt=media&token=b5cf103c-ca9d-4682-ad55-c06331bdf4d4",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "resolucion": "Full Hd"
            }
        ]
    },
    {
        "title": "Monitor Led 4k 27 Pulgadas LG 27ul500-w Uhd Hdr Hdmi Ips Color Blanco",
        "price": 541.000,
        "stock": 9,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni7.jpg?alt=media&token=9e279ef2-8918-4a23-a380-d39b8b8d4c00",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "resolucion": "Full Hd"
            }
        ]
    },
    {
        "title": "Monitor Asus 27 Va27ehey Hdmi Ips 75hz 1920x1080 Color Negro",
        "price": 226.999,
        "stock": 2,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni8.jpg?alt=media&token=f4ead230-de7c-4304-95e6-e0d451a699f2",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "resolucion": "Full Hd"
            }
        ]
    },
    {
        "title": "Monitor Gamer Aoc 24 Fhd G2490vx 144hz 1ms Amd Freesync Color Negro",
        "price": 289.919,
        "stock": 2,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni9.jpg?alt=media&token=0ceb448d-d57e-43aa-917f-feee364d3f92",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "resolucion": "Full Hd"
            }
        ]
    },
    {
        "title": "Monitor Gamer 23.8 Aoc G2490vx 144hz Free Sync Display Port Color Negro/Rojo",
        "price": 529.999,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni11.jpg?alt=media&token=98f7c15e-61ef-4e68-b937-a5ba24bd3b46",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "resolucion": "Full Hd"
            }
        ]
    },
    {
        "title": "Monitor gamer LG UltraGear 27GP850 LCD 27 pulgadas negro 100V/240V",
        "price": 839.000,
        "stock": 8,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni12.jpg?alt=media&token=c5aca338-6266-43f1-bf06-d38a490de93e",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "resolucion": "Full Hd"
            }
        ]
    },
    {
        "title": "Monitor gamer curvo Samsung Odyssey G5 S32AG55 LCD 32 pulgadas negro 100V/240V",
        "price": 692.129,
        "stock": 19,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni13.jpg?alt=media&token=53b2a190-7e56-41ea-9446-3df9cbc3118e",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "resolucion": "Full Hd"
            }
        ]
    },
    {
        "title": "Monitor gamer LG UltraGear 24GN60R LCD 23.8 pulgada negro 100V/240V",
        "price": 531.989,
        "stock": 2,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni14.jpg?alt=media&token=53e1920d-3c09-49ad-85cc-3ac84ec1919a",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "resolucion": "Full Hd"
            }
        ]
    },
    {
        "title": "Monitor Gaming Samsung Ls27ag550 Odyssey G5 Curvo Negro 27 pulgada",
        "price": 566.999,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni15.jpg?alt=media&token=f582a2e3-0d3e-4d1e-8618-4c7a5d342042",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "resolucion": "Full Hd"
            }
        ]
    },
    {
        "title": "Monitor gamer Redragon Jade GM3CS27 led 27 pulgada negro 100V/240V",
        "price": 606.519,
        "stock": 24,
        "img": "https://firebasestorage.googleapis.com/v0/b/react01-4606f.appspot.com/o/moni16.jpg?alt=media&token=a84651af-2c57-4112-bf69-529d49c19a12",
        "category": "Monitor",
        "description": "Full Hd para una experiencia increible",
        "valoracion": "la calidad de video es increible, muy recomendado le doy sus 5 estrellas!!",
        "detalle": [
            {
                "resolucion": "Full Hd"
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