# express-smoke-testing
Integrating smoke tests into your Express app Travis pipeline

## Should I use OpenAPI/Swagger definitions or API Blueprint definitions?
While OpenAPI 2.0 (a.k.a. Swagger) or the newer OpenAPI 3.0 specifications can often enable auto-generating/scaffolding code for your particular framework, it does not enable smoke testing of standard HTML with Dredd. Dredd will only test 2xx responses for OpenAPI definitions, thereby not enabling you to smoke test your 404 handling. With some more setup, you could manually write smoke tests and run all HTTP responses listed in your spec. The alternative, though, is to use the simple API Blueprint spec for smoke testing your pages. It is easy enough to separate your API smoke testing from your page smoke testing that I see little reason to try to keep them using the same specification.
