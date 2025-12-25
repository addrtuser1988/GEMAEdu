function getFeedback(score){
  if(score>=8) return "Excellent performance with strong control.";
  if(score>=6) return "Good performance with minor inaccuracies.";
  return "Needs improvement.";
}

function render(data){
  document.getElementById('studentName').textContent = data.name || 'Student';
  const overall = Math.round((data.overall + Number.EPSILON) * 10) / 10;
  document.getElementById('overallScore').textContent = overall;
  document.getElementById('overallFeedback').textContent = getFeedback(overall);
  // chart placeholder: show numeric large
  document.getElementById('chart').textContent = overall;

  const skillsList = document.getElementById('skillsList');
  skillsList.innerHTML = '';
  const scores = data.scores || {};
  for(const [name, val] of Object.entries(scores)){
    const score = Math.round((val + Number.EPSILON) * 10) / 10;
    const pct = Math.max(0, Math.min(100, (score/9)*100));

    const div = document.createElement('div');
    div.className = 'skill';
    div.innerHTML = `<div class="name">${name}</div>
      <div class="bar"><div class="fill" style="width:${pct}%"></div></div>
      <div class="val">${score}</div>`;
    skillsList.appendChild(div);
  }

  // descriptive feedback based on overall
  document.getElementById('descText').textContent = getFeedback(overall);
}

fetch('/api/report').then(r=>r.json()).then(render).catch(err=>{
  document.getElementById('studentName').textContent = 'Error loading report';
  console.error(err);
});
