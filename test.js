
Egzamin sprawdzający w ramach kursu Web Developer

edit by nexxtGen: Jest to egz z pierwszych 9 modułów kursu web developer (6msc nie 9miesięcznego) przeprowadzany w połowie kursu.

1. HTML/CSS
1.1. Opisz własnymi słowami czym jest HTML, do czego służy oraz jaką rewolucję przyniosła jego piąta wersja.
Jest hipertekstowym językiem znaczników przy pomocy którego Tworzona jest struktura/szkielet strony web. Główną ideą sieci były linki, stąd w nazwie Hyper tekst. Jest to język opisowy i przy jego pomocy a właściwie znacznikow okresla się typy treści w nim zawarte. Naprzykład nagłówki, grafiki, tekst, akapity. Piąta wersja przyniosła kilka zmian. Z tych które pamiętam to nowe znaczniki do określenia struktury strony. Te które są dla mnie najbardziej istotne to: section, header, nav, footer. W jednym projekcie użyłem też znacznika video, którego nie było w poprzednich ver html. Są jeszcze main czy aside i  inne mniej waże (dla mnie). Jest też inny zapis jeśli chodzi o sam doctype, krótszy od poprzedniego. Doszedł jeszcze Canvas.
1.2. Co to znaczy, że kod HTML jest "semantyczny"?
Ze ma zdefiniowane przeznaczenie znaczników. Czyli <header> do nagłówków itd. Pisanie wg semantyki oznacza prawidłowe ich używanie. 
1.3. Jaka jest różnica pomiędzy <strong> i <b> znaczeniowo. Rozwiń odpowiedź :)
Strong ma za zadanie wyróżnić tekst (fragment tekstu) na stronie i jest semantyczny (choć ręki nie dam sobie uciać) a <b> to ogólnie pogrubienie tekstu.
1.4. Do czego służą atrybuty tagów. Wymień 3 i opisz ich zastosowanie.
Do przypisywania własciwosci. Choc nie wszystkie tagi mogą posiadać dana właściwosć. 1. src="" -odnosi się do lokalizacji pliku/linku czy id 1. id="" -określa identyfikator znacznika. Jest on unikatowy/niepowtarzalny.  3. class="" - przypisuje klasę do znacznika. Jest to nazwa/ ciag liter. Moze on posiadać kilka klas podanych w cudzysłowiu oddzielonych space. Nazwy klas mogą siepowtarzać miedzy znacznikami.
1.5. Opisz własnymi słowami czym jest CSS, do czego służy oraz co się w nim zmieniło od jego trzeciej wersji.
Kaskadowy Arkusz stylów, służy do definiowania/opisywania wyglądu znaczników, ich układu czy prostych akcji usera jak np hover czy gdy na element kliknął użytkownik.  Od trzeciej wersji wprowadzono podział na moduły, nowe style, właściwości. 
1.6. Co to znaczy, że arkusz styli jest "kaskadowy"?
Kod jest interpretowany wg kolejności od góry do dołu i moze zostać nadpisany.
1.7. Napisz propozycje selektora dla aktywnego elementu <input>, będącego rodzeństwem <input class="mail">, wiedząc, że oba elementy są bezpośrednio zagnieżdżone w <form>, który jest drugim formularzem (z kilku) wewnątrz Bootstrapowego kontenera.
.container form:p:nth-child(2) .mail + input:active {
background-color: white;
}
1.8. W <body> mamy dwa elementy: <nav> oraz <main>. Element <nav> ma wysokość 50px oraz szerokość 100%. Napisz regułę CSS dla main, która sprawi, że ten element będzie zajmował całą pozostałą dostępną przestrzeń okna przeglądarki, niezależnie od tego, jakie będą wymiary jej okna i tak, by w żadnym przypadku nie pokazał się pasek przewijania.
main {
     width: 100%;
     height: calc (100vh - 50px);
}
1.9. Czym jest box-model i jak zabezpieczyć projekt przed niespodziewanym sytuacjami z nim związanymi?
Jest to model pudełkowy danych el na stronie. Czyli posiada wys/szer oraz opcjonalnie pading i margines. 2. Należy zastosować własciwosc dla kontenera/obiektu  box-sizing: border-box;
1.10. Czym jest clearfix i po co go używamy?
Taki trik za pomocą którego czyściimy/usuwamy działanie floata w danym miejscu kodu html.
1.11. Czym są i do czego służą pozycje w CSS. Dodatkowo, wymień i opisz te, które znasz.
Własciwosci które opisują jak ma się zachowywać tany element względem strony czy innego elementu jeśli chodzi o jego połozenie/pozycję. Te które znam i używam to relative, fixed absolute. 
1.12. Napisz czym jest grid i jakie są 2 najpopularniejsze metody budowania go (technologie CSS).
Układ/siatka strony który definiuje połozenie i zachowanie się w nim elementów. najpopularniejszy to 12 kolumnowy i wystarcza w większosci projektów. Posiada on takie elementy jak row, container i col. Najpopularniejsze to standardowy grid gdzie są opisane szerokości danych kolumn w %  i znajdują się w obiekcie z kl row kt ma floata. Row jest w kontenerze. Drugi to juz nowocześniejszy i wygodniejszy flexbox.
1.13. Napisz co to znaczy, że strona jest responsywna oraz w jaki sposób możemy sprawić, by strona internetowa była responsywna.
To znaczy, że jej układ odpowiednio dostosowywuje siedo szerokości okna przeglądarki czy użądzenia na kt jest otwierana. Mozemy to zrobic poprzez media queries, gdzie są progi/przedziały rozdzielczosci w których pewne własciwosci kodu html inaczej się zachowują. Dla każdego int nas przedziału tworzymy osobny grid z rózniacymi sienazwami klas wobec ich odpowiedników i innym mediaqueries.
1.14. Napisz czym jest Bootstrap, jakie są jego wady oraz zalety. Do jakiego rodzaju projektów polecasz używanie go?
Jest frameworkiem do tworzenia stron w html/css jak i równierz zawiera got el w JSie. To taki gotowy zbiór struktury, sasad kt powinien kierowac się programista. Z wad to: narzuca nam juz gotowy sposób myslenia przy tw str int. Strony stw za pomocą bootstrapa wyglądaja podobnie. Pewnie też wpływa na wydajność. Z zalet- wiele gotowych el, przyspiesza pisanie str. Polecam go do takich pro jak np systemy csm, gdzie jest najw funkcjonalnosc a juz gotowe el jak np button danger pozwalają szybko tworzyć wyglad/UI strony. Nie polecam do proj spersonalizowanych.
Strona 2 z 5

