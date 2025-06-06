const translations = {
  en: {
    impact: "Impact",
    business: "Business:",
    outage: "Outage:",
    users: "Impacted Users:",
    points: "Number of PI Points:",
    urgency: "Urgency",
    damage: "Damage Increasing:",
    work: "Work Stopped:",
    data: "Data:",
    extensive_business: "Extensive - Highly business critical",
    significant_business: "Significant - Significant business outage",
    moderate_business: "Moderate - Moderate business criticality",
    localized_business: "Localized - Low business criticality",
    extensive_outage: "Extensive - Division-wide outage",
    significant_outage: "Significant - Regional outage",
    moderate_outage: "Moderate - Site wide-outage",
    localized_outage: "Localized - Local outage",
    extensive_users: "Extensive - 100 or more users",
    significant_users: "Significant - 50-99 users",
    moderate_users: "Moderate - 6-49 users",
    localized_users: "Localized - 1-5 users",
    extensive_points: "Extensive - 2k PI Points or more",
    significant_points: "Significant - 1k-2k PI Points",
    moderate_points: "Moderate - 500-1k PI Points",
    localized_points: "Localized - Less 500 PI Points",
    critical_damage: "Critical - Damage is increasing rapidly",
    high_damage: "High - Damage increases considerably",
    medium_damage: "Medium - Damage increases moderately",
    low_damage: "Low - Damage marginally increases",
    critical_work: "Critical - Work stopped is highly time sensitive",
    high_work: "High - Work stopped is time sensitive",
    medium_work: "Medium - Work stopped is inconvenient",
    low_work: "Low - Work stopped is not time sensitive",
    critical_data: "Critical - Data Loss, unavailable for end user, quality, replication",
    high_data: "High - Data unavailable for data consumer or system performance",
    medium_data: "Medium - PI Vision display issue",
    low_data: "Low - PI Point creation or update",
    header_title: "Priority Matrix Tool",
  },
  pt: {
    impact: "Impacto",
    business: "Negócios:",
    outage: "Interrupção:",
    users: "Usuários Impactados:",
    points: "Número de Pontos PI:",
    urgency: "Urgência",
    damage: "Aumento de Danos:",
    work: "Trabalho Parado:",
    data: "Dados:",
    extensive_business: "Extensivo - Altamente crítico para negócios",
    significant_business: "Significativo - Interrupção significativa de negócios",
    moderate_business: "Moderado - Criticidade moderada para negócios",
    localized_business: "Localizado - Baixa criticidade para negócios",
    extensive_outage: "Extensivo - Interrupção em toda a divisão",
    significant_outage: "Significativo - Interrupção regional",
    moderate_outage: "Moderado - Interrupção em todo o site",
    localized_outage: "Localizado - Interrupção local",
    extensive_users: "Extensivo - 100 ou mais usuários",
    significant_users: "Significativo - 50-99 usuários",
    moderate_users: "Moderado - 6-49 usuários",
    localized_users: "Localizado - 1-5 usuários",
    extensive_points: "Extensivo - 2k Pontos PI ou mais",
    significant_points: "Significativo - 1k-2k Pontos PI",
    moderate_points: "Moderado - 500-1k Pontos PI",
    localized_points: "Localizado - Menos de 500 Pontos PI",
    critical_damage: "Crítico - Danos aumentando rapidamente",
    high_damage: "Alto - Danos aumentam consideravelmente",
    medium_damage: "Médio - Danos aumentam moderadamente",
    low_damage: "Baixo - Danos aumentam marginalmente",
    critical_work: "Crítico - Trabalho parado é altamente sensível ao tempo",
    high_work: "Alto - Trabalho parado é sensível ao tempo",
    medium_work: "Médio - Trabalho parado é inconveniente",
    low_work: "Baixo - Trabalho parado não é sensível ao tempo",
    critical_data: "Crítico - Perda de dados, indisponível para o usuário final, qualidade, replicação",
    high_data: "Alto - Dados indisponíveis para o consumidor de dados ou desempenho do sistema",
    medium_data: "Médio - Problema de exibição do PI Vision",
    low_data: "Baixo - Criação ou atualização de ponto PI",
    header_title: "Ferramenta de Matriz de Prioridade",
  },
};

