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
