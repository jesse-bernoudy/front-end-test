export const ApplicantStage = Object.freeze({
    APPLIED: "Applied",
    INTERVIEWED: "Interviewed",
    OFFER: "Offered",
    ACCEPTED: "Accepted",
    REJECTED: "Rejected"
  }
);

export function getEnumKey(enums, value) {
  const indexOfValue = Object.values(enums).indexOf(value);
  const key = Object.keys(enums)[indexOfValue];
  return key;
}

export default ApplicantStage