Egzamin sprawdzający w ramach kursu Web Developer
2. Narzędzia
2.1. Preprocesory CSS. Opisz czym są oraz jak działają.
Są narzędziem kt daje nowe mozliwosci przy tw kodu CSS. Ich zadaniem jest przyspieszenie tw kodu jak i większa czytelność. działanie- Tworzymy kod w danym prepro wg jego składni czy możliwosci jakie daje a następnie plik na kt pracujemy jest kompilowany na plik css.
2.2. SASS. Zadeklaruj zmienną oraz przedstaw przykład jej użycia w kodzie.
$primary-site-color: #333;
.nav-ui {
background: $primary-site-color;
}
2.3. Napisz czym jest Git i jakie są zalety używania go w projekcie.
System kontroli ver. Narzedzie dla developerów do pracy nad danym projektem. Pozwala na zachowywanie ver swojej app w postaci commitów, na zdalnie przechowywanie kodu czy na pracę kilku osób (zdalnie) przy proj za pomocą branchy i pull requestów. 
2.4. Napisz czym jest repozytorium.
Na repozytorium sa przechowywanie pliki kodu i pozwala ono zdalnie zarzadzać projektem/ udostępniac go innym czy pracować w kilka osób przy projekcie.
2.5. Czym są odgałęzienia i do czego są potrzebne?
branche pozwalają nam na "odejscie" od pewnego momentu(ver) kodu i pisanie go jako oddzielną gałąź czyli nieingerującą w glówną linię ver kodu. Później można dodać zmany powstałe w tym branchu do głównego kodu. najbardziej są potrzebne do pracy zespołowej lub by wydzielić budowanie róznych funkcjonalnosci app jako osobne gałezie i gdy coś będzie nie działać to po prostu nie dodawać zmian do mastera.
2.6. Napisz komendę inicjującą repozytorium w aktualnym katalogu.
Nie wiem. Wygodniej jest dla mnie stworzyć  nowe repo na githubie i później w terminalu za pomocą git clone xyz... dodać je do mojego katalogu.
2.7. Zacommituj wszystkie zmodyfikowane pliki jednym poleceniem wraz z wiadomością.
git add . && git commit -m "Change nav structure"
2.8. Dodaj jednym poleceniem zmiany we wszystkich plikach (wraz z nowo utworzonymi) do commita.
Korzystam zawsze z tej komendy w zad 2.7 Nie rozdzielam na osobne zadania.
2.9. Przełącz się na nieistniejący branch o nazwie "test".
git checkout -b test
2.10. Jak sprawić, żeby Git pomijał katalog (np. Vendor) przy wysyłaniu kodu?
Dodac scieżkę i nazwę pliku go pliku gitignore.
2.11. Wyobraź sobie, że pracujesz na złym branchu. Chcesz przejść na właściwy, ale nie chcesz stracić napisanego kodu. Co robisz?
Nie wiem, zawsze kopiowałem pliki ręcznie.
Strona 3 z 5
Nigdy nie podawaj w Formularzach Google swoich haseł.
Ten formularz został utworzony w domenie Codemy S.A.. Zgłoś nadużycie - Warunki korzystania z usługi - Dodatkowe zasady

