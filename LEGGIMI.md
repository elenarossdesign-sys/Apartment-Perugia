# Apartment Perugia – sito web

Sito in Next.js con pagine in italiano (`/it`) e inglese (`/en`):
Home, Camera Raffaello, Camera Bacio, Perugia (blog), articoli e Contattaci.

---

## 1. Metterlo online (una volta sola)

### A. GitHub
1. Crea un account gratuito su https://github.com.
2. In alto a destra premi **+** › **New repository**. Nome: `apartment-perugia`. Lascialo **Private** e premi **Create repository**.
3. Nella pagina del repository vuoto clicca **uploading an existing file**.
4. Trascina dentro **tutto il contenuto** della cartella `apartment-perugia` (non la cartella stessa: i file e le cartelle che contiene).
5. Premi **Commit changes**.

### B. Vercel
1. Vai su https://vercel.com e scegli **Continue with GitHub**.
2. **Add New… › Project**, scegli `apartment-perugia` e premi **Import**.
3. Non cambiare nulla e premi **Deploy**. Dopo un paio di minuti il sito è online su un indirizzo tipo `apartment-perugia.vercel.app`.

## 2. Collegare il modulo "Contattaci" alla tua email

Scegli **uno** dei due servizi e registrati con l'email su cui vuoi ricevere le richieste.

**Web3Forms (consigliato)**
1. Vai su https://web3forms.com, inserisci la tua email e premi **Create Access Key**.
2. Ti arriva un'email con la **Access Key**.

**Formspree (in alternativa)**
1. Registrati su https://formspree.io e crea un nuovo form.
2. Copia l'ID del form: è la parte finale dell'indirizzo, tipo `https://formspree.io/f/`**`xyzabcd`**.

**Poi, su Vercel:**
1. Apri il progetto › **Settings** › **Environment Variables**.
2. Aggiungi la variabile:
   - Web3Forms: nome `NEXT_PUBLIC_WEB3FORMS_KEY`, valore = la tua Access Key
   - Formspree: nome `NEXT_PUBLIC_FORMSPREE_ID`, valore = l'ID del form
3. Aggiungi anche `NEXT_PUBLIC_SITE_URL` con l'indirizzo del sito (es. `https://apartment-perugia.vercel.app`).
4. Vai in **Deployments**, apri il menu **⋯** dell'ultimo deploy e premi **Redeploy**.
5. Prova il modulo scrivendoti da sola: il messaggio arriva nella tua casella.

Quando rispondi all'email ricevuta, la risposta va direttamente all'ospite.

## 3. Modificare i contenuti

Ogni modifica caricata su GitHub viene pubblicata da sola da Vercel.
Su GitHub apri il file, premi la matita ✏️, modifica e premi **Commit changes**.

| Cosa | File |
|---|---|
| Email, telefono, indirizzo, CIN, WhatsApp, link Booking/Airbnb/Instagram, tempi di risposta, voti | `lib/site.ts` |
| Camere (testi, prezzi, servizi, foto), recensioni, distanze, domande frequenti, articoli del blog | `lib/content.ts` |
| Testi della Home | `app/[locale]/page.tsx` (in alto, sezione `C`) |
| Testi di pulsanti e menu | `lib/i18n.ts` |
| Foto | cartella `public/img` (stesso nome = sostituzione) |

I testi tra parentesi quadre, tipo `[IL TUO CIN]`, sono ancora da completare.

## 4. Dominio (quando vuoi)
Su Vercel: progetto › **Settings** › **Domains** › aggiungi `apartmentperugia.it` (o il tuo dominio) e segui le istruzioni per i DNS. Poi aggiorna `NEXT_PUBLIC_SITE_URL`.

## 5. Cookie e privacy (iubenda)
Quando hai il tuo account iubenda, aggiungi su Vercel `NEXT_PUBLIC_IUBENDA_SITE_ID` e `NEXT_PUBLIC_IUBENDA_COOKIE_POLICY_ID` (li trovi nel pannello iubenda) e incolla i link di privacy e cookie policy in `lib/site.ts` › `legal`. Il banner appare da solo.

---

### Per chi sviluppa
```
npm install
npm run dev      # http://localhost:3000
npm run build
```
