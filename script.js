function policyHolderEqualClaimant() {
  let policyHolderName = document.getElementById("policyHolder-name");
  let policyHolderSurname = document.getElementById("policyHolder-surname");
  let policyHolderEmail = document.getElementById("policyHolder-email");
  let policyHolderPhone = document.getElementById("policyHolder-phone");

  let claimantName = document.getElementById("claimant-name");
  let claimantSurname = document.getElementById("claimant-surname");
  let claimantEmail = document.getElementById("claimant-email");
  let claimantPhone = document.getElementById("claimant-phone");

  policyHolderName.value = claimantName.value;

 
}
