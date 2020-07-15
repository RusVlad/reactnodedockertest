const properties = [
  {
    currency: "RON",
    name: "Regim hotelier Cluj Napoca Apartments",
    description:
      "We are a small business, we started in 2012 and we are trying constantly to keep up with the market. The property has 6 types of apartments, each decorated in a different way. We have superior apartments and also budget apartments, so everyone can afford it. Some of the rooms have also smart tv's and there are comfortable beds in each room. And we recently improved the mattresses so our clients can have the best sleep. It has a very convenient position, very close to the city centre and parking places are available on demand. You are welcome as our guest!",
    sold_price: 150,
    images: [
      "https://q-cf.bstatic.com/images/hotel/max1024x768/734/7347766.jpg",
      "https://q-cf.bstatic.com/images/hotel/max1024x768/734/7347665.jpg",
      "https://r-cf.bstatic.com/images/hotel/max1024x768/245/245898041.jpg"
    ],
    location: {
      type: "Point",
      coordinates: [46.773683, 23.607217],
      street: "Calea Dorobanților 69, Cluj-Napoca"
    }
  },
  {
    currency: "EUR",
    name: "Apartament de vânzare cu 2 camere și 52 mp",
    description: "PF vand ap de lux, 2 cam bloc 2019, garaj, complex Luminia Resisence",
    sold_price: "115000",
    images: [
      "https://imoradar24.blob.core.windows.net/pictures/32062944/53d3c28624be79966585864699f9e33c/pf_vand_ap_de_lux_2_cam_bloc_2019_garaj_complex_lu-737x491.jpg"
    ],
    location: {
      type: "Point",
      coordinates: [46.74408, 23.588535],
      street: "NICOLAE STEINHARDT NR. 10, Cluj-Napoca"
    }
  },
  {
    currency: "EUR",
    name: "Casă de vânzare cu 4 camere și 110 mp",
    description: "Casa in sistem duplex, finisata la cheie, situata in cartierul Europa, zona strazii Eugen Ionesco",
    sold_price: "228000",
    images: [
      "https://imoradar24.blob.core.windows.net/pictures/32374975/933209a7b3a77e611b6a5a7b508acb15/vand_duplex_110_mp_cluj_napoca_cartier_europa-737x491.jpg",
      "https://imoradar24.blob.core.windows.net/pictures/32374975/3291ac27bbd7aa9f7bfc9cd565241a8c/vand_duplex_110_mp_cluj_napoca_cartier_europa-737x491.jpg"
    ],
    location: {
      type: "Point",
      coordinates: [46.7712097, 23.6236362],
      street: "Strada Alexandru Vaida Voevod 13, Romania"
    }
  },
  {
    currency: "EUR",
    name: "Casă de vânzare cu 8 camere și 326 mp",
    description:
      "Persoana fizica vinde casa individuala, situata in zona rezidentiala de case si vile, din cartierul Sopor. Casa se afla in vecinătatea Iulius Mall 2,4 km iar pana in capătul liniei 3 sunt 1,8 km . Anul construcției 2019 . Constructia casei este din caramida, izolata cu polistiren de 15 cm, tencuiala decorativa Sto. Suprafata utila este de 325,62 mp iar terenul proprietatii are o suprafata de 863 mp. ",
    sold_price: "455000",
    images: [
      "https://imoradar24.blob.core.windows.net/pictures/32589007/914e917ee5845695d6efd2e745922282/casa_stil_mediteranean_sopor-737x491.jpg",
      "https://imoradar24.blob.core.windows.net/pictures/32589007/92c45cb7cb79e218b622bc8174bdfc72/casa_stil_mediteranean_sopor-737x491.jpg"
    ],
    location: {
      type: "Point",
      coordinates: [46.759675, 23.653031],
      street: "Colonia Sopor, Cluj-Napoca, Romania"
    }
  },
  {
    currency: "EUR",
    name: "Casă de vânzare cu 4 camere și 205 mp",
    description:
      "Va propunem o casa superba in cartierul Buna Ziua. Constructia este noua si complet finisata si mobilata. Finisaje moderne si de calitate. Suprafata utila 205 mp, teren 550 mp. Parter: living, bucatarie, baie, garaj, dressing Etaj: 3 dormitoare, 2 bai, dressing. Pod utilizabil pe toata suprafata casei. Sistemul de iluminat al casei este inteligent (luminile se pot controla vocal sau prin telefon). Gradina amenajata cu gazon si tuia. Dispune de piscina, terasa si loc pentru gratar. Zona este usor accesibila,privata si cu asfalt pana la casa.",
    sold_price: "550000",
    images: [
      "https://imoradar24.blob.core.windows.net/pictures/31725959/94f2464dba68f38f437a2d27593177ce/casa_super_finisata_piscina_zona_grand_hotel-737x491.jpg",
      "https://imoradar24.blob.core.windows.net/pictures/31725959/e92d49c0a90efeba2fbac14ce2abb9cc/casa_super_finisata_piscina_zona_grand_hotel-737x491.jpg",
      "https://imoradar24.blob.core.windows.net/pictures/31725959/85ed1a240993a7f957779986d01088e7/casa_super_finisata_piscina_zona_grand_hotel-737x491.jpg",
      "https://imoradar24.blob.core.windows.net/pictures/31725959/fa04c5580778a7a8f10179b8f95dc7e8/casa_super_finisata_piscina_zona_grand_hotel-737x491.jpg"
    ],
    location: {
      type: "Point",
      coordinates: [46.7514191, 23.6110306],
      street: "Strada Arțarului 32, Cluj-Napoca 400000, Romania"
    }
  },
  {
    currency: "EUR",
    name: "Casă de vânzare cu 5 camere și 180 mp",
    description:
      "Rower Estate va propune spre vanzare Casa tip Duplex cu un regim de inaltime P+2 Etaje ,avand suprafata utila de 180 mp + 75 mp de terase. Terenul aferent fiecarei unitati este 316 mp + 60mp cota parte din drumul de acces.Casa este construita in anul 2020 si este compartimentata astfel : PARTER: 1 living,1 bucatarie open space cu loc de luat masa,1 hol intrare,1 vestibul, 1baie,1 terasa. ETAJ 1: 3 dormitoare,2 bai,1 dressing,1 hol casa scarii,2 terase. Etaj 2:-1 Camera de Hobby,1 baie,1 hol,2 terase .Se vinde la stadiul de semifinisat, exterior va fi izolata cu Vata Bazaltica ,avand un coeficient termic 00.34.Geamuri Termopan tripan din lemn/aluminiu.Zidaria este facuta cu BCA Ytong.Beneficiaza de Centrala Termica pe Gaz ,Incalzire in pardoseala in toata locuinta. Se ofera spre vanzare pregatita pentru finisaje la stadiul de semifinisat, cu sapa autonivelanta, peretii gletuiti si instalatile trase la pozitie, iar gradina se ofera amenajata , imprejmuita cu gard ,fundatie de beton si grilaj metalic . Beneficiaza de 2 locuri de parcare . Priveliste superba asupra Clujului . Modalitati de plata: Cash sau Credit Imobiliar ID intern: ROW143",
    sold_price: "299900",
    images: [
      "https://imoradar24.blob.core.windows.net/pictures/32330672/4ccabc7ef5c92dc9c63f3e2a5dfdd6e1/casa_tip_duplex_180_mp_utili_situata_in_cartierul-737x491.jpg",
      "https://imoradar24.blob.core.windows.net/pictures/32330672/15250f13355160fb1fdb772809eb3e9c/casa_tip_duplex_180_mp_utili_situata_in_cartierul-737x491.jpg",
      "https://imoradar24.blob.core.windows.net/pictures/32330672/2d1b2e7412c9b048bd30512955f867bf/casa_tip_duplex_180_mp_utili_situata_in_cartierul-737x491.jpg"
    ],
    location: {
      type: "Point",
      coordinates: [46.7506905, 23.6157742],
      street: "Strada Antonio Gaudi, Cluj Napoca"
    }
  }
];

export default properties;
