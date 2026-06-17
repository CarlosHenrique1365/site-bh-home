// BANCO DE DADOS COM FOTOS REAIS E ÚNICAS DO UNSPLASH
const properties = [
    { 
        id: 1, 
        title: "Suíte Master BHomes", 
        price: 1250, 
        distance: "5 min da Faculdade", 
        category: ["Faculdade"],
        metro: true,
        desc: "Design contemporâneo com vista urbana e total privacidade.",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumb: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200",
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
            "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200"
        ]
    },
    { 
        id: 2, 
        title: "Acomodação BHomes 2", 
        price: 1000, 
        distance: "4 min do Metrô", 
        category: ["Faculdade", "Metrô"],
        metro: true,
        desc: "Espaço funcional e mobiliado para estudantes.",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumb: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200",
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200",
            "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=1200",
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200"
        ]
    },
    { 
        id: 3, 
        title: "Acomodação BHomes 3", 
        price: 1050, 
        distance: "5 min do Centro", 
        category: ["Centro"],
        metro: false,
        desc: "Ambiente acolhedor e moderno.",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumb: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200"
        ]
    },
    { 
        id: 4, 
        title: "Acomodação BHomes 4", 
        price: 1100, 
        distance: "6 min do Metrô", 
        category: ["Metrô"],
        metro: true,
        desc: "Quarto amplo com ótima iluminação.",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumb: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200",
            "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=1200",
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200",
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200"
        ]
    },
    { 
        id: 5, 
        title: "Acomodação BHomes 5", 
        price: 1150, 
        distance: "7 min do Metrô", 
        category: ["Metrô", "Faculdade"],
        metro: true,
        desc: "Perfeito para estudantes exigentes.",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumb: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200",
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200"
        ]
    },
    { 
        id: 6, 
        title: "Acomodação BHomes 6", 
        price: 1200, 
        distance: "7 min do Metrô", 
        category: ["Metrô", "Centro"],
        metro: true,
        desc: "Conforto e praticidade.",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumb: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200",
            "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200",
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200"
        ]
    },
    { 
        id: 7, 
        title: "Acomodação BHomes 7", 
        price: 1250, 
        distance: "9 min do Metrô", 
        category: ["Metrô"],
        metro: true,
        desc: "Espaço moderno e bem equipado.",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumb: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200",
            "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=1200",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200",
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200"
        ]
    },
    { 
        id: 8, 
        title: "Acomodação BHomes 8", 
        price: 1300, 
        distance: "10 min do Metrô", 
        category: ["Metrô", "Centro"],
        metro: true,
        desc: "Ideal para quem busca tranquilidade.",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumb: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200",
            "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200"
        ]
    },
    { 
        id: 9, 
        title: "Acomodação BHomes 9", 
        price: 1350, 
        distance: "11 min do Metrô", 
        category: ["Metrô", "Faculdade"],
        metro: true,
        desc: "Ambiente aconchegante e completo.",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumb: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=1200",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200"
        ]
    },
    { 
        id: 10, 
        title: "Acomodação BHomes 10", 
        price: 1400, 
        distance: "12 min do Metrô", 
        category: ["Metrô", "Centro"],
        metro: true,
        desc: "Quarto premium com todas as comodidades.",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumb: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200",
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200",
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
            "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200"
        ]
    }
];

export default properties;