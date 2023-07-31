import ApiError from "@error/ApiError";

class ResourceNotFoundError extends ApiError {
  constructor(uuid: string) {
    super(404, `${uuid}: resource not found`);
  }
}

export default ResourceNotFoundError
