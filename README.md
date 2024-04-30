Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

- Creo un ciclo che mi conti i numeri da 1 a 100
- Grazie al modulo % visualizzo se il numero corrente è divisibile per 3, 5 oppure entrambi
- Se non è divisibile per nessuno dei due allora console.log(i)
- Se è divisibile per % 3 allora console.log("Fizz")
- Se è divisibile per % 5 allora console.log("Buzz")
- Se è divisibile per entrambi allora console.log("FizzBuzz")

Bonus 1:
- Una volta che capisco quali numeri sono divisibili allora in quell'istanza manipolo il DOM grazie all' getElementById oppure querySelector, create Element e .append (che mi permette di aggiungere elementi HTML)

Bonus 2: 
- Utilizzo .classList.add per aggiungere classi specifiche che conterrano colori specifici creati dal CSS al mio file HTML per gli elementi contenent Fizz Buzz e FizzBuzz