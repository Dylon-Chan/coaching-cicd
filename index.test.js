const { handler } = require('./index');

describe('handler', () => {
  it('should return a 200 status code and a success message', async () => {
    const event = {}; // You can provide any relevant event data here

    const response = await handler(event);

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      JSON.stringify(
        {
          message: 'Your function executed successfully!',
        },
        null,
        2
      )
    );
  });
});
