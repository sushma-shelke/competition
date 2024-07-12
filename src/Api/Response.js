export default function Response() {
  // Define the properties of the Response object
  this.id = undefined;
  this.result = undefined;
  this.err = [];
  this.status = undefined;
  this.cancelled = false;
}

export function ApiValidationErrorResponse(
  keyword,
  dataPath,
  schemaPath,
  params,
  message
) {
  this.keyword = keyword;
  this.dataPath = dataPath;
  this.schemaPath = schemaPath;
  this.params = params;
  this.message = message;
}
