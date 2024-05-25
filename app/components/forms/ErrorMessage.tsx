import React from "react";
import Text from "../Text";

const ErrorMessage: React.FC<{ error: string | null | undefined }> = ({
  error,
}) => {
  if (!error) return null;

  return <Text color="danger">{error}</Text>;
};

export default ErrorMessage;
