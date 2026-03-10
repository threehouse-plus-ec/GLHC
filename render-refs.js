(async function(){
  var d=await fetch("references.json").then(function(r){return r.json()});
  var s=await fetch("sites.json").then(function(r){return r.json()});
  var el=document.getElementById("rc");
  var h="";

  h+="<h2>1 &mdash; Constraint Sources</h2>";
  h+="<p>Framework parameters; not site-specific.</p>";
  h+='<table class="ref-table"><thead><tr><th>#</th><th>Reference</th><th>Role</th></tr></thead><tbody>';
  d.constraint.forEach(function(r){
    h+='<tr><td class="ref-id">['+r.id+']</td><td>'+r.ref+'</td><td>'+r.role+'</td></tr>';
  });
  h+="</tbody></table>";

  h+="<h2>2 &mdash; Claim Sources (by Site)</h2>";
  var sm={};
  s.sites.forEach(function(x){sm[x.id]=x.id+" &middot; "+x.name;});
  var cs="";
  d.claim.forEach(function(r){
    if(r.site!==cs){
      if(cs) h+="</tbody></table>";
      cs=r.site;
      h+="<h3>"+(sm[r.site]||r.site)+"</h3>";
      h+='<table class="ref-table"><thead><tr><th>#</th><th>Reference</th></tr></thead><tbody>';
    }
    h+='<tr><td class="ref-id">['+r.id+']</td><td>'+r.ref+'</td></tr>';
  });
  if(cs) h+="</tbody></table>";

  h+="<h2>3 &mdash; Custodial &amp; Institutional Sources</h2>";
  h+='<table class="ref-table"><thead><tr><th>#</th><th>Reference</th><th>Role</th></tr></thead><tbody>';
  d.custodial.forEach(function(r){
    h+='<tr><td class="ref-id">['+r.id+']</td><td>'+r.ref+'</td><td>'+r.role+'</td></tr>';
  });
  h+="</tbody></table>";

  h+="<h2>4 &mdash; Related Work (Landscape)</h2>";
  h+='<table class="ref-table"><thead><tr><th>#</th><th>Reference</th><th>Role</th></tr></thead><tbody>';
  if(d.landscape){d.landscape.forEach(function(r){h+='<tr><td class="ref-id">['+r.id+']</td><td>'+r.ref+'</td><td>'+r.role+'</td></tr>';});}
  h+="</tbody></table>";

  h+="<h2>5 &mdash; Deprecated / Demoted Sources</h2>";
  h+="<p>Sources removed from load-bearing status. Explicit audit trail.</p>";
  h+='<table class="ref-table"><thead><tr><th>Former #</th><th>Source</th><th>Status</th><th>Replacement</th></tr></thead><tbody>';
  d.deprecated.forEach(function(r){
    h+='<tr><td class="ref-id">['+r.former_id+']</td><td>'+r.source+'</td>';
    h+='<td class="dep-status">'+r.status+'</td><td>'+r.replacement+'</td></tr>';
  });
  h+="</tbody></table>";

  el.innerHTML=h;
})();
