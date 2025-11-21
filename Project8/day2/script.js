function Page1(){
const firstname = document.getElementById(`firstName`).value;
const middleName = document.getElementById(`middleName`).value;
const lastName = document.getElementById(`lastName`).value;

if(firstname==)
{

}
}
function nextPage(pageNum) {
  const currentPage = document.querySelector(`#page${pageNum - 1}`);
  const requiredFields = currentPage?.querySelectorAll("[required]");
  
  let allValid = true;
  requiredFields?.forEach(input => {
    if (!input.value.trim()) {
      allValid = false;
      input.style.borderColor = "red";
    } else {lastName
      input.style.borderColor = "#ccc";
    }
  });

  if (!allValid) return; 

  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(`page${pageNum}`).classList.remove('hidden');
  document.getElementById(`progress`).value+=33;
 
}

function prevPage(pageNum) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(`page${pageNum}`).classList.remove('hidden');
  document.getElementById(`progress`).value-=33;
}
const goaPincodes = {
  "403503": "Advalpal",
  "403530": "Advoi",
  "403512": "Agarwada",
  "403508": "Aldona",
  "403521": "Alto Betim",
  "403509": "Anjuna",
  "403524": "Arambol",
  "403516": "Arpora",
  "403507": "Assagao",
  "403201": "Bambolim Camp",
  "403202": "Bambolim Complex",
  "403108": "Batim",
  "403101": "Betim",
  "403107": "Betki",
  "403504": "Bicholim",
  "403529": "Bicholim Industrial estate",
  "403506": "Birondam",
  "403001": "C.C.altinho",
  "403510": "Canca",
  "403406": "Candepar",
  "403515": "Candolim",
  "403110": "Carambolim",
  "403002": "Caranzalem",
  "403505": "Carapur",
  "403523": "Carona",
  "403006": "Chimbel",
  "403102": "Chorao",
  "403513": "Colvale",
  "403403": "Malar",
  "403527": "Mandrem",
  "403104": "Mandur",
  "403404": "Marcaim",
  "403109": "N B verem",
  "403114": "Nerul",
  "403004": "NIO Dona paula",
  "403517": "Oxel",
  "403105": "Pale",
  "403203": "Pilar",
  "403206": "Goa University",
  "403501": "Porvorim",
  "403511": "Saligao",
  "403103": "Shiroda",
  "403106": "St.Estevam",
  "403502": "Tivim",
  "403526": "Tivim Ie",
  "403407": "Usgao",
  "403402": "Velha-goa",
  "403801": "A.P.dabolim",
  "403401": "Agapur Adpoi",
  "403702": "Agonda",
  "403705": "Ambaulim",
  "403723": "Ambelim",
  "403701": "Assolna",
  "403714": "Assolda",
  "403802": "Baina",
  "403703": "Balli",
  "403716": "Benaulim",
  "403713": "Betalbhatim",
  "403409": "Betora I.e.",
  "403806": "Bogmalo",
  "403706": "Cacora",
  "403704": "Calem",
  "403718": "Camurlim",
  "403712": "Cansaulim",
  "403717": "Carmona",
  "403731": "Cavelossim",
  "403711": "Chicalim",
  "403715": "Chinchinim",
  "403410": "Collem",
  "403708": "Colva",
  "403710": "Cortalim",
  "403115": "Cundaim I.e.",
  "403709": "Curtorim",
  "403707": "Davorlim",
  "403725": "Dramapur",
  "403602": "Fatorda",
  "403728": "Loliem",
  "403720": "Raia",
  "403804": "Sada",
  "403719": "Sem-rachol soso",
  "403721": "Varca",
  "403726": "Zuarinagar",
  "403604": "Nuvem",
  "403724": "Orlim",
  "403729": "Navelim Camp",
  "403803": "Mormugao",
  "403601": "Margao",
  "403722": "Verna"
};

function fetchCityState() {
  const pincode = document.getElementById("pincode").value.trim();
  const city = document.getElementById("city");
  const state = document.getElementById("state");

  if (goaPincodes[pincode]) {
    city.value = goaPincodes[pincode];
    state.value = "Goa";
  } else {
    city.value = "Unknown";
    state.value = "Goa";
  }
}

function previewData() {
  const data = {
    name: `${document.getElementById("firstName").value} ${document.getElementById("middleName").value} ${document.getElementById("lastName").value}`.trim(),
    dob: document.getElementById("birthDate").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    pincode: document.getElementById("pincode").value,
    card: document.getElementById("cardNumber").value,
    expiry: document.getElementById("expiry").value,
    cvv:document.getElementById("cvv").value
  };

  document.getElementById("previewContent").innerHTML = `
    <p><b>Name:</b> ${data.name}</p>
    <p><b>Date of Birth:</b> ${data.dob}</p>
    <p><b>Address:</b> ${data.address}, ${data.city}, ${data.state} - ${data.pincode}</p>
    <p><b>Card:</b> ${data.card}</p>
    <p><b>Expiry:</b> ${data.expiry}</p>
    <p><b>CVV:</b>${data.cvv}</p>
  `;

 document.getElementById("previewModal").classList.add("show");
}

function closePreview() {
document.getElementById("previewModal").classList.remove("show");

  nextPage(3); 
}

function submitForm() {
  alert("Form submitted successfully!");
  document.getElementById("multiStepForm")?.reset(); // clear inputs
document.getElementById("previewModal").classList.remove("show");

  nextPage(1);
}
