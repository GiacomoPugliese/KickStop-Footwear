import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  
  sneakerDetails = [
    {
    id: 1,
    sneakerName: "Air Jordan 1 Retro High OG",
    sneakerDetails: "Leather upper with iconic Jordan design and a redn and black color way.",
    sneakerPrice: 170,
    sneakerImg: "https://www.kicksonfire.com/wp-content/uploads/2018/02/Air-Jordan-1-Retro-High-OG-Bred-Toe-1-1.jpg?x57841"
    },
    {
    id: 2,
    sneakerName: "Adidas Yeezy Boost 350 V2",
    sneakerDetails: "Primeknit upper with Boost cushioning for ultimate comfort.",
    sneakerPrice: 220,
    sneakerImg: "https://cdn.or-not.com/product/5/15379-200728-0113_5.jpg"
    },
    {
    id: 3,
    sneakerName: "Nike Air Force 1 Low",
    sneakerDetails: "Classic design with leather upper and Nike Air cushioning.",
    sneakerPrice: 90,
    sneakerImg: "https://th.bing.com/th/id/OIP.wPRZHaOHe30BMYiUalB8QwHaEn?pid=ImgDet&rs=1"
    },
    {
    id: 4,
    sneakerName: "Converse Chuck Taylor All Star High",
    sneakerDetails: "Canvas upper with a timeless, high-top design and a white color way.",
    sneakerPrice: 60,
    sneakerImg: "https://cdnd.lystit.com/photos/zappos/851c0c5f/converse-White-Leather-Chuck-Taylorr-All-Starr-Leather-Hi-white-Monochrome-Classic-Shoes.jpeg"
    },
    {
    id: 5,
    sneakerName: "Vans Old Skool",
    sneakerDetails: "Suede and canvas upper with signature Vans side stripe.",
    sneakerPrice: 60,
    sneakerImg: "https://th.bing.com/th/id/R.883b56b732815bacdf762f71bcd59f5d?rik=0MFpXdj0qJ9HNg&riu=http%3a%2f%2fwww.zappos.com%2fimages%2fz%2f6%2f4%2f9%2f6496-p-4x.jpg&ehk=D94P%2fTFW8yNWBctRyglOEq8GUgfuZ5Nf4jty2iRpOFY%3d&risl=&pid=ImgRaw&r=0"
    },
    {
    id: 6,
    sneakerName: "Adidas Ultraboost 21",
    sneakerDetails: "Primeblue upper with responsive Boost cushioning for maximum comfort.",
    sneakerPrice: 180,
    sneakerImg: "https://s3-eu-west-2.amazonaws.com/pauseonline/wp-content/uploads/2017/03/17-01-2017_adidas_ultraboost30_coreblue_mysteryblue_ba8844_gj_1.jpg"
    },
    {
      id: 7,
      sneakerName: "Puma RS-X",
      sneakerDetails: "Mesh and textile upper with a chunky midsole for retro vibes.",
      sneakerPrice: 110,
      sneakerImg: "https://cdna.lystit.com/photos/puma/7301c702/puma-Whisper-White-Red-Blast-Rs-x-Reinvention-Mens-Sneakers.jpeg"
    },
    {
      id: 8,
      sneakerName: "New Balance 990v5",
      sneakerDetails: "Suede and mesh upper with ENCAP midsole technology for support and durability.",
      sneakerPrice: 175,
      sneakerImg: "https://cdna.lystit.com/photos/zappos/41f36d2b/new-balance-Black-990v5.jpeg"
    },
    {
      id: 9,
      sneakerName: "ASICS GEL-Kayano 28",
      sneakerDetails: "Engineered mesh upper with GEL cushioning for premium comfort and stability.",
      sneakerPrice: 160,
      sneakerImg: "https://jarroldcdn.azureedge.net/products-temp/asics/gel-kayano-28-mens-2%7Bw=1000,h=1000%7D.jpg"
    },
    {
      id: 10,
      sneakerName: "Nike Air Max 90",
      sneakerDetails: "Leather, synthetic, and mesh upper with visible Max Air cushioning for a classic look.",
      sneakerPrice: 120,
      sneakerImg: "https://th.bing.com/th/id/OIP.3kBmXOqLFSZxnkM-TNDyvAHaHa?pid=ImgDet&w=800&h=800&rs=1"
    },
    {
      id: 11,
      sneakerName: "Reebok Classic Leather",
      sneakerDetails: "Soft garment leather upper with a classic silhouette for everyday style.",
      sneakerPrice: 75,
      sneakerImg: "https://www.freshnessmag.com/.image/t_share/MTM3OTI3MjA0ODI1NDA5Mzg3/reebok-classic-leather-suede---summer-2013-pack---1.jpg"
    },
    {
      id: 12,
      sneakerName: "Under Armour HOVR Phantom 2",
      sneakerDetails: "UA HOVR technology with a breathable upper for ultimate comfort and energy return.",
      sneakerPrice: 130,
      sneakerImg: "https://image.keller-sports.com/storage/products/F3/86/F386049C7A3626DB9FC5300BEBA2A64030d0.1000x1000.jpeg"
    }
    
    ]


  

}
