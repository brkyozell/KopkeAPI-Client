# KopkeAPI-Client
Turkish meme api

## Nasıl kullanılır?
Baya basit. Öncelikle Node.JS'nin kurulu olduğundan emin olun(dostum sadece şaka yapıyorum).

`npm i github:brkyozell/KopkeAPI-Client` yazarak projenize ekleyin.
Bu kadar!

## Örnek Kullanım

```
const KopkeAPI = require("KopkeAPI-Client");
const api = new KopkeAPI("agree");

const main = async () => {
    console.log(await api.simple())
    // Çıktıyı log'a yazdırdık. Siz artık bu veriyle istediğinizi yapabilirsiniz.
};main();
```