function changeLanguage() {
  const lang = document.getElementById("language-select").value;

  // Update headers
  document.querySelector("h1").textContent = translations[lang].header_title;
  document.querySelectorAll(".card > h2")[0].textContent = translations[lang].impact;
  document.querySelectorAll(".card > h2")[1].textContent = translations[lang].urgency;

  // Update labels for Impact
  document.querySelector("label[for='impact-business']").textContent = translations[lang].business;
  document.querySelector("label[for='impact-outage']").textContent = translations[lang].outage;
  document.querySelector("label[for='impact-users']").textContent = translations[lang].users;
  document.querySelector("label[for='impact-points']").textContent = translations[lang].points;

  // Update labels for Urgency
  document.querySelector("label[for='urgency-damage']").textContent = translations[lang].damage;
  document.querySelector("label[for='urgency-work']").textContent = translations[lang].work;
  document.querySelector("label[for='urgency-data']").textContent = translations[lang].data;

  // Update Impact business options
  const impactBusiness = document.getElementById("impact-business");
  impactBusiness.options[0].textContent = translations[lang].extensive_business;
  impactBusiness.options[1].textContent = translations[lang].significant_business;
  impactBusiness.options[2].textContent = translations[lang].moderate_business;
  impactBusiness.options[3].textContent = translations[lang].localized_business;

  // Update Impact outage options
  const impactOutage = document.getElementById("impact-outage");
  impactOutage.options[0].textContent = translations[lang].extensive_outage;
  impactOutage.options[1].textContent = translations[lang].significant_outage;
  impactOutage.options[2].textContent = translations[lang].moderate_outage;
  impactOutage.options[3].textContent = translations[lang].localized_outage;

  // Update Impact users options
  const impactUsers = document.getElementById("impact-users");
  impactUsers.options[0].textContent = translations[lang].extensive_users;
  impactUsers.options[1].textContent = translations[lang].significant_users;
  impactUsers.options[2].textContent = translations[lang].moderate_users;
  impactUsers.options[3].textContent = translations[lang].localized_users;

  // Update Impact points options
  const impactPoints = document.getElementById("impact-points");
  impactPoints.options[0].textContent = translations[lang].extensive_points;
  impactPoints.options[1].textContent = translations[lang].significant_points;
  impactPoints.options[2].textContent = translations[lang].moderate_points;
  impactPoints.options[3].textContent = translations[lang].localized_points;

  // Update Urgency damage options
  const urgencyDamage = document.getElementById("urgency-damage");
  urgencyDamage.options[0].textContent = translations[lang].critical_damage;
  urgencyDamage.options[1].textContent = translations[lang].high_damage;
  urgencyDamage.options[2].textContent = translations[lang].medium_damage;
  urgencyDamage.options[3].textContent = translations[lang].low_damage;

  // Update Urgency work options
  const urgencyWork = document.getElementById("urgency-work");
  urgencyWork.options[0].textContent = translations[lang].critical_work;
  urgencyWork.options[1].textContent = translations[lang].high_work;
  urgencyWork.options[2].textContent = translations[lang].medium_work;
  urgencyWork.options[3].textContent = translations[lang].low_work;

  // Update Urgency data options
  const urgencyData = document.getElementById("urgency-data");
  urgencyData.options[0].textContent = translations[lang].critical_data;
  urgencyData.options[1].textContent = translations[lang].high_data;
  urgencyData.options[2].textContent = translations[lang].medium_data;
  urgencyData.options[3].textContent = translations[lang].low_data;
}

window.onload = function () {
  changeLanguage();
};

function calculatePriority() {
  const selects = document.querySelectorAll('select');
  let allSelected = true;
  selects.forEach(select => {
    if (!select.value) allSelected = false;
  });

  const errorMessage = document.getElementById("error-message");
  if (!allSelected) {
    errorMessage.textContent = "⚠️ Please fill in all fields.";
    return;
  } else {
    errorMessage.textContent = "";
  }

  const map = {
    extensive: 1,
    significant: 2,
    moderate: 3,
    localized: 4,
    critical: 1,
    high: 2,
    medium: 3,
    low: 4
  };

  const inputs = [
    "impact-business", "impact-outage", "impact-users", "impact-points",
    "urgency-damage", "urgency-work", "urgency-data"
  ];

  const values = inputs.map(id => map[document.getElementById(id).value]);
  const highest = Math.min(...values);
  const labels = ["Critical", "High", "Medium", "Low"];
  document.getElementById("result").textContent = `Priority: ${highest} (${labels[highest - 1]})`;

  // Reset highlights
  document.querySelectorAll('.priority-cell').forEach(el => el.classList.remove('highlight'));
  document.getElementById(`priority-${highest}`).classList.add('highlight');
}

function changeLanguage() {
  alert("🌐 Language switching is not yet implemented.");
}
