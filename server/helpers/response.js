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
  badRequest(res, message) {
    return res.status(400).json({ status: 400, message });
  },

  // 401 Unauthorized
  unauthorized(res, message) {
    return res.status(401).json({ status: 401, message });
  },

  // 403 Forbidden
  forbidden(res, message) {
    res.status(403).json({ status: 403, message });
  },

  // 404 Not Found
  notFound(res, message) {
    return res.status(404).json({ status: 404, message });
  },

  // 500 Internal Server Error
  internalServerError(res, message) {
    return res.status(500).json({ status: 500, message });
  },
};
