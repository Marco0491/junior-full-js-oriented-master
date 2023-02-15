# junior-full-js-oriented

Per sviluppare l'esercizio si può lanciare il comando:
```sh
npm run dev
```
A questo punto si avvierà un dev server su `http://localhost:8080/`.
Il contenuto della pagina visualizzata è il file index.html con integrato il codice presente dentro il file src/index.js.

Scrivi il codice necessario per rimpiazzare gli elementi con le classi `replace-c_1`, `replace-c_2` (già presenti nel file index.html), con i rispettivi blocchi con id `C_1` e `C_2`.

Ogni blocco deve cambiare colore dopo essere "visto" 5 volte durante lo scrolling dell'utente.
Per "visualizzazione" intendiamo almeno l'80% dell'elemento è visibile all'utente.

Non è richiesta alcuna attenzione al supporto cross-browser.

Plus:

- Misurare il tempo di visualizzazione di ogni elemento aggiunto (si può utilizzare anche il console.log)
- Importante che l’esecuzione delle logiche avvenga il prima possibile appena il DOM è pronto (tips: non puoi sapere come il tuo script verrà integrato in una pagina).
