import {Label} from "../../models/label";

export const frontEndLabel: Label = {
  id: 1,
  text:'Frontend'
 };

export const backEndLabel: Label = {
  id: 2,
  text:'Backend'
};
export const securityLabel: Label = {
  id: 3,
  text:'Security'
};
export const labels: Label[] = [frontEndLabel, backEndLabel,securityLabel];
