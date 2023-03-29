<!-- TABLE OF CONTENTS -->

## İçerik
- [Demo Sayfası](#demo-sayfası)
- [Kurulum](#kurulum)
- [Kullanılan Paketler](#kullanılan-paketler)
- [Kullanımı](#kullanımı)

## Demo Sayfası
- [Demo](https://enchanting-gumption-f6f514.netlify.app/)
## Kurulum

1. Github reposunu klonlayın

```sh
git clone https://github.com/GizemCoban/AngularNotesApp.git
```

2. dev branchine geçin

```sh
git checkout dev
```

3. NPM paketlerini kurun

```sh
npm install
```

4. JSON server çalıştırma

```sh
npm run json-run
```

5. Projeyi (Angular) çalıştırma

```sh
ng serve
```

## Kullanılan Paketler

Uygulama geliştirme sırasında aşağıdaki paketlerden yararlanılmıştır.

- [Angular](https://angular.io/)
- [Rx.js](https://rxjs.dev/)
- [Ngrx ](https://ngrx.io/)
- [Json Server](https://www.npmjs.com/package/json-server)
- [Bootsrapt](https://getbootstrap.com/)
- [ngx-toastr](https://www.npmjs.com/package/ngx-toastr)

<!-- USAGE EXAMPLES -->

## Kullanımı

Proje de <b>fake REST API Backend</b> kullanılmıştır (Json Server). Json Server’I çalıştırabilmek için <b>npm run json-run</b> komutunu terminalinizde çalıştırabilirsiniz. <br/>

[![Product Name Screen Shot][product-screenshot-1]](https://github.com/GizemCoban/AngularNotesApp/blob/dev/screenshots/1.png)

Login ekranında username ve password olarak iki tane alan bulunmaktadır. Username <b>admin</b> ve password <b>12345</b> olarak ayarlanmıştır. Yanlış kullanıcı adı veya şifre girildiğin de toast ile uyarı mesajı görüntülenmektedir. <br/> <br/>

[![Product Name Screen Shot][product-screenshot-4]](https://github.com/GizemCoban/AngularNotesApp/blob/dev/screenshots/4.png)

Login olduktan sonra notların listelendiği /home sayfasına yönlendirileceksiniz. Burada header da <b>“Add Note” </b> adlı butona tıkladığınızda Not Bilgisi, Not Öncelik Bilgisi ve Not için resim ekleyebiliyorsunuz. Not Bilgisi <b>zorunlu alan </b> olarak ayarlanmışır ve girilmediğinde uyarı mesajı gösterilmektedir. Priority yani not öncelik alanı <b> 0-5 arasında number</b> bir değerdir. Eğer 5 den büyük 0 dan küçük bir sayı girildiğinde uyarı mesajı gösterilmiştir. Resim alanı isteğe bağlı yapılmıştır. Not ekleme yapılınca <b>“Note added”</b> şeklinde bir toastr mesaj çıkmaktadır. <br/><br/>

[![Product Name Screen Shot][product-screenshot-2]](https://github.com/GizemCoban/AngularNotesApp/blob/dev/screenshots/2.png)

Header’ın altında bulunan dropdown kullanarak notları öncelik bilgisine göre küçükten büyüğe ya da büyükten küçüğe sıralayabilmekteyiz ya da select all seçeneği ile eski halinde getirilmektedir. Header altındaki input’a not bilgisine göre filtreleme işlemi yapabilirsiniz. Notları Listeleme sayfasında (/home) notlar listelenmektedir. Sayfa da en fazla 10 not gösterilmektedir. View more butonuna tıkladıkça 10 tane daha not gelmektedir ya da scrolla aşağı inince de 10 tane not listenin başına eklenmektedir. Notların üzerine gelindiğinde Edit ve Delete butonları gözükmektedir. <b>“Edit Note” </b> butonuna tıklayarak notları güncelleyebilirsiniz (inputların özellikleri ekleme sayfasındaki ile aynıdır). Update ettiğimizde toastr mesajı gösterilmektedir ve anasayfaya yönlendirilmektedir. <br/> <br/>

[![Product Name Screen Shot][product-screenshot-3]](https://github.com/GizemCoban/AngularNotesApp/blob/dev/screenshots/3.png)

<b>“Delete”</b> butonuna tıklayınca silme işlemini onaylamak için bir modal açılmaktadır. Silmeyi onayladığımızda seçilen not bilgisi silinmektedir ve silindiğine dair toastr mesajı gösterilmektedir. <br/> <br/>

Header’daki <b>“Logout” </b> butonuna tıklanınca çıkış yapılmaktadır. Çıkış yapan kullanıcı url üzerinden /home, /add gibi sayfalara gitmek istediğinde login sayfasına yönlendirilmektedir. Yanlış url yazdığında 404 sayfasına yönlendirme yapılmaktadır.

<!-- MARKDOWN LINKS & IMAGES -->

[product-screenshot-1]: https://github.com/GizemCoban/AngularNotesApp/blob/dev/screenshots/1.PNG?raw=true
[product-screenshot-4]: https://github.com/GizemCoban/AngularNotesApp/blob/dev/screenshots/4.PNG?raw=true
[product-screenshot-2]: https://github.com/GizemCoban/AngularNotesApp/blob/dev/screenshots/2.PNG?raw=true
[product-screenshot-3]: https://github.com/GizemCoban/AngularNotesApp/blob/dev/screenshots/3.PNG?raw=true
