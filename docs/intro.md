---
sidebar_position: 1
---

# Unified Health Ecosystem

## Aim

We aim to create open-source digital assets to help hospitals and healthcare facilities, and patients onboard the _Ayushman Bharat Digital Mission_ launched by the Government of India.

The primary deliverable of our project shall be a platform that helps health facilities register themselves and their doctors and caretakers onto the ABDM. Patients too can use the platform to register themselves.

## Project Scope

The assets aims to help make a healthcare facility M1 compliant by providing features for creation of ABHI ID (health ID) for patients. Doctors can also be onboarded onto the ADBM using the assets. For a healthcare facility to achieve the first milestone of ABDM integration, it should be able to create, capture data and verify ABHA IDs.

The recommended steps and requirements are detailed below (as taken from the [NDHM Sandbox documentation](https://sandbox.abdm.gov.in/docs/integration_and_exit_process)):

### Milestone 1 (M1): ABHA Number creation and capture & verification

1. Register partnering facility (HIP) in ABDM Sandbox Health Facility Registry.
2. Collaborate with HIP staff to provide patients with information regarding ABHA Number and ways to create one on their own.
  - Patients with a smartphone can download ABDM Health Records app/any other ABHA Mobile Application to  register their ABHA Number. 
  - Those without a mobile phone can avail assistance at facility registration desk to create an ID using Aadhaar biometric.
3. Develop workflows to capture and verify ABHA Number during registration, if provided by the patient.

  (_Note: OTP authentication will be required only if ABHA Number is shared verbally by patient. Other modes like ABHA Number QR code sharing, HIP QR code scanning will not need OTP step._)

  - Patients with a smartphone can share details via ABHA Number QR code/scan HIP QR code with their ABHA Mobile Application. Those without a smartphone can use their ABHA Number QR code-enabled registration card to share information. This method does not require OTP authentication.
  - Incorporate flows to link ABHA Number with patient information for two use cases:
    - _For new patients,_ capture ABHA Number details to obtain basic demographic details with consent.
      Kindly note fields like name, gender & year of birth should be frozen for edits in the patient registration page. We recommend providing both Mobile & Aadhaar OTP modes of ABHA Number authentication as part of the workflow
    - _For existing patients,_ provide option to link ABHA Number with the patient registration ID – use fuzzy match ABDM demographic verification APIs for the mapping. Ensure demographic information (name, gender, year of birth) obtained from the ABHA Number system serves as the master for patient information in the HMIS/LIMS
  - Ensure that the linking token created at the time of ABHA Number capture and verification is saved.

## Where Our Assets Fit In

Our assets provide an easy to use layer above the Government of India's ABDM infrastructure with the primary purpose of increasing the number of patients and healthcare facilities registered with the ABDM.

![Where does it fit in](/img/onboarding_assets_usecase.svg)