import { Structure as _Structure_ } from "@aws-sdk/types";

export const RuleSetDoesNotExistException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "RuleSetDoesNotExistException",
  exceptionCode: "RuleSetDoesNotExist"
};