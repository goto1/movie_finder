module.exports = {
  // 200 OK
  ok(res, message, token) {
    const info = token ? { status: 200, message, token } : { status: 200, message };

    return res.status(200).json(info);
  },

  // 201 Created
  created(res, message, token) {
    const info = token ? { status: 201, message, token } : { status: 201, message };

    return res.status(201).json(info);
  },

  // 304 Not Modified
  notModified(res, message, token) {
    const info = token ? { status: 304, message, token } : { status: 304, message };

    return res.status(304).json(info);
  },

  // 400 Bad Request
  badRequest(res, message, token) {
    const info = token ? { status: 400, message, token } : { status: 400, message };

    return res.status(400).json(info);
  },

  // 404 Not Found
  notFound(res, message, token) {
    const info = token ? { status: 404, message, token } : { status: 404, message };

    return res.status(404).json(info);
  },

  // 500 Internal Server Error
  internalServerError(res, message, token) {
    const info = token ? { status: 500, message, token } : { status: 500, message };

    return res.status(500).json(info);
  },
};
