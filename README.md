# Project Link
### https://pazarama-react-final-project-ulas.netlify.app/

# Installation
``` npm install ```

#### ``` .env ``` file configs


``` 
REACT_APP_FIREBASE_API_KEY=AIzaSyDNO3vhPx_3CoeNL1CmhFpSHSQFOtBEKzw
REACT_APP_FIREBASE_AUTH_DOMAIN=final-project-ulas-dev.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=final-project-ulas-dev
REACT_APP_FIREBASE_STORAGE_BUCKET=final-project-ulas-dev.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=45399929716
REACT_APP_FIREBASE_APP_ID=1:45399929716:web:51dfa5a597db1bc466b221
```

# Technologies

- React

- Redux

- Firebase

- Formik

- Yup

- React Router Dom V6

- Eslint

# Screenshots
![Homepage](./public/Homepage.png "Homepage")
![AppSuccessfu](./public/Basvuru-basarili.png "AppSuccessful")
![AdminAppList](./public/admin-basvuru-listesi.png "AdminAppList")
![mobile-menu](./public/mobile-menu.png "mobile-menu")
![basvuru-formu](./public/basvuru-formu.png "basvuru-formu")
![ApplicationQuery](./public/basvuru-sorgula.png "ApplicationQuery")
![basvuru-basarili-responsive](./public/basvuru-basarili-responsive.png "basvuru-basarili-responsive")


## Bitirme projesi
### Başvuru / ticket yönetim sistemi


#### Genel Açıklama

Uygulamamız herkese açık bir başvuru formunun son kullanıcı tarafından doldurulması ile başlıyor. 
Formu dolduran kullanıcıya başvurusunu takip edebilecegi bir kod veriliyor. Kullanıcı başvuru durumu sayfasından bu kod ile başvurusunun çözülüp çözülemedigini kontrol edebiliyor. 

Kullanıcı adı ve şifre ile girilebilen bir ekrandan da yetkili kullanıcılar gelen başvuruları görüntüleyebiliyor cevaplanmamış başvurulara cevap yazıp durumunu çözüldü / iptal edildi / bekliyor vb gibi güncelleyebiliyor. Gerekirse eski kayıtlara ulaşabiliyor.


#### Detaylı Açıklama


##### Routes / Paths

- /basvuru-olustur (default)
  - Public endpoint.
  - Başvuru formunu herhangi bir kullanıcının doldurmasına imkan verir.
  - Başvuru formunda [Ad, Soyad, Yaş, TC, Başvuru Nedeni, Adres Bilgisi, Fotograflar/Ekler, Gonder] butonu yer alır. 

- /basvuru-basarili (Basvuru formu doldurulduktan sonra gelen sayfa)
  - Ekranda bir teşekkür mesajı yer alır ve kullanıcıya başvuru detayları ile birlikte başvuru kodu verilir.

- /basvuru-sorgula
  - Ekranda başvuru kodu girilebilen bir input ve sorgula butonu vardır.

- /basvuru/{basvuruNo}
  - Ekranda başvuru varsa bilgileri, son durumu ve verilen cevap(lar) yer alır.
  - Başvuru numarası hatalıysa 404(bulunamadı) mesajı çıkar.

- /admin
  - Ekranda kullanıcı giriş formu vardır. (Rahat test edebilmemiz için u:kodluyoruz, p:bootcamp109 bilgileri ile giriş yapabilmeliyim.)

- /admin/basvuru-listesi
  - Başarıli giriş sonrası bekleyen (çözülmemiş/cevaplanmamış) başvuruların listesi yer alır ve basit bilgiler sunar. (Başvuru yapan, tarih)
  - Başvuru listesinde her elemenda başvuruyu görüntüle butonu vardır.

- /admin/basvuru/{basvuruNo}
  - Başvurunun durumu güncellenebilir ve başvuruya cevap yazılabilir.
  - Burada yazılan cevap son kullanıci tarafından basvuru/{basvuruNo} kısmından görüntülenebilmelidir.
  


##### Gereklilikler

- React hooks
- Router (react-router/ reach router / etc)
- Redux (Context API'da kullanabilirsiniz)
- Form management library (react-hook-form / formik / etc)
- UI library kullanmamalisiniz. 
- Validation library (yup, joi, etc)
- Tests (Unit test zorunlu)
- Uygulamanız kesinlikle bir servise deploy edilmiş olacak ve public link readme içinde yer alacak (netlify, vercel gibi)
- Open source
- Eslint
- Folder structure
- github commitlerinin gozukmesi gerekmekte. Lutfen bu konuya hassasiyet gosterelim,
 tum sayfalarin tek commitde bulunan repolardan uzak duralim. Puanlara buna gore yapilacaktir.



##### Dikkat edelim
- Tüm formlarda gerekli validasyonlar olsun.
- Back-end yazmak zorunda degilsiniz, back-end olarak firebase ya da mock bir api kullanabilirsiniz.
- Elinizden gelen en iyi şekilde seperation of concerns'e dikkat ederek yazın.
- Admin paneline u:kodluyoruz, p:bootcamp109 bilgileri ile giriş yapabilmeliyim.
- Mümkünse admin paneline bir menü ekleyelim (başvuru listesi, çıkıs gibi işlemleri kapsasın)

##### Bonus (Zorunlu degil, deneysel ozellikler)
- Typescript 
- Service worker ile offline render destegi
- Mobil uyumlulu guzel bir tasarim
- Kullanilabilir UX