Egzamin sprawdzający w ramach kursu Web Developer
3. JavaScript
3.1. Napisz czym jest JavaScript, do czego go używamy oraz gdzie się wykonuje.
Język programowania który za pomocą skryptów/algorytmów wykonuje pewne operacje, obliczenia czy generuje pewne działania skryptów w odpowiedzi na zachowania użytkownika. W zasadzie dziś może zostac uzyty do tworzenia kompletnych aplikacji. Od frontu po backend. Wykonuje sie domyślnie po str przeglądarki.
3.2. Napisz jak definiujemy zmienną lokalną, a jak definiujemy zmienną globalną oraz czym różnią się te zmienne od siebie.
Zmienną globalną definiujemy w pliku a lokalną np w funkcji. Globalna ma zasięg globalny czyli odnosi siedo wszystkich plikow ze soba polaczonych i może byc modyfikowana w całym programie a lokalna w danej funkcji i ma tam swoj zasięg.  Mozemy zwrocic wartosc zmiennej lok za pomocą return.
3.3. Zadeklaruj 5 zmiennych, każdą o innym typie, którym przypiszesz poniższe wartości: [1,2,3], "Hello", Null, 7, {firstName:"Jan", lastName:"Kowalski"}. Nazwy zmiennych powinny określać typy danych, które przechowują.
var string  = "Hello";
var object = {firstName:"Jan", lastName:"Kowalski"};
var number =  7;
var array = [1,2,3];
var object = null;
3.4. Co to jest inkrementacja? Podaj przykład użycia wraz z kodem.
jest to zwiększanie o jeden przy kazdym przejsciu pętli. 
for (i = 0; i <5; i++) {
   button.[i].addEventListener('click', function);
}
3.5. Czym są operatory porównania, do czego ich używamy? Wymień te które znasz.
Są operatorami które por wartosci między sobą. Uzywamy ich do por dwoch wartosci miedzy sobą. Znam: mniejszy niż < , mniejszy lub rowny <=,  wiekszy niz >, wiekszy lub rowny>=, != rozny,  rowny ==,  identyczny === .
3.6. Czym są operatory logiczne, do czego ich używamy? Wymień 3.
Są operatorami do wykonywania konkretnych działać arytmetycznych. Używamy ich do dodawania, odejmowania, mnozenia, czy łączenia tekstu z kodem itp. 3 z nich- dodawanie: +. mnozenie *, modulo (reszta z dzielenia) %.
3.7. Czym jest modulo? Opisz przykład wykorzystania.
Modulo to reszta z dzielenia. Wyk- chcemy otrz resztę z dzielenia 25 przez 10.- var modulo = 25 % 10; otrzymamy 5.
3.8. Opisz znane ci rodzaje instrukcji warunkowych, które znasz oraz napisz w jakich sytuacjach z nich skorzystasz i dlaczego.
If, if else. Skorzystam w nich tam, gdzie mój strypt musi podjąć jakąś decyzję na bazie otrzymanych informacji. jaki kod ma sie wykonać gdy coś jest a, jaki jak jest b a jaki w pozostałych przypadkach. Dlatego
3.9. Wymień i opisz rodzaje pętli, które znasz oraz przypadki ich użycia.
for, for in, for each. Użyję ich tam, gdzie chcę by kod wykonał sie okreslona ilość razy. Lub np gdy będę chiał przetworzyc dany obiekt czy tablicę. Np wypisać wszystkie jej wartosci itp.
Strona 4 z 5
Nigdy nie podawaj w Formularzach Google swoich haseł.
Ten formularz został utworzony w domenie Codemy S.A.. Zgłoś nadużycie - Warunki korzystania z usługi - Dodatkowe zasady
Formularze Google
