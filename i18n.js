// i18n.js

// Objeto com traduções
const translations = {
  en: {
    selectLanguage: "Select Language:",
    title: "Priority Matrix Tool",
    impact: "Impact",
    impactBusiness: "Business:",
    impactOutage: "Outage:",
    impactUsers: "Impacted Users:",
    impactPoints: "PI Points:",
    urgency: "Urgency",
    urgencyDamage: "Damage Increasing:",
    urgencyWork: "Work Stopped:",
    urgencyData: "Data:",
    calculate: "Calculate Priority",
    priority1: "1 Critical",
    priority2: "2 High",
    priority3: "3 Medium",
    priority4: "4 Low",
    select: "Select",
    extensiveBusiness: "Extensive - Highly business critical",
    significantBusiness: "Significant - Business outage",
    moderateBusiness: "Moderate - Moderate impact",
    localizedBusiness: "Localized - Low impact",
    extensiveOutage: "Extensive - Division-wide",
    significantOutage: "Significant - Regional",
    moderateOutage: "Moderate - Site-wide",
    localizedOutage: "Localized - Local",
    extensiveUsers: "100+ users",
    significantUsers: "50-99 users",
    moderateUsers: "6-49 users",
    localizedUsers: "1-5 users",
    extensivePoints: "2k+ points",
    significantPoints: "1k-2k points",
    moderatePoints: "500-1k points",
    localizedPoints: "Less than 500",
    criticalDamage: "Critical - Rapid increase",
    highDamage: "High - Considerable increase",
    mediumDamage: "Medium - Moderate",
    lowDamage: "Low - Marginal",
    criticalWork: "Critical - Highly time sensitive",
    highWork: "High - Time sensitive",
    mediumWork: "Medium - Inconvenient",
    lowWork: "Low - Not urgent",
    criticalData: "Critical - Loss/unavailable",
    highData: "High - Performance issue",
    mediumData: "Medium - PI Vision issues",
    lowData: "Low - Point creation/update",
  },
  pt: {
    selectLanguage: "Selecionar Idioma:",
    title: "Ferramenta Matriz de Prioridade",
    impact: "Impacto",
    impactBusiness: "Negócio:",
    impactOutage: "Interrupção:",
    impactUsers: "Usuários Impactados:",
    impactPoints: "Pontos PI:",
    urgency: "Urgência",
    urgencyDamage: "Danos Crescentes:",
    urgencyWork: "Trabalho Parado:",
    urgencyData: "Dados:",
    calculate: "Calcular Prioridade",
    priority1: "1 Crítico",
    priority2: "2 Alto",
    priority3: "3 Médio",
    priority4: "4 Baixo",
    select: "Selecionar",
    extensiveBusiness: "Extenso - Altamente crítico para o negócio",
    significantBusiness: "Significativo - Interrupção no negócio",
    moderateBusiness: "Moderado - Impacto moderado",
    localizedBusiness: "Localizado - Baixo impacto",
    extensiveOutage: "Extenso - Em toda a divisão",
    significantOutage: "Significativo - Regional",
    moderateOutage: "Moderado - Em toda a unidade",
    localizedOutage: "Localizado - Local",
    extensiveUsers: "100+ usuários",
    significantUsers: "50-99 usuários",
    moderateUsers: "6-49 usuários",
    localizedUsers: "1-5 usuários",
    extensivePoints: "Mais de 2k pontos",
    significantPoints: "1k-2k pontos",
    moderatePoints: "500-1k pontos",
    localizedPoints: "Menos de 500",
    criticalDamage: "Crítico - Aumento rápido",
    highDamage: "Alto - Aumento considerável",
    mediumDamage: "Médio - Moderado",
    lowDamage: "Baixo - Marginal",
    criticalWork: "Crítico - Altamente sensível ao tempo",
    highWork: "Alto - Sensível ao tempo",
    mediumWork: "Médio - Inconveniente",
    lowWork: "Baixo - Não urgente",
    criticalData: "Crítico - Perda/indisponível",
    highData: "Alto - Problema de desempenho",
    mediumData: "Médio - Problemas no PI Vision",
    lowData: "Baixo - Criação/atualização de ponto",
  }
};

// Função para trocar textos do site baseado no idioma selecionado
function translatePage(lang) {
  if (!translations[lang]) {
    console.warn(`Idioma ${lang} não encontrado, usando 'en' por padrão.`);
    lang = 'en';
  }

  // Atualiza atributo lang do html
  document.documentElement.lang = lang;

  // Traduz elementos com data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Traduz options com data-i18n-option
  document.querySelectorAll("option[data-i18n-option]").forEach(opt => {
    const key = opt.getAttribute("data-i18n-option");
    if (translations[lang][key]) {
      opt.textContent = translations[lang][key];
    }
  });

  // Atualiza label do seletor de idioma para o idioma correto
  const langLabel = document.querySelector("label[for='language-select']");
  if (langLabel && translations[lang]["selectLanguage"]) {
    langLabel.textContent = translations[lang]["selectLanguage"];
  }
}

// Função para salvar idioma no localStorage
function saveLanguage(lang) {
  try {
    localStorage.setItem("preferredLanguage", lang);
  } catch (e) {
    console.warn("Não foi possível salvar o idioma no localStorage.", e);
  }
}

// Função para carregar idioma do localStorage ou usar padrão
function loadLanguage() {
  let lang = 'en'; // padrão
  try {
    const storedLang = localStorage.getItem("preferredLanguage");
    if (storedLang && translations[storedLang]) {
      lang = storedLang;
    }
  } catch (e) {
    console.warn("Não foi possível carregar o idioma do localStorage.", e);
  }
  return lang;
}

// Inicialização ao carregar a página
function initLanguageSelector() {
  const select = document.getElementById("language-select");
  if (!select) return;

  // Carrega idioma salvo
  const lang = loadLanguage();
  select.value = lang;
  translatePage(lang);

  // Adiciona evento de troca de idioma
  select.addEventListener("change", (event) => {
    const selectedLang = event.target.value;
    translatePage(selectedLang);
    saveLanguage(selectedLang);
  });
}

// Executa a inicialização quando a página carrega
window.addEventListener("DOMContentLoaded", () => {
  initLanguageSelector();
});
