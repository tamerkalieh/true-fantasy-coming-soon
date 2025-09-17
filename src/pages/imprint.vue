<script setup lang="ts"></script>

<template>
  <main class="bg-1a1a1a text-white w-full min-h-screen">
    <div class="w-full px-4 md:w-2/3 md:px-0 mx-auto py-12 md:py-52">
      <h1 id="imprint-title">Impressum</h1>

      <section aria-labelledby="provider">
        <h2 id="provider">Angaben gemäß § 5 TMG</h2>
        <p><strong>SafeXSmart KI Solutions UG (haftungsbeschränkt) i.G.</strong></p>
        <address>
          Kurfürstendamm 187<br />
          10707 Berlin<br />
          Deutschland
        </address>
        <p>Vertreten durch den Geschäftsführer: Thaizzier Moussa</p>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact">Kontakt</h2>
        <p>Telefon: <span>[Telefonnummer einfügen]</span></p>
        <p>E-Mail: <a href="mailto:info@true-fantasy.ai">info@true-fantasy.ai</a></p>
        <p>Web: <a href="https://www.true-fantasy.ai" target="_blank" rel="noopener">https://www.true-fantasy.ai</a></p>
      </section>

      <section aria-labelledby="register">
        <h2 id="register">Registereintrag</h2>
        <p>Die Gesellschaft befindet sich in Gründung; die Eintragung ins Handelsregister ist beantragt.</p>
      </section>

      <section aria-labelledby="vat">
        <h2 id="vat">Umsatzsteuer-ID</h2>
        <p>USt-IdNr.: wird nachgetragen</p>
      </section>

      <section aria-labelledby="content-resp">
        <h2 id="content-resp">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>Thaizzier Moussa, Anschrift wie oben.</p>
      </section>

      <section aria-labelledby="odr">
        <h2 id="odr">EU-Streitschlichtung / Verbraucher&shy;streit&shy;beilegung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank"
            rel="noopener">https://ec.europa.eu/consumers/odr/</a>
        </p>
        <p>
          Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section aria-labelledby="liability-content">
        <h2 id="liability-content">Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
          allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
          Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden entsprechender Rechtsverletzungen entfernen wir diese Inhalte umgehend.
        </p>
      </section>

      <section aria-labelledby="liability-links">
        <h2 id="liability-links">Haftung für Links</h2>
        <p>
          Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
          Deshalb können wir für diese fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
          ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Rechtswidrige Inhalte waren zum
          Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
          jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
          Rechtsverletzungen entfernen wir derartige Links umgehend.
        </p>
      </section>

      <section aria-labelledby="copyright">
        <h2 id="copyright">Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet, sofern
          nicht anders ausgewiesen. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden
          die Urheberrechte Dritter beachtet; insbesondere werden Inhalte Dritter als solche gekennzeichnet. Solltest
          du trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
          Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Inhalte umgehend.
        </p>
      </section>
      <div class="mt-10">
        <RouterLink to="/">← Zurück zur Startseite</RouterLink>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped>
h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.2rem;
}

section {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin-bottom: 1.5rem;
}
</style>
