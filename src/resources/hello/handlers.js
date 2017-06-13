class HelloHandler {
  static async get(request, reply) {
    return reply({
      hello: 'world'
    });
  }
}

module.exports = HelloHandler;
