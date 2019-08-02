export class Gouvernorat {
  static gov  = [
    {name: 'Gouvernorat', villes: ['Ville']},
    {name: 'Ariana', villes: [ 'Ettadhamen−Mnihla' , 'La Soukra ' , 'Ariana ' ,  'Raoued ' , 'Kalaat   e l −Andalous ' ,   ' S i d i    Thabet ']} ,
    {name: 'Beja', villes: ['Beja' ,   'Medjez   e l −Bab' ,   ' Testour ' , ' Teboursouk ' , ' El Maagoula ' , ' Nefza ' , 'Amdoun' , ' Goubellat ' ,  ' Thibar ']} ,
    {name: 'Ben Arous' , villes: ['Ezzahra' ,  'Hammam  Chott ' ,  'Mornag ' , ' Megrine ' , ' Khalidia ' , 'Bou Mhel  e l −Bassatine ' ,  'Hammam  Li n f ' , ' Rades ' , 'Ben Arous ' , ' El Mourouj ' , 'Mohamedia−Fouchana ']} ,
    {name: 'Bizerte' , villes : ['B i z e r te' , ' Menzel  Bourguiba ' ,  ' Mateur ' ,  'Ras  J e b e l ' , ' Menzel  Jemil ' , ' Tinja ' , ' Menzel Abderrahmane ' , ' El Alia ' , ' Metline ' , ' Sejnane ' , 'Ghar El Melh ' , ' Aousja ' , ' Ghezala ' , ' Joumine ' , ' Utique ' , ' Raf Raf ']} ,
    {name: 'Gabes' , villes : ['Gabes' , ' El Hamma' , 'Ghannouch ' ,  ' Chenini Nahal ' ,  ' Mareth ' ,  ' Metouia ' , ' Oudhref ' , ' Nouvelle Matmata ' , ' Zarat ' , 'Matmata ' , ' Menzel El Habib ']},
    {name: 'Gafsa' , villes: ['Gafsa' , ' Metlaoui ' , ' El Ksar ' , ' Redeyef ' , ' Moulares ' , ' El Guettar ' , '	Mdhilla ' , ' Sened ' , ' Be l k h i r ' ,  ' S i d i  Aich ']} ,
    {name: 'Jendouba ', villes : ['Jendouba' ,  'Bou  Salem ' , ' Tabarka ', 'Ghardimaou ' , ' Ain Draham' , ' Fernana ' , 'Oued Meliz ' , '	Beni MTir ']},
    {name: 'Kairouan ', villes: [ 'Kairouan' ,  ' Hajeb  El  Ayoun' ,   ' Oueslatia ' ,   ' Haffouz ' , ' Sbikha ' ,    'Bou   Hajla ' ,    ' Nasrallah ' ,    ' Menzel   Mehiri ' ,    ' El   Alaa ' ,   ' Chebika ' , ' Ain Djeloula ' , ' Echrarda ']},
    {name: 'Kasserine ', villes: [ 'Kasserine ' , ' Feriana ' , '	Sbeitla ' , ' Thala ' , ' Foussana ' ,  ' Thelepte ' ,  ' Sbiba ' ,  ' Majel  Bel  Abbes ' , ' J e d e l i e n n e ' , ' Haidra ' , ' El Ayoun' , ' Ezzouhour ' , ' Hassi El Ferid ']},
    {name: 'Douz ', villes : ['Douz'  , 'Souk Lahad ' , ' El Golaa ' , 'Jemna ' , ' Faouar ']} ,
    {name: 'Le Kef' , villes : [ 'Le Kef' ,  ' Tajerouine ' , ' Dahmani ' , ' Sers ' ,  ' J e r i s s a ' , ' Kalaat Senan ' , ' S a k i e t S i d i Youssef ' , ' El Ksour ' , ' Nebeur ' , 'Kalaat Khasba ' , ' Touiref ' , ' Menzel Salem ']} ,
    {name: 'Mahdia' , villes : ['Mahdia' , ' Ksour Essef ' , 'Chebba ' ,  ' El  Jem' ,   ' Rejiche ' ,   ' S i d i   Alouane ' ,   ' Kerker ' ,   ' El  Bradaa ' , ' Mellouleche ' , ' Chorbane ' , ' E s s o u a s s i ' , ' Ouled Chamekh' , ' Zelba ' , '	Tlelsa' , ' Sidi Zid ' , 'Hkaima ' , ' Hebira ' , 'Bou Merdes ']} ,
    {name: 'Mannouba', villes : [' Douar Hicher ' , 'Oued   E l  l  i  l  '  ,    'La   Manouba'  ,    '  Djedeida  '  ,    '  Tebourba  '  ,    'Den    Den'  , ' Mornaguia ' , ' Borj El Amri ' , ' El Batan ']},
    {name: 'Medenine' , villes: [' Djerba − Houmt Souk ' , '	Z a r z i s ' , ' Medenine ' , 'Ben Gardane ' , ' Djerba − Midoun ' , ' Djerba − Ajim ' , '	S i d i Makhlouf ' , ' Beni Khedache ']},
    {name: 'Monastir', villes: ['Monastir' , 'Moknine ' , 'Jemmal ' , ' Ksar H e l l a l ' ,  ' Teboulba ' ,  ' Ouerdanine ' ,  ' S a h l i n e  Mootmar ' ,  ' Bekalta ' , ' Zeramdine ' ,   'Bembla ' ,   'Bennane−Bodheur ' ,   ' Ksibet   e l −Mediouni ' ,   ' Sayada ' , ' Menzel Hayet ' ,  ' Menzel  Ennour ' ,  ' Khniss ' ,  ' Beni  Hassen ' , ' Menzel  Kamel ' , ' S i d i  Ameur' ,  ' Amiret  H a j j a j ' ,  'Touza ' ,  ' Bouhjar ' ,  ' Zaouiet Kontoch ' , ' Amiret Touazra ' , 'Lamta ' , ' Amiret El Fhoul ' , '	El Ghnada ' , ' El Masdour ' , ' S i d i Bennour ' , ' Cherahil ' , ' Menzel F e r s i ']} ,
    {name : 'Nabeul' , villes : ['Hammamet' , ' Nabeul ' , ' Ke l i b i a ' , 'Dar Chaabane ' , ' Menzel Temime' , 'Korba ' , ' Soliman ' , ' Grombalia ' , ' Takelsa ' , ' Beni Khiar ' , ' Menzel Bouzelfa ' , ' Beni Khalled ' , 'Bou Argoub ' , ' El  Haouaria ' ,  ' Tazarka ' , 'Hammam  Ghezeze ' , ' El Maamoura' , ' Zaouiet D j e d i d i ' , 'Somaa' , ' Menzel Horr ' , 'Azmour' , 'Dar  Allouch ' ,  ' El  Mida ' ,  ' Korbous ']} ,
    {name: 'Sfax' , villes: ['Sfax' ,  ' S a k i e t  Ez z i t ' ,  ' El  Ain ' , ' S a k i e t  Eddaier ' ,  'Gremda' ,  'Thyna ' ,  ' Chihia ' ,  ' Mahres ' ,  ' Kerkennah ' , ' Skhira ' ,  ' Agareb ' ,  ' El  Hencha ' ,  ' Jebiniana ' ,  ' Bir  Ali  Ben  Khalifa ' ,  ' Graiba ' ,  ' Menzel  Chaker ' ,  ' El  Amra' ,  ' Aachech ' ,  ' Ennasr ' ,  ' Hadjeb ' , ' Hazeg Ellouza ' , 'Nadhour S i d i Ali Ben Abed' , 'Ouabed Khazanet ']},
    {name : 'Sidi Bouzid' , villes: [  ' S i d i Bouzid ' , ' Meknassy ' ,  'Regueb ' ,  ' S i d i  Ali Ben Aoun' ,  'Mezzouna ' , ' Menzel  Bouzaiane ' , ' Bir  El  Hafey ' ,  ' Jilma ' ,   ' Cebbala  Ouled  Asker ' , ' Ouled Haffouz ' , ' Essaida ' , 'Souk Jedid ']} ,
    {name: 'Siliana' , villes: [ 'Siliana' , 'Makthar ' , 'Bou  Arada ' ,  ' Gaafour ' ,   ' El  Krib ' ,   ' Bargou ' ,   ' Rouhia ' ,   ' S i d i   Bou   Rouis ' , ' El Aroussa ' , ' Kesra ']} ,
    {name: 'Sousse' , villes: ['Sousse' , 'M saken ' , ' Kalaa Kebira ' , 'Akouda ' , 'Hammam    Sousse '  ,    '  Kalaa   Seghira ' ,    '  Zaouiet   Sousse '  ,    '  Ezzouhour '  ,  ' Messaadine ' ,   ' Ksibet   Thrayet ' ,  ' Enfida ' ,   ' S i d i   Bou   Ali ' ,   ' Bouficha ' ,  ' Hergla ' ,  'Kondar ' ,   ' S i d i   El  Hani ']} ,
    {name: 'Tataouine', villes: ['Tataouine' ,   ' Ghomrassen ' , ' Remada' , ' Bir  Lahmar ' ,   ' Dehiba ' ,   'Smar ']},
    {name: 'Tozeur ' , villes : ['Tozeur ' ,   ' Nefta ' , ' Degache ' , ' Tamerza ' , ' El Hamma du J e r i d ' , 'Hazoua ' ]} ,
    {name: 'Tunis', villes: [ 'Tunis' , ' S i d i Hassine ' , 'La Marsa ' , 'Le Kram' , 'Le Bardo ' , 'La Goulette ' , ' Carthage ' , ' S i d i Bou Said ']} ,
    {name: 'Zaghouan' , villes: ['ElFahs' , ' Zaghouan ' , ' Zriba ' , ' Bir Mcherga ' , ' Nadhour ' , ' Djebel Oust ' , ' Saouaf ']}];

}
