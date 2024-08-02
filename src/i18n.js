import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "language": "Language",
          "mortgageAmount": "Mortgage Amount",
          "interestRate": "Interest Rate",
          "mortgageTerm": "Mortgage Term",
          "mortgageType": "Mortgage Type",
          "repayment": "Repayment",
          "interestOnly": "Interest Only",
          "calculateRepayments": "Calculate Repayments",
          "resultsInfo": "Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.",
          "yourMonthlyRepayments": "Your monthly repayments",
          "totalRepayments": "Total you'll repay over the term",
          "resultsHere": "Results shown here",
          "yourResults": "Your results",
          "resultsPlaceholder": "Complete the form and click “calculate repayments” to see what your monthly repayments would be.",
          "fieldRequired": "This Field is Required"
        }
      },
      nl: {
        translation: {
          "language": "Taal",
          "mortgageAmount": "Hypotheekbedrag",
          "interestRate": "Rentevoet",
          "mortgageTerm": "Hypotheektermijn",
          "years": "Jaren",
          "mortgageType": "Hypotheektype",
          "repayment": "Aflossing",
          "interestOnly": "Alleen Rente",
          "calculateRepayments": "Bereken Terugbetalingen",
          "resultsInfo": "Uw resultaten worden hieronder weergegeven op basis van de door u verstrekte informatie. Om de resultaten aan te passen, bewerkt u het formulier en klikt u opnieuw op 'bereken aflossingen'.",
          "yourMonthlyRepayments": "Uw maandelijkse aflossingen",
          "totalRepayments": "Totaal dat u over de termijn terugbetaalt",
          "resultsHere": "Resultaten hier getoond",
          "yourResults": "Uw resultaten",
          "resultsPlaceholder": "Vul het formulier in en klik op 'bereken aflossingen' om te zien wat uw maandelijkse aflossingen zouden zijn.",
          "fieldRequired": "Dit veld is verplicht"
        }
      },
      fr: {
        translation: {
          "language": "Langue",
          "mortgageAmount": "Montant du prêt hypothécaire",
          "interestRate": "Taux d'intérêt",
          "mortgageTerm": "Durée du prêt hypothécaire",
          "years": "Années",
          "mortgageType": "Type de prêt hypothécaire",
          "repayment": "Remboursement",
          "interestOnly": "Intérêts seulement",
          "calculateRepayments": "Calculer les Remboursements",
          "resultsInfo": "Vos résultats sont affichés ci-dessous en fonction des informations que vous avez fournies. Pour ajuster les résultats, modifiez le formulaire et cliquez à nouveau sur 'calculer les remboursements'.",
          "yourMonthlyRepayments": "Vos remboursements mensuels",
          "totalRepayments": "Total que vous rembourserez sur la durée",
          "resultsHere": "Résultats affichés ici",
          "yourResults": "Vos résultats",
          "resultsPlaceholder": "Remplissez le formulaire et cliquez sur 'calculer les remboursements' pour voir ce que seraient vos remboursements mensuels.",
          "fieldRequired": "Ce champ est requis"
        }
      },
      es: {
        translation: {
          "language": "Idioma",
          "mortgageAmount": "Monto de la hipoteca",
          "interestRate": "Tasa de interés",
          "mortgageTerm": "Plazo de la hipoteca",
          "years": "Años",
          "mortgageType": "Tipo de hipoteca",
          "repayment": "Reembolso",
          "interestOnly": "Solo intereses",
          "calculateRepayments": "Calcular Reembolsos",
          "resultsInfo": "Sus resultados se muestran a continuación según la información proporcionada. Para ajustar los resultados, edite el formulario y haga clic en 'calcular reembolsos' nuevamente.",
          "yourMonthlyRepayments": "Sus reembolsos mensuales",
          "totalRepayments": "Total que reembolsará durante el plazo",
          "resultsHere": "Resultados mostrados aquí",
          "yourResults": "Sus resultados",
          "resultsPlaceholder": "Complete el formulario y haga clic en 'calcular reembolsos' para ver cuáles serían sus reembolsos mensuales.",
          "fieldRequired": "Este campo es obligatorio"
      }
      },
      de: {
        translation: {
          "language": "Sprache",
          "mortgageAmount": "Hypothekenbetrag",
          "interestRate": "Zinssatz",
          "mortgageTerm": "Hypothekenlaufzeit",
          "years": "Jahre",
          "mortgageType": "Hypothekentyp",
          "repayment": "Rückzahlung",
          "interestOnly": "Nur Zinsen",
          "calculateRepayments": "Rückzahlungen Berechnen",
          "resultsInfo": "Ihre Ergebnisse werden unten basierend auf den von Ihnen bereitgestellten Informationen angezeigt. Um die Ergebnisse anzupassen, bearbeiten Sie das Formular und klicken Sie erneut auf 'Rückzahlungen berechnen'.",
          "yourMonthlyRepayments": "Ihre monatlichen Rückzahlungen",
          "totalRepayments": "Gesamtrückzahlung über die Laufzeit",
          "resultsHere": "Hier angezeigte Ergebnisse",
          "yourResults": "Ihre Ergebnisse",
          "resultsPlaceholder": "Füllen Sie das Formular aus und klicken Sie auf 'Rückzahlungen berechnen', um zu sehen, wie hoch Ihre monatlichen Rückzahlungen wären.",
          "fieldRequired": "Dieses Feld ist erforderlich"
      }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

  export { i18n, useTranslation };